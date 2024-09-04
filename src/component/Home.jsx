import React from "react";
import withAuth from "../layout/withAuth";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const token = localStorage.getItem("token");
const Home = () => {
  // for navigation start
  // navigatin end
  const navigate = useNavigate();

  const handelclick = (generate) => {
    if (generate) {
      navigate("/GenerateCertificate");
    } else {
      navigate("/VerifyCertificate");
    }
  };
  return (
    <>
      <Navbar />
      <div
        id="center"
        class="flex flex-col justify-center items-center min-h-screen"
      >
        <button
          onClick={() => {
            navigate("/home/GenerateCertificate");
          }}
          type="button"
          className="w-1/6 h-24 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mb-4"
        >
          Generate
        </button>

        <button
          onClick={() => {
            navigate("/home/VerifyCertificate");
          }}
          type="button"
          className="w-1/6 h-24 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mb-2"
        >
          Validate
        </button>
        <button
          onClick={() => {
            navigate("/home/decentrelizeddigitallocker");
          }}
          type="button"
          className="w-1/6 h-24 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mb-4"
        >
          Decentrelized-DigitalLocker
        </button>



      </div>
    </>
  );
};
export default withAuth(Home);
