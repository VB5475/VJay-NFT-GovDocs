import React from "react";
import { useNavigate } from "react-router-dom";

const Verifyorg = () => {
    const navigate = useNavigate();
    const handelChange=()=>{

    }
    return (

    <div className="flex items-center justify-center h-screen  bg-purple-500 ">
      <form
        className="bg-gray-50 p-40 w-[40%] h-[90%] rounded-lg"
        action="post"
        onSubmit={() => {
          navigate("/cid");
        }}
      >
        <h1 className="text-xl font-medium mb-10 underline text-center">
          Verify A Document
        </h1>


        <div className="org flex w-full space-x-3">
        <div className="bg-blue-400 p-4 rounded-lg text-white font-medium w-[200px]">
          Select Organization 
        </div>
        <select
          className="block appearance-none w-[50%] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="orgtype"
          onChange={handelChange}
        >
          <option value="">Select Institute</option>
          <option value="Gujrat Technological university">Gujrat Technological university</option>
          <option value="Nirma University">Nirma University</option>
        </select>
        </div>


        <div className="flex w-full space-x-3 mt-3">
        <div className="bg-blue-400 p-4 rounded-lg text-white font-medium w-[200px]">
          Select Batch
        </div>
        <select
          className="block appearance-none w-[50%] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="orgtype"
          onChange={handelChange}
        >
          <option value="">Select Batch</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
        </div>
       

        <div className="mb-4 mt-4">
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

export default Verifyorg;
