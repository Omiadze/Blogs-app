import { BookOpen, UserRoundCog, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";

const Offers = () => {
  const offers = [
    {
      title: "Rich Content",
      description:
        "Access a wide range of articles, tutorials, and insights on the latest tech trends and best practices.",
    },
    {
      title: "Vibrant Community",
      description:
        "Connect with like-minded individuals, share your knowledge, and grow your professional network.",
    },
    {
      title: "Cutting-edge Topics",
      description:
        "Stay ahead of the curve with content covering emerging technologies and innovative solutions.",
    },
  ];

  return (
    <>
      <CardHeader className="mt-4 text-center text-4xl font-bold text-primary-foreground">
        What We Offer
      </CardHeader>
      <div className="flex items-center justify-center gap-8">
        <Card className="max-w-sm p-5">
          <BookOpen className="mb-4 h-12 w-12 text-primary" />
          <CardTitle className="mb-5">{offers[0].title}</CardTitle>
          <CardContent className="p-0">{offers[0].description}</CardContent>
        </Card>
        <Card className="max-w-sm p-5">
          <UserRoundCog className="mb-4 h-12 w-12 text-primary" />
          <CardTitle className="mb-5">{offers[1].title}</CardTitle>
          <CardContent className="p-0">{offers[1].description}</CardContent>
        </Card>
        <Card className="max-w-sm p-5">
          <Zap className="mb-4 h-12 w-12 text-primary" />
          <CardTitle className="mb-5">{offers[2].title}</CardTitle>
          <CardContent className="p-0">{offers[2].description}</CardContent>
        </Card>
      </div>
    </>
  );
};

export default Offers;
