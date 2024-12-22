import { Link } from "react-router-dom";
import authors from "./authors";
const Authors = () => {
  // const { lang } = useParams();
  return (
    <div className="rounded-xl border border-border bg-card p-8 text-card-foreground">
      <h3 className="mb-6 text-lg font-semibold text-primary-foreground">
        Featured Authors
      </h3>
      {authors.map((author) => (
        <div key={author.id} className="mb-3 flex gap-4">
          <div className="h-12 w-12 rounded-full border-2 border-border"></div>
          <Link to={`/${author.id}/`}>
            <div>
              <h5 className="text-base font-bold text-primary-foreground">
                {author.name}
              </h5>
              <p className="text-sm text-primary-foreground">
                {author.profession}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Authors;
