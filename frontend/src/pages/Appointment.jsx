import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";

const Appointment = () => {
  const [docInfo, setDocInfo] = useState(null);
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  // console.log(docId);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div className="">
        {/*----------  doctors details ------------*/}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-300 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/*----------  doctors details : name degree experience------------*/}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 text-xs border rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/*----------  doctor's About ------------*/}
            <div className="">
              <p className="flex items-center gap-1 text-sm mt-3 font-medium text-gray-900">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 mx-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="">
              Appointment Fee: <span className="">{docInfo.fees}</span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
