import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { genrateCerty } from "../api";
import { genratemint } from "../api";
  import LoadingScreen from "./LoadingScreen";
const Aadharform = () => {
  // data array

  const [loading, setloading] = useState(false);

  const aadhar = "0x79bfEE46Acd4422526FC424E55037073Be5E12d2";

  // State for form input values
  const [aadharNumber, setAadharNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male"); // Default to "male"
  const [contactNumber, setContactNumber] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // State for success and error messages
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle image input change
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!aadharNumber || !fullName || !dob || !address || !contactNumber) {
      setErrorMessage("Please fill in all required fields.");
      setSuccessMessage("");
      return;
    }

    if (!selectedImage) {
      setErrorMessage("Please select an image to upload.");
      setSuccessMessage("");
      return;
    }

    // Create a FormData object to send the form data to the server
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("aadharNumber", aadharNumber);
    formData.append("fullName", fullName);
    formData.append("dob", dob);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("contactNumber", contactNumber);
    formData.append("smartcontractId", aadhar);

    try {
      setloading(true);
      console.log(formData);
      const response = await genrateCerty(formData); // Call the API function
      setloading(false);
      // Handle the response as needed
      const tokenId = response.tokenId;
      // this is final output
      setSuccessMessage(
        "Success: Data posted successfully. And Token Id is :" + tokenId
      );
      setErrorMessage("");
      // You can also navigate here if needed
      // navigate("/cid");
    } catch (error) {
      // Handle any errors that occur during processing
      console.error("Error processing data:", error);
      setErrorMessage("Error: Failed to post data.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-500">
      {!loading ? (
        <form
          className="bg-gray-50 p-20 w-[40%] h-screen rounded-lg"
          action="post"
          onSubmit={handleSubmit}
        >
          {successMessage && (
            <div className="bg-green-200 text-green-800 p-2 text-center">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-200 text-red-800 p-2 text-center">
              {errorMessage}
            </div>
          )}
          <h1 className="text-xl font-medium mb-10 underline text-center">
            Enter Aadhar card detail
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="aadharNumber"
            >
              Aadhar Number:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="aadharNumber"
              placeholder="Enter Aadhar Number"
              required
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="fullName"
              placeholder="Enter Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dob"
            >
              Date of Birth:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="date"
              id="dob"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address:
            </label>
            <textarea
              className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              id="address"
              rows="3"
              placeholder="Enter Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Gender:
            </label>
            <select
              className="form-control"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contact Number:
            </label>
            <input
              type="tel"
              className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              id="contactNumber"
              placeholder="Enter Contact Number"
              required
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="file"
            >
              File:
            </label>
            <input
              className="w-full px-3 py-2 border bg-purple-300 rounded-lg"
              type="file"
              id="file"
              name="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageChange}
              required
            />
          </div>

          <div className="mb-4 flex justify-center">
            <button
              className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Aadharform;
