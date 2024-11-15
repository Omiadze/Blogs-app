import { getblogs } from "@/api/blogs";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./blog-card";
// type Blog = {
//   id: string;
//   title: string;
//   author: string;
//   content: string;
//   date: string;
//   readTime: string;
//   tags: string[];
// };

const Cards: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getblogs(),
    retry: 0,
    refetchOnWindowFocus: false,
  });
  console.log(data);
  return (
    <div className="w-full">
      {data?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Cards;
