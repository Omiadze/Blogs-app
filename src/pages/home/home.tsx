import Cards from "./card/cards";
import Tags from "./tags";
import Authors from "./authors";

import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  console.log(t("lang-version"));
  return (
    <div className="mt-14 flex flex-col md:flex-row">
      <Cards />
      <div className="p-1 md:pr-10">
        <Tags />
        <Authors />
      </div>
    </div>
  );
};

export default HomePage;
