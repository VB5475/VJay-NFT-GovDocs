import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import withAuth from "../layout/withAuth";
import Navbar from "./Navbar";
import { genrateCerty } from "../api";
import LoadingScreen from "./LoadingScreen";

const GenCerti = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [loading, setloading] = useState(false);

 // Form input states
 const [fullName, setFullName] = useState("");
 const [aadharNumber, setAadharNumber] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("");
 const [email, setEmail] = useState("");
 const [address, setAddress] = useState("");
 const [dateOfBirth, setDateOfBirth] = useState("");
 const [gender, setGender] = useState("");
 const [document, setDocument] = useState(null);

 const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // Create a FormData object
  const data = new FormData();
  data.append("fullName", fullName);
  data.append("aadharNumber", aadharNumber);
  data.append("phoneNumber", phoneNumber);
  data.append("email", email);
  data.append("address", address);
  data.append("dateOfBirth", dateOfBirth);
  data.append("gender", gender);
  data.append("image", document);

  try {
   setloading(true);
   const response = await genrateCerty(data);
   const tokenId = response.tokenId;
   console.log("tokenid out function", response.tokenId);
   localStorage.setItem("id", tokenId);
   if (response.tokenId) {
    setloading(false);
    setIsModalOpen(true);
   }
   // Make an API request to submit the form data
  } catch (error) {
   console.error("Error during certificate generation:", error);
  }
 };

 return (
  <>
   <Navbar />
   <div className="h-1/4 md:flex flex-col justify-center items-center bg-gray-200">
    <div className="flex md:w-1/2 justify-center py-10 items-center">
     {!loading ? (
      <form
       className="bg-white w-11/12 shadow-md shadow-gray-500 rounded-md p-10"
       onSubmit={handleSubmit}>
       <h1 className="text-gray-800 font-bold text-2xl text-center mb-1">
        Adhar Card Generation
       </h1>
       <p className="text-sm font-normal text-gray-600 text-center mb-7">
        Add Adhar Details Here
       </p>

       {/* Full name */}
       <div className="mb-4">
        <label
         htmlFor="fullName"
         className="block text-gray-700 text-sm font-bold mb-2">
         Full Name:
        </label>
        <input
         className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
         type="text"
         id="fullName"
         placeholder="Full Name"
         value={fullName}
         onChange={(e) => setFullName(e.target.value)}
         required
        />
       </div>

       {/* Aadhar number */}
       <div className="mb-4">
        <label
         htmlFor="aadharNumber"
         className="block text-gray-700 text-sm font-bold mb-2">
         Aadhar Card Number:
        </label>
        <input
         className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
         type="text"
         id="aadharNumber"
         placeholder="Aadhar Card Number"
         // pattern="[0-9]{12}"
         title="Aadhar card number should be 12 digits."
         value={aadharNumber}
         onChange={(e) => setAadharNumber(e.target.value)}
         required
        />
       </div>

       {/* Mobile Number */}
       <div className="mb-4">
        <label
         htmlFor="phoneNumber"
         className="block text-gray-700 text-sm font-bold mb-2">
         Phone Number:
        </label>
        <input
         className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
         type="tel"
         id="phoneNumber"
         placeholder="Phone Number"
         value={phoneNumber}
         onChange={(e) => setPhoneNumber(e.target.value)}
        />
       </div>

       {/* Email */}
       <div className="mb-4">
        <label
         htmlFor="email"
         className="block text-gray-700 text-sm font-bold mb-2">
         Email Address:
        </label>
        <input
         className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
         type="text"
         id="email"
         placeholder="Email Address"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />
       </div>

       {/* Address */}
       <div className="mb-4">
        <label
         htmlFor="address"
         className="block text-gray-700 text-sm font-bold mb-2">
         Address:
        </label>
        <textarea
         className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
         id="address"
         rows="3"
         placeholder="Enter Address"
         required
         value={address}
         onChange={(e) => setAddress(e.target.value)}></textarea>
       </div>

       {/* Date of Birth */}
       <div className="mb-4">
        <label
         htmlFor="dateOfBirth"
         className="block text-gray-700 text-sm font-bold mb-2">
         Date of Birth:
        </label>
        <input
         className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
         type="date"
         id="dateOfBirth"
         placeholder="Date of Birth"
         value={dateOfBirth}
         onChange={(e) => setDateOfBirth(e.target.value)}
        />
       </div>

       {/* Gender */}
       <div className="mb-4">
        <label
         htmlFor="gender"
         className="block text-gray-700 text-sm font-bold mb-2">
         Gender:
        </label>
        <select
         className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
         id="gender"
         name="gender"
         value={gender}
         onChange={(e) => setGender(e.target.value)}>
         <option value="" disabled>
          Select Gender
         </option>
         <option value="male">Male</option>
         <option value="female">Female</option>
         <option value="others">Others</option>
        </select>
       </div>
       {/* Document */}
       <div className="mb-4">
        <label
         htmlFor="document"
         className="block text-gray-700 text-sm font-bold mb-2">
         Document:
        </label>
        <input
         className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
         type="file"
         id="image"
         name="image"
         onChange={(e) => setDocument(e.target.files[0])}
        />
       </div>

       <button
        // onClick={toggleModal}
        type="submit"
        className="block w-full mt-4 py-2 rounded-2xl mb-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium text-xl px-5 text-center">
        Submit
       </button>
      </form>
     ) : (
      <LoadingScreen />
     )}
    </div>
   </div>

   {/* popup */}
   {/* Modal */}
   <div className="bg-white rounded-lg shadow relative ">
    {isModalOpen && (
     <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      <div className="relative max-w-md mx-auto bg-white rounded-lg shadow-md">
       <div className="p-6 space-y-4">
        {/* Your form content goes here */}
        <div className="bg-white rounded-lg shadow-md p-5">
         <div className="text-2xl mb-4">🎉 Congratulations!</div>
         <div className="text-lg">Your Certificate is generated.</div>
         <div className="text-lg">
          Your certificate ID is {localStorage.getItem("id")}
         </div>
        </div>
        <div className="flex justify-end">
         <button
          id="cross"
          onClick={toggleModal}
          className="
                
                text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-md shadow-red-500/50 dark:shadow-md dark:shadow-red-800/80 font-medium  text-xl px-5  text-center p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          type="button">
          close
          <svg
           className="w-5 h-5"
           fill="currentColor"
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
           <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
          </svg>
         </button>
        </div>
       </div>
      </div>
     </div>
    )}
   </div>
  </>
 );
};

export default withAuth(GenCerti);
