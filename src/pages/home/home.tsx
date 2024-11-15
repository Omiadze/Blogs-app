import Cards from "./card/cards";
import Tags from "./tags";
import Authors from "./authors";

const HomePage = () => {
  return (
    <div className="flex">
      <Cards />
      <div className="pr-10">
        <Tags />
        <Authors />
      </div>
    </div>
  );
};

export default HomePage;
