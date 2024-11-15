import { Button } from "@/components/ui/button";
const Tags = () => {
  const tags = [
    "Blockchain",
    "Cryptocurrency",
    "Technology",
    "Programing",
    "AI",
    "Machine Learning",
  ];
  return (
    <div className="p-8 border-2 border-black rounded-xl mb-14 dark:border-white">
      <h3 className="mb-6 dark:text-white">Popular Tags</h3>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <Button
            key={index}
            className="rounded-3xl bg-blue-400 hover:bg-blue-200 dark:bg-blue-600"
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
