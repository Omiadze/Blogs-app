import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Story = () => {
  return (
    <>
      <div className="mb-7 mt-16 flex items-center justify-center">
        <Card className="max-w-6xl rounded-lg bg-muted p-5 shadow-lg">
          <CardHeader className="bg-muted text-4xl font-bold text-primary-foreground">
            Our Story
          </CardHeader>

          <CardContent className="mt-4 text-lg text-muted-foreground">
            <p>
              Founded in 2023, bitBlogs started as a small project by a group of
              passionate developers What began as a simple blog quickly grew
              into a thriving community of tech enthusiasts from all around the
              world.
            </p>
            <p className="mt-4">
              Today, bitBlogs is proud to be a leading platform for
              technology-focused content, fostering innovation and collaboration
              in the ever-evolving world of tech.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Story;
