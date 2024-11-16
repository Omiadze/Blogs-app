import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Search, Globe } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavMenu() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className="w-full flex justify-between pl-52 pr-52 pt-5 pb-5  border-b-2 border-black dark:border-white">
      {/* Left: Logo */}
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        <h1 className="text-5xl">BitBlog</h1>
      </div>

      {/* Center: Navigation Links */}
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6 dark:text-white">
          <NavigationMenuItem>
            <NavigationMenuLink href="/home">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/write">Write</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* Right: Actions */}
      <div className="flex items-center space-x-4">
        {/* Search Button */}
        <Button variant="outline" className="flex items-center dark:text-white">
          <Search className="mr-2 w-5 h-5" />
          Search
        </Button>
        <Link to={"/login"}>
          <Button variant="outline" className="bg-blue-500 rounded-2xl">
            Sign In{" "}
          </Button>
        </Link>
        {/* Language Switcher */}
        <Button variant="ghost" className="flex items-center dark:text-white">
          <Globe className="mr-2 w-5 h-5" />
          Language
        </Button>

        {/* Theme Toggle */}
        <Button
          onClick={toggleTheme}
          className="bg-white text-gray-600 dark:bg-gray-950 dark:border-2 rounded-3xl dark:border-white dark:text-white hover:text-gray-900 hover:bg-slate-100 dark:hover:bg-slate-500 dark:hover:text-white"
        >
          {isDarkMode ? (
            <Moon className="w-5 h-5 " />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </Button>
      </div>
    </div>
  );
}
