import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import withAuth from "../layout/withAuth";
import Verifygov from "./Verifygov";

 const VerifyCerti = () => {
 // for selection list start
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState('');

  // Define the options for both dropdowns
  const organizationOptions = [
      { value: '', label: 'Organization' },
      { value: 'government', label: 'Government' },
      { value: 'institutes', label: 'Institutes' },
  ];

  const certificateOptions = [
      { value: '', label: 'Select Type' },
      { value: 'adhar-card', label: 'Adhar Card' },
      { value: 'pancard', label: 'Pancard' },
      { value: 'degree', label: 'Degree' },
  ];

  // Handle organization selection change
  const handleOrganizationChange = (event) => {
      setSelectedOrganization(event.target.value);

      // Clear selected certificate when organization changes
      setSelectedCertificate('');
  };

  // Handle certificate selection change
  const handleCertificateChange = (event) => {
      setSelectedCertificate(event.target.value);

 // for selection end



  // const user = JSON.parse(Cookies.get("generate-user"));

  // const accessToken = Cookies.get("generate-user-access-token");
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/");
  //   }
  // }, []);


  // const [org, setorg] = useState({ orgtype: "", doctype: "" });
  // const handelChange = (e) => {
  //   setorg({ ...org, [e.target.id]: e.target.value });
  // };

  // const handelclick=()=>{
  //   if(org.orgtype==='Government Organization'){
  //     navigate('gov-verification')
  //   }
  //   else{
  //     navigate('org-verification')
  //   }
  // }



  return (
    <><div>
    <Navbar photourl={user.photo} />

{/* the form */}
<div class="h-1/4 md:flex flex-col justify-center items-center bg-gray-200 ">
  <div class="flex md:w-1/2 justify-center py-10 items-center ">
      {/* <!-- Your form content goes here --> */}
      <form class="bg-white w-11/12 shadow-md shadow-gray-500 rounded-md p-10 ">
    <h1 class="text-gray-800 font-bold text-2xl text-center mb-1">Adhar Card Generation</h1>
    <p class="text-sm font-normal text-gray-600 text-center mb-7">Add Adhar Details Here</p>
  


    <div>
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
                              if (selectedOrganization === 'government') {
                                  return ['adhar-card', 'pancard'].includes(option.value);
                              } else if (selectedOrganization === 'institutes') {
                                  return option.value === 'degree';
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
      </div>

  
    full name
    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
        fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd" />
      </svg>
      <input class="pl-2 w-full outline-none border-none" type="text" name="" id="" placeholder="Full name" />
    </div>

  {/*aadhar number  */}
    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
  <input class="pl-2 w-full outline-none border-none" type="text" name="aadhar" id="aadhar" placeholder="Aadhar Card Number" pattern="[0-9]{12}" title="Aadhar card number should be 12 digits." required />
</div>


{/*  Mobile Number*/}
<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21c-2.048 0-3.956-.553-5.585-1.515-1.174-.698-2.433-1.485-3.82-2.37a31.857 31.857 0 01-4.027-2.743 31.857 31.857 0 01-2.743-4.027C3.038 9.989 2.251 8.83 1.553 7.656 1.14 6.219 1 5.12 1 4c0-2.209 1.791-4 4-4h4c.553 0 1 .447 1 1s-.447 1-1 1H5c-1.104 0-2 .896-2 2 0 .372.103.721.282 1.03.093.151.196.296.318.425a29.857 29.857 0 003.13 3.268 29.857 29.857 0 003.268 3.13c.13.122.274.225.425.318.309.179.658.282 1.03.282.553 0 1-.447 1-1V6c0-.553-.447-1-1-1-1.104 0-2 .896-2 2 0 .234.066.454.18.646.042.075.095.147.16.215.158.15.342.26.54.36.246.127.537.216.82.267a34.054 34.054 0 002.793 4.77c.487.715 1.146 1.367 1.94 2.074C19.23 19.956 21 20 24 20c.553 0 1-.447 1-1s-.447-1-1-1zM18 2c.553 0 1 .447 1 1s-.447 1-1 1h-4c-.553 0-1-.447-1-1s.447-1 1-1h4zM8 15.601a27.89 27.89 0 01-2.247-2.673c-.6-.834-1.232-1.707-1.918-2.666-.354-.45-.798-.998-1.303-1.618H7c.553 0 1 .447 1 1s-.447 1-1 1H3.403c.67 1.035 1.227 1.922 1.98 3.027.725 1.08 1.487 2.204 2.307 3.342C7.72 15.15 8 15.369 8 15.601z" />
  </svg>
  <input class="pl-2 w-full outline-none border-none" type="tel" name="" id="" placeholder="Phone Number" />
</div>
      

    {/* email */}
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <input class="pl-2 w-full outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
    </div>

    {/* Adress */}
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd" />
            </svg>
            <input class="pl-2 w-full outline-none border-none" type="text" name="" id="" placeholder="Address" />
    </div>

    {/* Date */}
    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
        fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd" />
      </svg>
      <input class="pl-2 w-full outline-none border-none" type="date" name="" id="" placeholder="Date of Birth" />
    </div>
  
     {/* gender */}
     <div class="flex items-center py-2  rounded-2xl mb-3 ">
  
  <div class="relative w-full  outline-none border-none">
  
  <select class="block appearance-none w-full h-14 bg-white border-2 border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-2xl shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 text-gray-500">
  <option value="" disabled selected>Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="others">Others</option>
</select>

      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
          </svg>
      </div>
  </div>
</div>
  
   {/* Document */}
   <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd" />
            </svg>
            <input class="pl-2 w-full outline-none border-none" type="file" name="" id="" placeholder="Document" />
    </div>
            <button type="submit" class="block w-full  mt-4 py-2 rounded-2xl  mb-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium  text-xl px-5  text-center ">Submit</button>
            {/* <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> */}
  </form>
  </div>
</div>

  {/* the form */}


    {/* select button for Organization Type */}
    <div className="relative flex space-x-5 mt-5 ">
      <div className="bg-blue-400 p-4 rounded-lg text-white font-medium">
        Select Organization Type
      </div>
      <select
        className="block appearance-none w-[20%] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="orgtype"
        onChange={handelChange}
      >
        <option value="">Select an option</option>
        <option value="Study Institute">Study Institute</option>
        <option value="Private Organization">Private Organization</option>
        <option value="Government Organization">
          Government Organization
        </option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M7.293 10.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>

    {/* select button for Document type */} 
    {org.orgtype === "Government Organization" ? (
      <div className="relative flex space-x-5 mt-5 ">
        <div className="bg-blue-400 p-4 rounded-lg text-white font-medium">
          Select Document Type
        </div>
        <select
          className="block appearance-none w-[20%] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="doctype"
          onChange={handelChange}
        >
          <option value="">Select an option</option>
          <option value="Aadhar Card">Aadhar Card</option>
          <option value="Pan card">Pan card</option>
          <option value="Licence">Licence</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 10.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    ) : (
      <div className="relative flex space-x-5 mt-5 ">
        <div className="bg-blue-400 p-4 rounded-lg text-white font-medium">
          Select Document Type
        </div>
        <select
          className="block appearance-none w-[20%] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="doctype"
          onChange={handelChange}
        >
          <option value="">Select an option</option>
          <option value="Course Degree">Course Degree</option>
          <option value="Result">Result</option>
          <option value="Program Certification">Program Certification</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 10.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    )};

    <button className="bg-blue-400 p-4 rounded-lg text-white font-medium mt-5" onClick={handelclick}>Go to verification</button>
  </div></>
  );
 }};







export default VerifyCerti;
    //  export default withAuth(VerifyCerti, false) ;
