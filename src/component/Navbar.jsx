import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <div className="bg-gray-900 p-2 text-white flex space-x-28 justify-between items-center ">
        <div className="flex space-x-28">
          <span
            className="font-medium hover:bg-purple-600 hover:cursor-pointer p-2 rounded-lg text-xl"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </span>

  
          {/* <span className='font-medium hover:bg-purple-600 hover:cursor-pointer p-2 rounded-lg text-xl' onClick={()=>{navigate('/GenerateCertificate')}}>Generate Certificate</span>
        <span className='font-medium hover:bg-purple-600 hover:cursor-pointer p-2 rounded-lg text-xl'  onClick={()=>{navigate('/VerifyCertificate')}}>Verify Certificate</span> */}
        </div>

        <div className="flex space-x-4 ">
          <button
            className="text-xl hover:bg-purple-500 rounded-lg hover:cursor-pointer px-3"
            onClick={handelLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
