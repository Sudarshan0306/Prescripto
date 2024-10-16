import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = ({ children }) => {
  const value = {};

  return <DoctorContextProvider value={value}>{children}</DoctorContextProvider>;
};

export default DoctorContextProvider;
