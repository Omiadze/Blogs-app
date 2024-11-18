const Authors = () => {
  const authors = [
    {
      name: "Alice Johnson",
      profession: "Blockchain Enthusiast",
      id: "1",
    },
    {
      name: "Bob Smith",
      profession: "Crypto Analyst",
      id: "2",
    },
    {
      name: "Alice Johnson",
      profession: "Tech Journalist",
      id: "3",
    },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-8 text-card-foreground">
      <h3 className="mb-6 text-lg font-semibold text-primary">
        Featured Authors
      </h3>
      {authors.map((author) => (
        <div key={author.id} className="mb-3 flex gap-4">
          <div className="h-12 w-12 rounded-full border-2 border-border"></div>
          <div>
            <h5 className="text-base font-medium text-foreground">
              {author.name}
            </h5>
            <p className="text-sm text-muted-foreground">{author.profession}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Authors;
