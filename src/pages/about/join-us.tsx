import { Button } from "@/components/ui/button";

const JoinUs = () => {
  return (
    <div className="mb-24 flex flex-col items-center justify-center text-primary-foreground">
      <h1 className="mb-7 text-3xl font-bold">Join Us on Our Journey</h1>
      <p className="mb-6 max-w-4xl text-center">
        {" "}
        Whether you're a seasoned developer, a curious beginner, or somewhere in
        between, there's a place for you at bitBlogs. Let's shape the future of
        technology together.
      </p>
      <Button
        type="submit"
        className="max-w-52 rounded-2xl bg-blue-700 text-white dark:bg-blue-700 dark:text-white"
      >
        Get Started Today
      </Button>
    </div>
  );
};

export default JoinUs;
