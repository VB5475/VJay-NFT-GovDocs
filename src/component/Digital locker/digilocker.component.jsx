import { useState } from "react";

import Navbar from "../Navbar";

const Digilocker = (props) => {
  const [data, setData] = useState(null); // Initialize data as null

  const isEmpty = Object.keys(props.dataArray).length === 0;

  // Check isEmpty only once and set data accordingly
  if (!isEmpty && !data) {
    const images = props.dataArray.map((item, i) => {
      const { name, image } = item;

      return (
        <div key={i}>
          <a href={`https://gateway.pinata.cloud/ipfs/${image}`} target="_blank">
            <button
              type="button"
              className="w-full h-24 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mb-4"
            >
              {name} 
            </button>
          </a>
        </div>
      );
    });

    setData(images); // Set data only once when it's not empty
  } else if (isEmpty && !data) {
    // Handle the case when dataArray is empty
    setData("No image to display");
  }

  return (
    <>
      
      <Navbar />
      <div className=" flex flex-col border-2  w-1/2 h-auto mt-10 mx-auto shadow-lg shadow-gray-500 rounded-lg text-center px-0">
        
        <div className=" text-2xl font-bold my-5">📂Decentrelized Digital Locker System 📄</div>   
    <div id="outer" className=" flex  justify-center items-center my-auto ">
   
<div id="inner" className="grid grid-cols-3 gap-6">{data}</div>
</div></div>
      
</>
      

  
  );
};

export default Digilocker;
