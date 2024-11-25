import { useSvgContext } from "@/context/hooks/use-svg-context";
import React from "react";

interface AvatarProps {
  seed: string;
}

const Avatar: React.FC<AvatarProps> = ({ seed }) => {
  const { userSvg } = useSvgContext();
  console.log(userSvg, "avatar-svg");

  return (
    <img
      src={userSvg || ""}
      alt={`${seed}`}
      className="flex items-center justify-center bg-muted-foreground text-center text-sm"
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
      }}
    />
  );
};

export default Avatar;
