import { Button } from "@/components/ui/button";

const Tags = () => {
  const tags = [
    "Blockchain",
    "Cryptocurrency",
    "Technology",
    "Programming",
    "AI",
    "Machine Learning",
  ];

  return (
    <div className="mb-14 rounded-xl border border-border bg-card p-8 text-card-foreground">
      <h3 className="mb-6 text-lg font-semibold text-primary">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Button
            key={index}
            className="rounded-3xl bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
