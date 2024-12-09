import BlogCard from "./blog-card";
import { useEffect, useState } from "react";
import { supabase } from "@/supabase";
import { SingleBlog } from "./singleBlog.types";

const Cards: React.FC = () => {
  const [blogs, setBlogs] = useState<SingleBlog[]>([]);

  useEffect(() => {
    supabase
      .from("Blogs")
      .select("*")
      .throwOnError()
      .then((res) => {
        const blogsList = res.data as unknown as SingleBlog[];
        setBlogs(blogsList);
        console.log(res, "this is res");
      });
  }, []);

  return (
    <div className="w-full p-5">
      {blogs?.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
};

export default Cards;
