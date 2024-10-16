import { createContext } from "react";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const value = {};

  return <AdminContextProvider value={value}>{children}</AdminContextProvider>;
};

export default AdminContextProvider;
