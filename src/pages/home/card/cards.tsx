import { getblogs } from "@/api/blogs";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./blog-card";

const Cards: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getblogs(),
    retry: 0,
    refetchOnWindowFocus: false,
  });
  console.log(data);
  return (
    <div className="m-5 w-full">
      {data?.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
};

export default Cards;
