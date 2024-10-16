import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const value = {};

  return <AppContextProvider value={value}>{children}</AppContextProvider>;
};

export default AppContextProvider;
