import React, { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import { Navigate, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { loginapi } from "../api";
import { useToken } from "./TokenContext";

function Login() {
  const navigate = useNavigate();
  
  const { setToken } = useToken(); // Use setToken, not setAuthToken

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setuser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginapi(user);
      console.log(response);
      if (response.ok) {
        console.log("response.ok class");
        const authToken = response.token;
        // setToken(authToken);
        localStorage.setItem("token",authToken);
        console.log("authtoken after everything done", authToken);
       
        // Check the email condition and navigate accordingly
        if (user.email === 'vb@gmail.com') {
          // Navigate to the desired route when the condition is met
          navigate('/home/decentrelizeddigitallocker');
        } else {
          // Navigate to a different route when the condition is not met
          navigate('/');
        }

      } else {
        // Handle login failure, e.g., show an error message
        console.error("Login failed:", response.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <>
      <div
        id="c"
        class="bg-gray-50 flex justify-center space-y-8 w-screen border-2 border-black px-80 "
      >
        <Signup id="a" />
        {/* for login */}
        <section class="bg-gray-50 dark:bg-gray-900 w-full justify-center">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-4 sm:p-8">
                <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign In account
                </h1>
                <h4 class="text-sm font-normal text-center leading-tight tracking-tight text-gray-900 md:text-sm dark:text-white">
                  Already Have an account?
                </h4>
                <form
                  class="space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email" // Change id to name
                      id="email"
                      value={user.email}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password" // Change id to name
                      id="password"
                      placeholder="••••••••"
                      value={user.password}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80  font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                  >
                    Login
                  </button>
                  <GoogleSignIn />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Login;
