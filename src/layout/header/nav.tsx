import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Search, Globe } from "lucide-react";

export function NavMenu() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className="w-full flex justify-between pl-52 pr-52 pt-5 pb-5 mb-16 border-b-2 border-black dark:border-white">
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

        {/* Language Switcher */}
        <Button variant="ghost" className="flex items-center dark:text-white">
          <Globe className="mr-2 w-5 h-5" />
          Language
        </Button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
