const Authors = () => {
  const authors = [
    {
      name: "Alice Johnson",
      profession: "Blockchain Enthusiast",
      id: "1",
    },
    {
      name: "Bob Smith",
      profession: "BCrypto Analyst",
      id: "2",
    },
    {
      name: "Alice Johnson",
      profession: "Tech Journalist",
      id: "3",
    },
  ];
  return (
    <div className="rounded-xl border-2 border-black p-8 dark:border-white">
      <h3 className="mb-6 dark:text-white">Featured Authors</h3>
      {authors.map((author) => (
        <div key={author.id} className="mb-3 flex gap-2">
          <div className="h-12 w-12 rounded-full border-2 border-black bg-white"></div>
          <div className="dark:text-white">
            <h5>{author.name}</h5>
            <p>{author.profession}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Authors;
