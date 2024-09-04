import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { genrateCerty } from "../api";

const Form = () => {
  const navigate = useNavigate();

  // State for form input values
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [issuingDate, setIssuingDate] = useState("");
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

    if (!selectedImage) {
      setErrorMessage("Please select an image to upload.");
      setSuccessMessage("");
      return;
    }

    // Create a FormData object to send the form data to the server
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("organization", organization);
    formData.append("studentName", studentName);
    formData.append("courseName", courseName);
    formData.append("enrollmentNumber", enrollmentNumber);
    formData.append("issuingDate", issuingDate);

    try {
      const response = await genrateCerty(formData); // Call the processData function
      // Handle the response as needed
      console.log("Response from server:", response);
      setSuccessMessage("Success: Data posted successfully.");
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
      <div className="h-screen overflow-y-auto">
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
        <form
          className="bg-gray-50 p-6 sm:p-10 md:w-[80%] lg:w-[60%] xl:w-[40%] rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-medium mb-6 underline text-center">
            Issue A New Certificate
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="organization"
            >
              Organization:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              id="organization"
              name="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="studentName"
            >
              Student Name :
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              id="studentName"
              name="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="courseName"
            >
              Course Name:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              id="courseName"
              name="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="enrollmentNumber"
            >
              Enrollment Number:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              id="enrollmentNumber"
              name="enrollmentNumber"
              value={enrollmentNumber}
              onChange={(e) => setEnrollmentNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="issuingDate"
            >
              Issuing Date:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="date"
              id="issuingDate"
              name="issuingDate"
              value={issuingDate}
              onChange={(e) => setIssuingDate(e.target.value)}
              required
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
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg w-full sm:w-auto"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
