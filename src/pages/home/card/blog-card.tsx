import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { SingleBlog } from "./singleBlog.types";
import { useParams } from "react-router-dom";

const BlogCard = ({ blog }: { blog: SingleBlog }) => {
  const { lang } = useParams();
  return (
    <div>
      <Card className="mx-auto mb-4 rounded-lg border border-border bg-card p-6 text-card-foreground">
        {blog?.image_url && (
          <div className="mb-4 h-96">
            <img
              src={`https://ooseptdwkauewqtbgeac.supabase.co/storage/v1/object/public/${blog?.image_url}`}
              alt={blog?.title_en || "Blog Image"}
              className="h-96 w-full rounded-lg object-cover"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-semibold text-primary-foreground">
            {lang === "en" ? blog.title_en : blog.title_ka}
          </CardTitle>
          <CardDescription>
            <div className="text-sm text-muted-foreground">
              {lang === "en" ? blog.description_en : blog.description_ka}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{blog.id}</p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2"></div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
