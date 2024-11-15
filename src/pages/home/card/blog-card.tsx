import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Blog } from "@/types/blog";

const BlogCard = ({ blog }: { blog: Blog }) => {
  //useMutation for update
  return (
    <div>
      <Card className="max-w-sm mx-auto dark:bg-gray-900 mb-10">
        <CardHeader>
          <CardTitle>{blog.title}</CardTitle>
          <CardDescription>
            <div className="text-sm text-gray-600">
              By {blog.author} • {blog.date} • {blog.readTime}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-800">{blog.content}</p>
        </CardContent>
        <CardFooter>
          <div className="flex space-x-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-1"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
