import React, { useContext, useState } from "react";
import axios from "axios";
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
    degree: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Image not selected");
      }
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", doctorData.name);
      formData.append("email", doctorData.email);
      formData.append("password", doctorData.password);
      formData.append("experience", doctorData.experience);
      formData.append("fees", doctorData.fees);
      formData.append("about", doctorData.about);
      formData.append("speciality", doctorData.speciality);
      formData.append("degree", doctorData.degree);
      formData.append(
        "address",
        JSON.stringify({
          line1: doctorData.address1,
          line2: doctorData.address2,
        })
      );

      //consol log form data
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      const {data} = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        {
          headers: { aToken },
        }
      );
      if (data.success) {
        toast.success(data.message);
        setDoctorData({
          name: "",
          email: "",
          password: "",
          experience: "1 Year",
          fees: "",
          about: "",
          speciality: "General physician",
          degree: "",
          address1: "",
          address2: "",
        })
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error);
      
    }
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
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            name=""
            id="doc-img"
            hidden
          />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <Input
              label="Doctor Name"
              className="border rounded py-2 px-3"
              type="name"
              name="name"
              id="doctor-name"
              placeholder="Name"
              required
              onChange={handleDataChange}
              value={doctorData.name}
            />

            <Input
              label="Doctor Email"
              className="border rounded py-2 px-3"
              type="email"
              name="email"
              id="doctor-email"
              placeholder="email"
              required
              onChange={handleDataChange}
              value={doctorData.email}
            />

            <Input
              label="Doctor Password"
              className="border rounded py-2 px-3"
              type="password"
              name="password"
              id="doctor-password"
              placeholder="password"
              required
              onChange={handleDataChange}
              value={doctorData.password}
            />

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

            <Input
              label="Fees"
              className="border rounded py-2 px-3"
              type="number"
              name="fees"
              id="doctor-fees"
              placeholder="fees"
              required
              onChange={handleDataChange}
              value={doctorData.fees}
            />
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

            <Input
              label="Education"
              className="border rounded py-2 px-3"
              type="text"
              name="degree"
              id="doctor-degree"
              placeholder="degree"
              required
              onChange={handleDataChange}
              value={doctorData.degree}
            />

            <Input
              label="Address"
              className="border rounded py-2 px-3"
              type="text"
              name="address1"
              id="doctor-address1"
              placeholder="address1"
              required
              onChange={handleDataChange}
              value={doctorData.address1}
            />
            <Input
              className="border rounded py-2 px-3"
              type="text"
              name="address2"
              id="doctor-address2"
              placeholder="address2"
              required
              onChange={handleDataChange}
              value={doctorData.address2}
            />
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
