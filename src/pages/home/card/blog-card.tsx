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
  return (
    <div>
      <Card className="mx-auto mb-10 max-w-sm dark:bg-gray-900">
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
                className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700"
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
