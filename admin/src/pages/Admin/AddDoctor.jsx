import React from "react";
import { assets } from "../../assets/assets_admin/assets";
const AddDoctor = () => {
  return (
    <form className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={assets.upload_area}
              alt=""
            />
          </label>
          <input type="file" name="" id="doc-img" hidden />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor name</p>
              <input
                className="border rounded py-2 px-3"
                type="text"
                name=""
                id=""
                placeholder="name"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                className="border rounded py-2 px-3"
                type="email"
                name=""
                id=""
                placeholder="email"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input
                className="border rounded py-2 px-3"
                type="password"
                name=""
                id=""
                placeholder="password"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select className="border rounded py-2 px-3" name="" id="">
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">5 Years</option>
                <option value="6">6 Years</option>
                <option value="7">7 Years</option>
                <option value="8">8 Years</option>
                <option value="9">9 Years</option>
                <option value="10">10 Years</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                className="border rounded py-2 px-3"
                type="number"
                name=""
                id=""
                placeholder="fees"
                required
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select className="border rounded py-2 px-3" name="" id="">
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
                name=""
                id=""
                placeholder="Education"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                className="border rounded py-2 px-3"
                type="text"
                name=""
                id=""
                placeholder="Address 1"
                required
              />
              <input
                className="border rounded py-2 px-3"
                type="text"
                name=""
                id=""
                placeholder="Address 2"
                required
              />
            </div>
          </div>
        </div>

        <div className="">
          <p className="mt-4 mb-2">About me</p>
          <textarea
            className="w-full px-4 pt-2 border rounded"
            name=""
            id=""
            placeholder="Write about doctor"
            rows={5}
            required
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
