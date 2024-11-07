import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );

  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const AppCtx = {
    doctors: doctors,
    currencySymbol,
    token,
    setToken,
    backendUrl,
  };

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.post(backendUrl + "/api/doctor/list");
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getDoctorsData();
  }, []);

  return <AppContext.Provider value={AppCtx}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
