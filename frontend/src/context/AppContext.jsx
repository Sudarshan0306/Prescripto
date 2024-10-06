import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const currencySymbol = "$"

  const AppCtx = {
    doctors: doctors,
    currencySymbol
  };

  return <AppContext.Provider value={AppCtx}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
