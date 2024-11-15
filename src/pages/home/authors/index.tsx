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
    <div className="p-8 border-2 border-black rounded-xl dark:border-white">
      <h3 className="mb-6 dark:text-white">Featured Authors</h3>
      {authors.map((author) => (
        <div key={author.id} className="flex gap-2 mb-3">
          <div className="w-12 h-12  bg-white border-2 border-black rounded-full"></div>
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
