import React from 'react';

const AadharForm = () => {

  




  return (<>




{/* <!-- component --> */}
<div class="h-1/4 md:flex flex-col justify-center items-center bg-gray-200 ">
    <div class="flex md:w-1/2 justify-center py-10 items-center ">
        {/* <!-- Your form content goes here --> */}
        <form class="bg-white w-11/12 shadow-md shadow-gray-500 rounded-md p-10 ">
			<h1 class="text-gray-800 font-bold text-2xl text-center mb-1">Adhar Card Generation</h1>
			<p class="text-sm font-normal text-gray-600 text-center mb-7">Add Adhar Details Here</p>
		
    	{/* full name */}
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
      </div>

    {/*aadhar number  */}
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
    <input class="pl-2 outline-none border-none" type="text" name="aadhar" id="aadhar" placeholder="Aadhar Card Number" pattern="[0-9]{12}" title="Aadhar card number should be 12 digits." required />
</div>


{/*  Mobile Number*/}
<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21c-2.048 0-3.956-.553-5.585-1.515-1.174-.698-2.433-1.485-3.82-2.37a31.857 31.857 0 01-4.027-2.743 31.857 31.857 0 01-2.743-4.027C3.038 9.989 2.251 8.83 1.553 7.656 1.14 6.219 1 5.12 1 4c0-2.209 1.791-4 4-4h4c.553 0 1 .447 1 1s-.447 1-1 1H5c-1.104 0-2 .896-2 2 0 .372.103.721.282 1.03.093.151.196.296.318.425a29.857 29.857 0 003.13 3.268 29.857 29.857 0 003.268 3.13c.13.122.274.225.425.318.309.179.658.282 1.03.282.553 0 1-.447 1-1V6c0-.553-.447-1-1-1-1.104 0-2 .896-2 2 0 .234.066.454.18.646.042.075.095.147.16.215.158.15.342.26.54.36.246.127.537.216.82.267a34.054 34.054 0 002.793 4.77c.487.715 1.146 1.367 1.94 2.074C19.23 19.956 21 20 24 20c.553 0 1-.447 1-1s-.447-1-1-1zM18 2c.553 0 1 .447 1 1s-.447 1-1 1h-4c-.553 0-1-.447-1-1s.447-1 1-1h4zM8 15.601a27.89 27.89 0 01-2.247-2.673c-.6-.834-1.232-1.707-1.918-2.666-.354-.45-.798-.998-1.303-1.618H7c.553 0 1 .447 1 1s-.447 1-1 1H3.403c.67 1.035 1.227 1.922 1.98 3.027.725 1.08 1.487 2.204 2.307 3.342C7.72 15.15 8 15.369 8 15.601z" />
    </svg>
    <input class="pl-2 outline-none border-none" type="tel" name="" id="" placeholder="Phone Number" />
</div>
				

      {/* email */}
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>

      {/* Adress */}
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Address" />
      </div>

      {/* Date */}
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input class="pl-2 outline-none border-none" type="date" name="" id="" placeholder="Date of Birth" />
      </div>
    
       {/* gender */}
       <div class="flex items-center py-2  rounded-2xl mb-3 ">
    
    <div class="relative w-full  outline-none border-none">
    
    <select class="block appearance-none w-full h-14 bg-white border-2 border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-2xl shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 text-gray-500">
    <option value="" disabled selected>Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="others">Others</option>
</select>

        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
            </svg>
        </div>
    </div>
</div>
		
     {/* Document */}
     <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input class="pl-2 outline-none border-none" type="file" name="" id="" placeholder="Document" />
      </div>
							<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Submit</button>
							{/* <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> */}
		</form>
    </div>
</div>



  


    </>
   
  );
};

export default AadharForm;
