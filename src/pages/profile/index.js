"use client";
import Head from "next/head";
import Image from "next/image";
import { toast } from "react-toastify";
import { Input, message } from "antd";

import { useState, useEffect } from "react";
const Index = () => {
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);


  const admin = {
    name: "James William",
    first: "James",
    last: "Williams",
    email: "james@email.com",
    phone: "+91 65765767 6",
    country: "USA",
    city: "New York",
    postal: "5676877",
    address: "333 St Paun, New York , USA",
    password: "abcd123",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

  const [formData, setFormData] = useState({
    firstName: admin.first,
    lastName: admin.last,
    email: admin.email,
    phone: admin.phone,
    country: admin.country,
    city: admin.city,
    postal: admin.postal,
    address: admin.address,
    about: admin.about,
    password: admin.password
  });


  const [isFormEdited, setIsFormEdited] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsFormEdited(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormEdited) {
      message.success("Information is up to date!");
      return;
    }



    admin.first = formData.firstName;
    admin.last = formData.lastName;
    admin.email = formData.email;
    admin.phone = formData.phone;
    admin.country = formData.country;
    admin.city = formData.city;
    admin.postal = formData.postal;
    admin.address = formData.address;
    admin.password = formData.password

    setFormData({
      firstName: admin.first,
      lastName: admin.last,
      email: admin.email,
      phone: admin.phone,
      country: admin.country,
      city: admin.city,
      postal: admin.postal,
      address: admin.address,
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "repeatPassword") {
      setRepeatPassword(value);
    }
  };

  useEffect(() => {
    if (newPassword === repeatPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [newPassword, repeatPassword]);


  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (newPassword === repeatPassword) {
      if ((newPassword !== "" || repeatPassword !== "")) {
        admin.password = newPassword;
        setNewPassword("");
        setRepeatPassword("");

        message.success("Password updated successfully!");
      }
      else {
        message.error("Please enter password to update")
        return;
      }

    } else {

      message.error("Passwords do not match. Please try again.");
    }
  };


  return (
    <div className="w-full bg-[F9F9F9]">
      <Head>
        <title>Profile</title>
      </Head>
      <div className="h-full w-full  my-4 overflow-hidden">
        <div className="w-full h-full flex flex-col-reverse  md:flex-row  bg-[#FFFFFF] shadow-sm rounded-md items-center  md:items-start md:justify-start my-5 md:px-6 px-4 md:px-0 ">

          <div className="w-full md:flex-row flex flex-col max-w-[100%] md:max-w-[80%]  my-5 md:my-0 sm:mx-4 gap-4">
            <div className="w-full  bg-[#FFFFFF]  py-5">
              <form className="my-3  px-6 pb-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-[16px] font-normal text-[#777777]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#2668E803] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="text-[16px] font-normal text-[#777777]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#2668E803] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[16px] font-normal text-[#777777]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#2668E803] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-[16px] font-normal text-[#777777]"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#2668E803] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-[16px] font-normal text-[#777777]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#2668E803] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-[16px] font-normal text-[#777777]"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#2668E803] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="text-[16px] font-normal text-[#777777]"
                    >
                      City
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#2668E803] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                    >
                      <option value="">Select City</option>
                      <option value="New York">New York</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="postal"
                      className="text-[16px] font-normal text-[#777777]"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="postal"
                      name="postal"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#2668E803] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="about"
                    className="text-[16px] font-normal text-[#777777]"
                  >
                    About Info
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    value={formData.about}
                    placeholder="Write here..."
                    onChange={handleChange}
                    className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#2668E803] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                    rows={4}
                    style={{ resize: "none" }}
                  />
                </div>
                <div className="w-full flex justify-start ">
                  <button
                    type="submit"
                    className="mt-6 bg-[#ED6C0E] text-white py-2 px-4 rounded transition duration-300 hover:bg-[#E82494]"
                  >
                    Save Chages
                  </button>

                </div>

              </form>
            </div>
          </div>

          <div className="flex flex-col flex-grow items-center md:items-start px-5 py-5 max-w-[60%] md:max-w-[20%] w-full">
            <h2 className="font-[500] text-[18px]">Profile Update</h2>
            <div className="mb-3 mt-5 flex flex-col justify-center items-center">
              <div className="h-full w-full  flex self-center  justify-center items-center  overflow-hidden ">
                <Image src="/dp.svg" width={154} height={166} alt="Admin Image" />
              </div>
              <button
                type="submit"
                className="mt-6 bg-[#FFC400] w-full text-[#000] py-2 px-4 rounded transition duration-300 "
              >
                Update Profile
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
