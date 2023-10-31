"use client";
import React, { useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

const ContactUs = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    projectBudget: "",
  });

  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    company: false,
    phone: false,
    subject: false,
    projectBudget: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setIsFocused({
      ...isFocused,
      [name]: true,
    });

    if (value === "") {
      setIsFocused({
        ...isFocused,
        [name]: false,
      });
    }
  };

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const points = [
    {
      id: 1,
      title:
        "Having received and processed your request, we will get back to you shortly to detail your project needs and sign an NDA to ensure the confidentiality of information.",
    },
    {
      id: 2,
      title:
        "After examining requirements, our analysts and developers devise a project proposal with the scope of works, team size, time and cost estimates.",
    },
    {
      id: 3,
      title:
        "We arrange a meeting with you to discuss the offer and come to an agreement",
    },
    {
      id: 4,
      title:
        "We sign a contract and start working on your project as quickly as possible.",
    },
  ];

  return (
    <>
      <div className="min-h-[700px] ">
        <div className="flex flex-col gap-4 px-10 xs:px-3 ">
          <h1 className="text-4xl font-semibold">Contact Us!</h1>
          <p className="text-xl xs:text-base">
            <span className="text-red-500 underline cursor-pointer">
              Book a call
            </span>{" "}
            or fill out the form below, and we’ll get back to you <br /> once
            we’ve processed your request.
          </p>
        </div>
        <div className="py-20 px-10 lg:px-2 flex  gap-10 justify-between lg:flex-col">
          <div className=" min-w-[900px] py-6 lg:min-w-full ">
            <form className="flex items-center gap-5 xs:flex-col ">
              <div className="flex flex-col gap-5 flex-1 xs:w-full">
                <div className="flex flex-col ">
                  <label
                    className={
                      isFocused.name || formData.name ? "visible" : "hidden"
                    }
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full focus:outline-none h-[40px] border-b border-gray-600 "
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className={
                      isFocused.email || formData.email ? "visible" : "hidden"
                    }
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full focus:outline-none h-[40px] border-b border-gray-600 "
                  />
                </div>
                <div className="flex flex-col">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full focus:outline-none h-[40px] border-b border-gray-600"
                  >
                    <option value="">Subject*</option>
                    <option value=" IT staff augmentation">
                      IT staff augmentation
                    </option>
                    <option value=" Turkey product development">
                      Turkey product development
                    </option>
                    <option value="Careers">Careers</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-5 flex-1 xs:w-full">
                <div className="flex flex-col">
                  <label
                    className={
                      isFocused.company || formData.company
                        ? "visible"
                        : "hidden"
                    }
                    htmlFor="company"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full focus:outline-none h-[40px] border-b border-gray-600"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className={
                      isFocused.phone || formData.phone ? "visible" : "hidden"
                    }
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full focus:outline-none h-[40px] border-b border-gray-600"
                  />
                </div>
                <div className="flex flex-col">
                  <select
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleInputChange}
                    className="w-full focus:outline-none h-[40px] border-b border-gray-600"
                  >
                    <option value="Project Budget (min. $15K)">
                      Project Budget (min. $15K)
                    </option>
                    <option value="$15K - $30K ">$15K - $30K </option>
                    <option value="$30K - $100K">$30K - $100K</option>
                    <option value="$100K - $250K">$100K - $250K</option>
                    <option value="$250K - $500K">$250K - $500K</option>
                    <option value="More than $500K">More than $500K</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="mt-5">
              <textarea
                id=""
                cols="50"
                rows="0"
                placeholder="Describe Your Needs In Details*"
                className=" focus:outline-none h-[40px] w-full border-b border-gray-600"
              ></textarea>
            </div>
            <small className="text-xs font-normal text-gray-600">
              Please include project details, duration, tech stack, IT
              professionals needed, and other relevant info
            </small>
            <div className="py-16 flex items-center justify-center sm:flex-col gap-8 sm:px-4">
              <div className="border-2 border-dotted border-gray-500 px-5 w-[330px] h-[150px] sm:w-full flex flex-col gap-5 items-center justify-center">
                <p className="text-xs text-center leading-loose text-gray-600">
                  Record a voice message about your
                  <br />
                  project to help us understand it better
                </p>
                <button className="bg-sky-600 flex items-center gap-2 px-10 py-2 md:text-sm sm:text-xs text-base text-white">
                  <BsFillMicFill />
                </button>
              </div>
              <div className="relative border-2 border-dotted border-gray-500 px-5 w-[330px] h-[150px] sm:w-full  flex flex-col gap-5 items-center justify-center">
                <p className="text-xs text-center leading-loose text-gray-600">
                  Attach additional documents as needed
                  <br />
                </p>
                <div className="flex items-center gap-5">
                  <button className="bg-sky-600 flex items-center gap-2 px-10 py-2 md:text-sm sm:text-xs text-base text-white">
                    Upload File
                  </button>
                  <BsQuestionCircle
                    onMouseEnter={toggleTooltip}
                    onMouseLeave={toggleTooltip}
                  />
                </div>
                <div
                  className={`${
                    showTooltip ? "block" : "hidden"
                  } absolute top-0 right-0 bg-gray-200 p-4 text-center h-[80px] w-[200px] text-gray-600 text-xs rounded shadow-md`}
                >
                  you can attach up to 1 file of 20MB overall.
                </div>
              </div>
            </div>
            <div className="flex  gap-40 sm:gap-8 md:gap-20 sm:flex-col">
              <div className="w-[580px] sm:w-full md:w-[680px] ">
                <p className="text-sm text-gray-500 sm:text-xs">
                  Please be informed that when you click the Send button
                  Innowise Group will process your personal data in accordance
                  with our{" "}
                  <span className="text-black hover:text-sky-600">
                    Privacy Policy
                  </span>{" "}
                  for the purpose of providing you with appropriate information.
                </p>
              </div>
              <div>
                <button className="bg-sky-600 flex items-center gap-2 px-10 py-2 md:text-sm sm:text-xs text-base text-white">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-gradient-to-r from-blue-500 to-cyan-500 w-full text-white">
            <div className="px-8 py-10 text-3xl font-semibold sm:text-2xl xs:text-xl sm:py-4">
              <h1>What happens next?</h1>
            </div>
            <div className="px-6 md:px-1 py-14 flex flex-col gap-10 ">
              {points.map((item) => {
                return (
                  <>
                    <div key={item.id} className="flex gap-5 sm:gap-3">
                      <div className="rounded-full md:border-none md:rounded-none w-[50px] h-[50px] flex items-center justify-center border relative">
                        <h1>{item.id}</h1>
                      </div>
                      <div className="w-[400px] md:w-full">
                        <p className="sm:text-sm xs:text-xs">{item.title}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
