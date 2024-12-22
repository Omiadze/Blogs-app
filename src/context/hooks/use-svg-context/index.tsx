import { SvgContext } from "@/context/profile-svg";
import { useContext } from "react";

export const useSvgContext = () => {
  const svg = useContext(SvgContext);

  if (!svg) {
    throw new Error("You must use SvgContext inside SvgProvider!");
  }

  return svg;
};
