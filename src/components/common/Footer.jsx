import React from "react";
import FooterBase from "./FooterBase";
import Button from "./Button";
import { Desktop, Mobile } from "../Layout/Responsive";

const Footer = () => {
  const inputFields = [
    {
      id: "full_name",
      label: "Full Name",
      placeholder: "Full Name",
      type: "text",
      required: true,
    },
    {
      id: "work_email",
      label: "Work Email Address",
      placeholder: "Work Email Address",
      type: "email",
      required: true,
    },
    {
      id: "phone_number",
      label: "Phone Number",
      placeholder: "Phone Number",
      type: "tel",
    },
    {
      id: "company_name",
      label: "Company Name (Optional)",
      placeholder: "Company Name (Optional)",
      type: "text",
    },
    {
      id: "location",
      label: "Location",
      placeholder: "Location",
      type: "text",
      required: true,
    },
    {
      id: "interest",
      label: "Where are you interested in?",
      placeholder: "Where are you interested in?",
      type: "text",
    },
    {
      id: "marketing_spend",
      label: "What’s your current performance marketing spend?",
      placeholder: "What’s your current performance marketing spend?",
      type: "text",
    },
  ];
  return (
    <>
      <Desktop>
        <div className="flex flex-col px-36 py-20 gap-6">
          <p className="text-5xl font-extrabold border-l-4 border-l-[#D60A3D] ps-9 max-w-3xl leading-[1.3] ">
            Ready to Grow? Get in Touch
          </p>
          {/* <div class="relative z-0">
          <input
            type="text"
            id="floating_standard"
            class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none font-bold text-xl dark:border-gray-600  focus:outline-none focus:ring-0 peer"
            placeholder=" "
          />
          <label
            for="floating_standard"
            class="absolute text-xl peer-[:not(:placeholder-shown)]:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Full Name
          </label>
        </div> */}
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inputFields.map(
              ({ id, label, placeholder, type, required }, index) => (
                <div
                  key={id}
                  className={`relative ${
                    index === inputFields.length - 1
                      ? "md:col-span-2"
                      : "md:col-span-1"
                  }`}
                >
                  <input
                    id={id}
                    type={type}
                    className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none font-bold text-xl dark:border-gray-600  focus:outline-none focus:ring-0 peer"
                    placeholder=""
                    required={required}
                  />
                  <label
                    htmlFor={id}
                    className="absolute text-xl peer-[:not(:placeholder-shown)]:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    {label}
                  </label>
                </div>
              )
            )}
          </form>
          <div>
            <Button>Submit </Button>
          </div>
        </div>
        <FooterBase />
      </Desktop>
      <Mobile>
        <div className="flex flex-col px-4 py-6 gap-6">
          <p className="text-xl font-extrabold border-l-4 border-l-[#D60A3D] ps-3 max-w-3xl leading-[1.3] ">
            Ready to Grow? Get in Touch
          </p>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inputFields.map(
              ({ id, label, placeholder, type, required }, index) => (
                <div key={id} className={`relative`}>
                  <input
                    id={id}
                    type={type}
                    className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none font-bold text-xl dark:border-gray-600  focus:outline-none focus:ring-0 peer"
                    placeholder=""
                    required={required}
                  />
                  <label
                    htmlFor={id}
                    className="absolute  peer-[:not(:placeholder-shown)]:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    {label}
                  </label>
                </div>
              )
            )}
          </form>
          <div>
            <Button>Submit </Button>
          </div>
        </div>
        <FooterBase />
      </Mobile>
    </>
  );
};

export default Footer;
