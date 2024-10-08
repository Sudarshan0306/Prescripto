import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: "../assets/assets_frontend/assets",
    email: "richardjameswap@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Female",
    dob: "2000-01-20",
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("address")) {
      const [_, field] = name.split(".");
      setUserData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [field]: value,
        },
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleEditTrue = () => {
    setIsEdit(true);
  };
  const handleEditFalse = () => {
    setIsEdit(false);
  };

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={assets.profile_pic} alt="" />
      {isEdit ? (
        <input
          className="font-medium bg-gray-100 text-3xl max-w-60 mt-4 rounded-mg"
          name="name"
          type="text"
          onChange={handleChange}
          value={userData.name}
        />
      ) : (
        <p className="font-medium text-3xl mt-4 text-neutral-800">
          {userData.name}{" "}
        </p>
      )}
      <hr className="bg-zinc-400 border-none h-[1px]" />
      <div className="">
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p className="font-medium">Email Id: </p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              name="phone"
              type="text"
              onChange={handleChange}
              value={userData.phone}
            />
          ) : (
            <p className="text-blue-500">{userData.phone} </p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-100"
                name="address.line1"
                type="text"
                onChange={handleChange}
                value={userData.address.line1}
              />
              <br />
              <input
                className="bg-gray-100"
                name="address.line2"
                type="text"
                onChange={handleChange}
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1} <br /> {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div className="">
        <p className="text-neutral-500 underline mt-3">Basic Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p className="font-medium">Gender</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              name="gender"
              id=""
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender} </p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              name="dob"
              type="date"
              onChange={handleChange}
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob} </p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={handleEditFalse}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={handleEditTrue}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
