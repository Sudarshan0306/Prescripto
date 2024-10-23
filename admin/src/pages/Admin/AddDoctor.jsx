import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets_admin/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import Input from "../../components/UI/Input";
const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [doctorData, setDoctorData] = useState({
    name: "",
    email: "",
    password: "",
    experience: "1 Year",
    fees: "",
    about: "",
    speciality: "General physician",
    education: "",
    address1: "",
    address2: "",
  });

  const { backendUrl, aToken } = useContext(AdminContext);

  const handleDataChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setDoctorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(doctorData);
    
    try {
      if (condition) {
        if (!docImg) {
          return toast.error("Image not selected");
        }
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" name="" id="doc-img" hidden />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
          <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Name</p>
              <input
                className="border rounded py-2 px-3"
                type="name"
                name="name"
                id="doctor-name"
                placeholder="Name"
                required
                onChange={handleDataChange}
                value={doctorData.name}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                className="border rounded py-2 px-3"
                type="email"
                name="email"
                id="doctor-email"
                placeholder="email"
                required
                onChange={handleDataChange}
                value={doctorData.email}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input
                className="border rounded py-2 px-3"
                type="password"
                name="password"
                id="doctor-password"
                placeholder="password"
                required
                value={doctorData.password}
                onChange={handleDataChange}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                className="border rounded py-2 px-3"
                name="experience"
                id="doctor-experience"
                onChange={handleDataChange}
                value={doctorData.experience}
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
                <option value="9 Years">9 Years</option>
                <option value="10 Years">10 Years</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                className="border rounded py-2 px-3"
                type="number"
                name="fees"
                id="doctor-fees"
                placeholder="fees"
                required
                value={doctorData.fees}
                onChange={handleDataChange}
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                className="border rounded py-2 px-3"
                name="speciality"
                id="doctor-speciality"
                value={doctorData.speciality}
                onChange={handleDataChange}
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist3">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input
                className="border rounded py-2 px-3"
                type="text"
                name="education"
                id="doctor-education"
                placeholder="Education"
                required
                onChange={handleDataChange}
                value={doctorData.education}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                className="border rounded py-2 px-3"
                type="text"
                name="address1"
                id="doctor-address1"
                placeholder="Address 1"
                required
                onChange={handleDataChange}
                value={doctorData.address1}
              />
              <input
                className="border rounded py-2 px-3"
                type="text"
                name="address2"
                id="doctor-address2"
                placeholder="Address 2"
                required
                value={doctorData.address2}
                onChange={handleDataChange}
              />
            </div>
          </div>
        </div>

        <div className="">
          <p className="mt-4 mb-2">About me</p>
          <textarea
            className="w-full px-4 pt-2 border rounded"
            name="about"
            id="doctor-about"
            placeholder="Write about doctor"
            rows={5}
            required
            onChange={handleDataChange}
            value={doctorData.about}
          />
        </div>

        <button className="bg-primary px-10 py-3 mt-4 text-white rounded-full">
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
