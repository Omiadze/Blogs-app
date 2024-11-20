import Cards from "../home/card/cards";
import { Profile } from "./profile";
const AuthorsPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Profile />
        <div className="max-w-[70%]">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default AuthorsPage;
