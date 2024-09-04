import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { genrateCerty } from "../api";

const Panform = () => {
  const navigate = useNavigate();

  // State for form input values
  const [PANNumber, setPANNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [dob, setDob] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // State for success and error messages
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle image input change
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!PANNumber || !fullName || !fatherName || !dob || !contactNumber) {
      setErrorMessage('Please fill in all required fields.');
      setSuccessMessage('');
      return;
    }

    if (!selectedImage) {
      setErrorMessage('Please select an image to upload.');
      setSuccessMessage('');
      return;
    }

    // Create a FormData object to send the form data to the server
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('PANNumber', PANNumber);
    formData.append('fullName', fullName);
    formData.append('fatherName', fatherName);
    formData.append('dob', dob);
    formData.append('contactNumber', contactNumber);

    try {
      const response = await genrateCerty(formData); // Call the API function
      // Handle the response as needed
      console.log('Response from server:', response);
      setSuccessMessage('Success: Data posted successfully.');
      setErrorMessage('');
      // You can also navigate here if needed
      // navigate("/cid");
    } catch (error) {
      // Handle any errors that occur during processing
      console.error('Error processing data:', error);
      setErrorMessage('Error: Failed to post data.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-500">
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
          Enter Pan card detail
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="PANNumber"
          >
            PAN Number:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="PANNumber"
            placeholder="Enter PAN Number"
            required
            value={PANNumber}
            onChange={(e) => setPANNumber(e.target.value)}
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
            htmlFor="fatherName"
          >
            Father Name:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="fatherName"
            placeholder="Enter Father Name"
            required
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
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
    </div>
  );
};

export default Panform;
