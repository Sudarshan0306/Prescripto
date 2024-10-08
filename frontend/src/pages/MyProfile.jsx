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
    <div>
      <img src={assets.profile_pic} alt="" />
      {isEdit ? (
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={userData.name}
        />
      ) : (
        <p>{userData.name} </p>
      )}
      <hr />
      <div className="">
        <p>CONTACT INFORMATION</p>
        <div className="">
          <p>Email Id: </p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              name="phone"
              type="text"
              onChange={handleChange}
              value={userData.phone}
            />
          ) : (
            <p>{userData.phone} </p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <p>
              <input
                name="address.line1"
                type="text"
                onChange={handleChange}
                value={userData.address.line1}
              />
              <br />
              <input
                name="address.line2"
                type="text"
                onChange={handleChange}
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p>
              {userData.address.line1} <br /> {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div className="">
        <p>Basic Information</p>
        <div className="">
          <p>Gender</p>
          {isEdit ? (
            <select name="gender" id="" value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender} </p>
          )}
          <p>Birthday:</p>
          {isEdit ? (
            <input
              name="dob"
              type="date"
              onChange={handleChange}
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob} </p>
          )}
        </div>
      </div>

      <div className="">
        {isEdit ? (
          <button onClick={handleEditFalse}>Save Information</button>
        ) : (
          <button onClick={handleEditTrue}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
