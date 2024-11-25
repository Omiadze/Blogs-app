import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Search } from "lucide-react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useTheme } from "@/components/useTheme";
import { useAuthContext } from "@/context/hooks/use-auth-context";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/supabase/auth";

import Avatar from "@/components/avatar-svg";

export function NavMenu() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const navigate = useNavigate();
  const { user } = useAuthContext();

  const [theme, setTheme] = useTheme();

  const { mutate: handleLogout } = useMutation({
    mutationKey: ["login"],
    mutationFn: logout,
  });
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const { t } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex w-full justify-between border-b-2 border-black pb-5 pl-52 pr-52 pt-5 dark:border-white">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        <h1 className="text-5xl text-primary-foreground">BitBlog</h1>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6 text-muted-foreground">
          <NavigationMenuItem>
            <NavigationMenuLink href="/home">{t("home")}</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/write">{t("write")}</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">{t("about")}</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-4">
        <Button variant="outline" className="flex items-center dark:text-white">
          <Search className="mr-2 h-5 w-5 text-muted-foreground" />
        </Button>

        {user ? (
          <div className="flex items-center justify-center gap-4">
            <Link
              className="h-12 w-12 rounded-full bg-muted-foreground"
              to={"/profile"}
            >
              <Avatar seed={"Avatar"} />
            </Link>
            <Button
              onClick={() => handleLogout()}
              className="rounded-2xl bg-blue-500 dark:border-white dark:text-white"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link to={"/login"}>
            <Button
              variant="outline"
              className="rounded-2xl bg-blue-500 dark:border-white dark:text-white"
            >
              {t("sign-in")}{" "}
            </Button>
          </Link>
        )}

        <Button
          onClick={() => handleChangeLanguage("en")}
          variant="ghost"
          className="flex items-center text-primary-foreground"
        >
          ENG
        </Button>
        <Button
          onClick={() => handleChangeLanguage("ka")}
          variant="ghost"
          className="flex items-center text-primary-foreground"
        >
          KA
        </Button>

        <Button
          onClick={toggleTheme}
          className="rounded-3xl bg-white text-gray-600 hover:bg-slate-100 hover:text-gray-900 dark:border-2 dark:border-white dark:bg-gray-950 dark:text-white dark:hover:bg-slate-500 dark:hover:text-white"
        >
          {theme === "dark" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
}
