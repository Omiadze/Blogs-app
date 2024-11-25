import { createContext, PropsWithChildren, useState } from "react";
import { FillProfileInfoPayload } from "@/supabase/account/index.types";

type AuthContextType = {
  user: FillProfileInfoPayload | null;
  handleSetUser: (user: FillProfileInfoPayload | null) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<FillProfileInfoPayload | null>(null);

  const handleSetUser = (user: FillProfileInfoPayload | null) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
