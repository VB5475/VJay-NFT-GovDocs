// const PORT = process.env.SERVERPORT;
const PORT = 3007;

const token = localStorage.getItem("token");

// pass form data as body
// return json jsonhash(it is ipfs hash of uploaded json file)
export const genrateCerty = async (formData) => {
 try {
  console.log(formData);
  const response = await fetch(`http://localhost:${PORT}/name`, {
   method: "POST",
   body: formData,
   headers: {
    Authorization: "Bearer " + token,
   },
  });
  const data = await response.json();
  console.log(data);
  return data;
 } catch (error) {
  console.error("Error fetching data:", error);
  throw error;
 }
};
// pass address and tokenId
// return json nftmetadata(metadata of the certifiate)
export const validateCerty = async (formData) => {
 try {
  const response = await fetch(`http://localhost:${PORT}/validate`, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token, // Set the content type to JSON
   },
   body: JSON.stringify(formData),
  });
  const data = await response.json();
  console.log(data);
  return data;
 } catch (error) {
  console.error("Error fetching data:", error);
  throw error;
 }
};

export const genratemint = async (formData) => {
 console.log(formData);
 try {
  const response = await fetch(`http://localhost:${PORT}/generatemint`, {
   method: "POST",
   headers: {
    Authorization: "Bearer " + token,
   },
   body: formData,
  });
  const data = await response.json();
  console.log(data);
  return data;
 } catch (error) {
  console.error("Error fetching data:", error);
  throw error;
 }
};

export const signupapi = async (formData) => {
 try {
  const response = await fetch(`http://localhost:${PORT}/signup`, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token, // Set the content type to JSON
   },
   body: JSON.stringify(formData),
  });
  const data = await response.json();
  console.log(data);
  return data;
 } catch (error) {
  console.error("Error fetching data:", error);
  throw error;
 }
};

export const loginapi = async (user) => {
 try {
  // Make an API call to send the user data to your server
  const response = await fetch(`http://localhost:${PORT}/login`, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
   },
   body: JSON.stringify(user),
  });

  if (response.ok) {
   // Successful login, you can redirect or handle the response as needed
   const data = await response.json();
   console.log("Login successful:", data);
   return data;
  } else {
   // Handle login error
   console.error("Login failed:", response.statusText);
  }
 } catch (error) {
  console.error("An error occurred:", error);
 }
};
