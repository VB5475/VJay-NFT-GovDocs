import React, { useState } from 'react';

function PanCardForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    panNumber: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to an API or perform validation.
    console.log(formData);
  };

  return (
    <div className="bg-government-bg h-screen flex flex-col justify-center items-center">
    <div className="bg-white p-8 rounded shadow-lg w-96">
      <h1 className="text-2xl font-semibold mb-4">PAN Card Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="fullName" className="font-semibold mb-2">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="panNumber" className="font-semibold mb-2">PAN Number:</label>
          <input
            type="text"
            id="panNumber"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dateOfBirth" className="font-semibold mb-2">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="licenseNumber" className="font-semibold mb-2">Document</label>
          <input
            type="file"
            id="file"
            name="file"
            value={formData.licenseNumber}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default PanCardForm;
