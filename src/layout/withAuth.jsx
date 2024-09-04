import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (Component) => {
  const Authentication = () => {
    const authToken = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
      if (!authToken) {
        // If the token is not present, redirect to the login page
        navigate("/login");
      }
    }, [authToken, navigate]);

    return authToken ? <Component /> : null; // Render the component if the token is present
  };

  return Authentication;
};

export default withAuth;
