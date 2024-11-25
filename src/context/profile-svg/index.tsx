import { createContext, PropsWithChildren, useState } from "react";

type SvgContextType = {
  userSvg: string | null;
  handleSetUserSvg: (userSvg: string | null) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const SvgContext = createContext<SvgContextType | undefined>(undefined);

export const SvgProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userSvg, setUserSvg] = useState<string | null>(null);

  const handleSetUserSvg = (userSvg: string | null) => {
    setUserSvg(userSvg);
  };

  return (
    <SvgContext.Provider value={{ userSvg, handleSetUserSvg }}>
      {children}
    </SvgContext.Provider>
  );
};
