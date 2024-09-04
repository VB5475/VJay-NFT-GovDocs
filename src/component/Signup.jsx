import React, { useState } from "react";
import { signupapi } from "../api";

const Signup = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // State for success message

  // Define the options for both dropdowns
  const organizationOptions = [
    { value: "", label: "Select" },
    { value: "government", label: "Government" },
    { value: "institutes", label: "Institutes" },
    { value: "individual", label: "Individual" },
  ];

  const certificateOptions = [
    { value: "", label: "Select " },
    { value: "aadhar", label: "Aadhar Department" },
    { value: "pancard", label: "Income Tax Department" },
    { value: "degree", label: "GTU" },
    { value: "receiver", label: "Individual" },
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

  const handleOrganizationNameChange = (event) => {
    setOrganizationName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with form data
    const formData = {
      organization: selectedOrganization,
      certificate: selectedCertificate,
      organizationName: organizationName,
      email: email,
      password: password,
    };

    try {
      const response = await signupapi(formData);
      console.log(response.msg);
      // Display a success message
      setSuccessMessage(response.msg);
      // Clear the form fields
      setSelectedOrganization("");
      setSelectedCertificate("");
      setOrganizationName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle the error, e.g., display an error message
    }
  };

  return (
    <section className="bg-gra-50 dark:bg-gray-900 justify-center py-5 w-full">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create account
          </h1>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            {successMessage && (
              <div className="bg-green-100 border-green-400 text-green-700 border-l-4 p-4 mb-4 w-full">
                {successMessage}
              </div>
            )}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* Organization Dropdown */}
              <div className="flex items-center py-2 rounded-2xl">
                <div className="relative w-full outline-none border-none">
                  <label
                    htmlFor="organization"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Organization Type
                  </label>
                  <select
                    id="organization"
                    value={selectedOrganization}
                    onChange={handleOrganizationChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              <div className="flex items-center py-2 rounded-2xl my-0">
                <div className="relative w-full outline-none border-none">
                  <label
                    htmlFor="certificate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Type
                  </label>
                  <select
                    id="certificate"
                    value={selectedCertificate}
                    onChange={handleCertificateChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {certificateOptions
                      .filter((option) => {
                        // Only show certificate options based on selected organization
                        if (selectedOrganization === "government") {
                          return ["", "aadhar", "pancard"].includes(
                            option.value
                          );
                        } else if (selectedOrganization === "institutes") {
                          return ["", "degree"].includes(option.value);
                        }else if (selectedOrganization === "individual") {
                          return ["", "receiver"].includes(option.value);
                        }
                        return true; // Include all options for other cases
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

              <div>
                <label
                  htmlFor="organizationName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={organizationName}
                  onChange={handleOrganizationNameChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="xyz"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
