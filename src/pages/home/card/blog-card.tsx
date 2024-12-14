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
// import { format } from "date-fns";
// import { toZonedTime } from "date-fns-tz";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

const BlogCard = ({ blog }: { blog: SingleBlog }) => {
  const blogImgUrl = import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE;
  const { lang } = useParams();

  // Get the creation time as a Day.js object
  const createdAt = dayjs(blog.create_time);

  // Get the current time
  // const now = dayjs();

  // Check if the blog was created within the last 24 hours
  const isRecent = createdAt.diff(createdAt, "days") < 1;

  const displayTime = isRecent
    ? createdAt.fromNow()
    : createdAt.tz("Asia/Tbilisi").format("YYYY-MM-DD HH:mm:ss");

  return (
    <div>
      <Card className="mx-auto mb-4 rounded-lg border border-border bg-card p-6 text-card-foreground">
        {blog?.image_url && (
          <div className="mb-4 h-96">
            <img
              src={`${blogImgUrl}${blog?.image_url}`}
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
          <p className="text-sm text-muted-foreground">
            <small>Created At: {displayTime}</small>
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2"></div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
