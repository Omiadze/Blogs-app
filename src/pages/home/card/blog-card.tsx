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
      <Card className="mx-auto mb-10 max-w-sm rounded-lg border border-border bg-card p-6 text-card-foreground">
        <CardHeader>
          <CardTitle className="font-semibold text-primary">
            {blog.title}
          </CardTitle>
          <CardDescription>
            <div className="text-sm text-muted-foreground">
              By {blog.author} • {blog.date} • {blog.readTime}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground">{blog.content}</p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
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
