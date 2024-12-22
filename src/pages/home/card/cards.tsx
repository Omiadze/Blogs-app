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

  const [debouncedSearchText] = useDebounce(watchedSearchText, 500);

  // Reset to page 1 when the search text changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchText]);

  const itemsPerPage = 5;

  // Fetch blogs with server-side pagination
  useEffect(() => {
    const fetchBlogs = async () => {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage - 1;

      // ეს რექვესთი მჭირდება search-ისთვის
      const { count: totalCount, error: countError } = await supabase
        .from("Blogs")
        .select("*", { count: "exact", head: true })
        .ilike("title_en", `%${debouncedSearchText || ""}%`);

      if (countError) {
        console.error("Error fetching total count:", countError);
        return;
      }

      if (totalCount === 0 || start >= (totalCount ?? 0)) {
        //  reset data
        setBlogs([]);
        setTotalPages(1);
        return;
      }

      const { data, error } = await supabase
        .from("Blogs")
        .select("*")
        .ilike("title_en", `%${debouncedSearchText || ""}%`)
        .range(start, end);

      if (error) {
        console.error("Error fetching blogs:", error);
        return;
      }

      if (data) {
        setBlogs(data);
        setTotalPages(Math.ceil((totalCount ?? 0) / itemsPerPage));
      }
    };

    fetchBlogs();

    setSearchParams(
      qs.stringify({ searchText: debouncedSearchText }, { skipNulls: true }),
    );
  }, [debouncedSearchText, currentPage, setSearchParams]);

  const handlePageChange = (direction: string) => {
    setCurrentPage((prevPage) => {
      const newPage = direction === "next" ? prevPage + 1 : prevPage - 1;
      if (newPage >= 1 && newPage <= totalPages) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return newPage;
      }
      return prevPage;
    });
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
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p className="text-center text-muted-foreground">No blogs found.</p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          onClick={() => {
            handlePageChange("prev");
          }}
          disabled={currentPage === 1}
          className="rounded-2xl bg-blue-500 p-2 disabled:opacity-50 dark:border-white dark:text-white"
        >
          Previous
        </button>

        {/* Display page numbers as clickable buttons */}
        <div className="mt-3 flex justify-center gap-2 overflow-auto pb-2 align-middle">
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
              className={`rounded px-2 py-1 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            handlePageChange("next");
          }}
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
