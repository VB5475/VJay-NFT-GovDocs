import React, { useState, useRef } from "react";
  import { validateCerty } from "../api";

const Verifygov = () => {
  const aadhar = "0x79bfEE46Acd4422526FC424E55037073Be5E12d2";
  const formRef = useRef(null); // Reference to the form element

  const [docId, setDocId] = useState(""); // State to hold Document Id

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create a FormData object and append the form field values
    const formData = new FormData();
    formData.append("docId", docId);
    formData.append("aadhar", aadhar); // Append any additional fields as needed
    try {
      const data = await validateCerty(aadhar, docId);
      const link = data.imagelink;
      console.log("redirecting link is : " + data.imagelink);
      window.location.href = link;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-500">
      <form
        ref={formRef} // Assign the ref to the form element
        className="bg-gray-50 p-40 w-[40%] h-[90%] rounded-lg"
        action="post"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-medium mb-10 underline text-center">
          Verify A Document
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="docid"
          >
            Document Id:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="docid"
            name="docid"
            required
            value={docId}
            onChange={(e) => setDocId(e.target.value)} // Update the state on input change
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

export default Verifygov;
