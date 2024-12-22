import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useTheme } from "@/components/useTheme";
import { useAuthContext } from "@/context/hooks/use-auth-context";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/supabase/auth";
import Avatar from "@/components/avatar-svg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useSvgContext } from "@/context/hooks/use-svg-context";

export function NavMenu() {
  const defaultSvg = import.meta.env.VITE_DEFAULT_SVG;
  const { user } = useAuthContext();
  const [theme, setTheme] = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const { userSvg } = useSvgContext();

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

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Change the language in i18n
    navigate(`/${lang}`); // Update the URL with the language code
  };
  console.log("usssssssseeeeeeeer", userSvg);

  return (
    <div className="flex w-full justify-between border-b-2 border-black pb-5 pl-3 pr-3 pt-5 md:pl-14 md:pr-14 dark:border-white">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        <h1 className="hidden text-primary-foreground md:flex md:text-5xl">
          BitBlog
        </h1>
        <h1 className="flex text-5xl text-primary-foreground md:hidden">BB</h1>
      </div>

      {/* Desktop Menu */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex space-x-6 text-muted-foreground">
          <NavigationMenuItem>
            <Link to={`/${lang}/`}>{t("home")}</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to={`/${lang}/createBlogs`}>{t("add-blogs")}</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to={`/${lang}/about`}>{t("about")}</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center justify-center gap-4">
            <Link
              className="h-12 w-12 rounded-full bg-muted-foreground"
              to={`/${lang}/profile`}
            >
              <Avatar seed={userSvg || defaultSvg} />{" "}
              {/* Use the global avatar */}
            </Link>
            <Button
              onClick={() => handleLogout()}
              className="rounded-2xl bg-blue-500 dark:border-white dark:text-white"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link to={`/${lang}/login`}>
            <Button
              variant="outline"
              className="rounded-2xl bg-blue-500 dark:border-white dark:text-white"
            >
              {t("sign-in")}
            </Button>
          </Link>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-3xl bg-white text-gray-600 hover:bg-slate-100 hover:text-gray-900 dark:border-2 dark:border-white dark:bg-gray-950 dark:text-white dark:hover:bg-slate-500 dark:hover:text-white"
            >
              <Languages />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuItem>
              <Button
                onClick={() => handleChangeLanguage("en")}
                variant="ghost"
                className="flex items-center text-primary-foreground"
              >
                ENG
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={() => handleChangeLanguage("ka")}
                variant="ghost"
                className="flex items-center text-primary-foreground"
              >
                KA
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

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
        {/* Mobile & Tablet Dropdown */}
        <div className="flex items-center space-x-4 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center dark:text-white"
              >
                <Menu className="h-5 w-5 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <Link to={`/${lang}/`}>{t("home")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={`/${lang}/createBlogs`}>{t("add-blogs")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={`/${lang}/about`}>{t("about")}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
