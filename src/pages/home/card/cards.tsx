import BlogCard from "./blog-card";
import { useEffect, useState } from "react";
import { supabase } from "@/supabase";
import { SingleBlog } from "./singleBlog.types";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useDebounce } from "use-debounce";

const Cards: React.FC = () => {
  const [blogs, setBlogs] = useState<SingleBlog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const parseQueryParams = qs.parse(searchParams.toString()) as {
    searchText?: string;
  };

  const { control, watch } = useForm({
    defaultValues: {
      searchText: parseQueryParams.searchText || "",
    },
  });

  const watchedSearchText = watch("searchText");

  // Use the `use-debounce` hook
  const [debouncedSearchText] = useDebounce(watchedSearchText, 500);

  // Number of blogs per page
  const itemsPerPage = 5;

  // Fetch the blogs with pagination
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage - 1;

    supabase
      .from("Blogs")
      .select("*", { count: "exact" })
      .ilike("title_en", `%${debouncedSearchText || ""}%`)
      .range(start, end)
      .throwOnError()
      .then((res) => {
        if (res.data) {
          const blogsList = res.data as SingleBlog[];
          setBlogs(blogsList);

          const totalCount = res.count || 0;
          setTotalPages(Math.ceil(totalCount / itemsPerPage));
        } else {
          console.error("Error fetching blogs:", res.error);
        }
      });

    setSearchParams(
      qs.stringify({ searchText: debouncedSearchText }, { skipNulls: true }),
    );
  }, [debouncedSearchText, currentPage, setSearchParams]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full p-5 md:w-1/2">
      <div className="w-200px mb-4 flex text-muted-foreground">
        <Controller
          control={control}
          name="searchText"
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Search" />
          )}
        />
      </div>
      <div className="w-full">
        {blogs?.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="rounded-2xl bg-blue-500 p-2 disabled:opacity-50 dark:border-white dark:text-white"
        >
          Previous
        </button>

        <div className="flex items-center space-x-2">
          {/*  Display page numbers as clickable buttons */}
          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className={`rounded px-2 py-1 ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="rounded-2xl bg-blue-500 p-2 disabled:opacity-50 dark:border-white dark:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;
