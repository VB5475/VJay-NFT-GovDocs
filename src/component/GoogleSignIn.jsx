import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import Cookies from "js-cookie";

const GoogleSignIn = () => {
  const navigate = useNavigate();


  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const res = await signInWithPopup(auth, provider);
      console.log("response", res);

      const accessToken = res.user.accessToken;
      const profile = {
        name: res.user.displayName,
        photo: res.user.photoURL,
      };
      // store credential for person who generate certificate
        Cookies.set("generate-user-access-token", accessToken, { expires: 7 });
        Cookies.set("generate-user", JSON.stringify(profile));
     
      // navigate to the home page after login
     navigate('/')

    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <button onClick={signInWithGoogle}></button>
    // <img src={'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png'} alt="" srcset="" className="h-10 w-10" onClick={signInWithGoogle}/>
    <div className="space-x-4 flex justify-center">
     
      <button className="w-full text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="" onClick={()=>{signInWithGoogle()}}>
        Login with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
