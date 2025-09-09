import { createContext, useContext, useState } from "react";

type DropdownContextType = {
  openRow: string;
  setOpenRow: (id: string) => void;
};

const DropdownContext = createContext<DropdownContextType| null>(null);

export const DropdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openRow, setOpenRow] = useState<string>("");

  return (
    <DropdownContext.Provider value={{ openRow, setOpenRow }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("useDropdown must be used inside DropdownProvider");
  return context;
};
