import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { validateCerty } from "../api";
import LoadingScreen2 from "../component/LoadingScreen2";
function CertificateForm() {
  const [loading, setloading] = useState(false);
  // Define the state for organization and certificate selection\
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState("");
  const [certificateId, setCertificateId] = useState("");

  // Define the options for both dropdowns
  const organizationOptions = [
    { value: "", label: "Select Organization" },  
    { value: "government", label: "Government" },
    { value: "institutes", label: "Institutes" },
  ];

  const certificateOptions = [
    { value: "", label: "Select Certificate Type" },
    { value: "aadhar", label: "Adhar Card" },
    { value: "pancard", label: "Pancard" },
    { value: "degree", label: "Degree" },
  ];

  // Handle organization selection change
  const handleOrganizationChange = (event) => {
    setSelectedOrganization(event.target.value);

    // Clear selected certificate when organization changes
    setSelectedCertificate("");
  };

  // Handle certificate selection change
  const handleCertificateChange = (event) => {
    setSelectedCertificate(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with form data
    const formData = {
      organization: selectedOrganization,
      certificate: selectedCertificate,
      tokenId: certificateId,
    };
    try{
      setloading(true);
      const response = await validateCerty(formData);
      if(response.ok){
        setloading(false);
        window.location.href = response.imagelink;
      }
    }
    catch(err){
      console.log(err);
    }
   
  };

  return (
    <>
      <Navbar />
      <div class="h-screen md:flex flex-col justify-center items-center bg-gray-50 ">
        <div class="flex md:w-1/2 justify-center py-10 items-center ">
          {/* <!-- Your form content goes here --> */}
          {!loading ? (<form
            class="bg-white w-11/12 shadow-md shadow-gray-500 rounded-md p-10 "
            onSubmit={handleSubmit}
          >
            <h1 class="text-gray-800 font-bold text-2xl text-center mb-1">
              Certificate Validation
            </h1>
            <p class="text-sm font-normal text-gray-600 text-center mb-7">
              Add Certificate Details Here
            </p>

            {/* Organization Dropdown */}
            <div className="flex items-center py-2 rounded-2xl mb-3">
              <div className="relative w-full outline-none border-none">
                <select
                  value={selectedOrganization}
                  onChange={handleOrganizationChange}
                  className="block appearance-none w-full h-14 bg-white border-2 border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-2xl shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 text-gray-500"
                >
                  {organizationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Certificate Type Dropdown */}
            <div className="flex items-center py-2 rounded-2xl mb-3">
              <div className="relative w-full outline-none border-none">
                <select
                  value={selectedCertificate}
                  onChange={handleCertificateChange}
                  className="block appearance-none w-full h-14 bg-white border-2 border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-2xl shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 text-gray-500"
                >
                  {certificateOptions
                    .filter((option) => {
                      // Only show certificate options based on selected organization
                      if (selectedOrganization === "government") {
                        return ["", "aadhar", "pancard"].includes(option.value);
                      } else if (selectedOrganization === "institutes") {
                        return ["", "degree"].includes(option.value);
                      }
                      return true;
                    })
                    .map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ID */}
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                class="pl-2 w-full outline-none border-none"
                type="number"
                name="certificateId"
                id="certificateId"
                value={certificateId}
                onChange={(event) => setCertificateId(event.target.value)}
                placeholder="Add Certificate Id"
              />
            </div>

            <button
              type="submit"
              class="block w-full  mt-4 py-2 rounded-2xl  mb-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium  text-xl px-5  text-center "
            >
              Submit
            </button>
            {/* <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> */}
          </form>
          ) : (
            <LoadingScreen2 />
          )}
        </div>
      </div>
    </>
  );
}

export default CertificateForm;
