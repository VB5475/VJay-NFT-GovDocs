// Component1.jsx
import React, { useEffect, useState } from 'react';
import genrateCerty from '../api';

function Component1() {
  const [data, setData] = useState(null);

  useEffect(() => {
    genrateCerty()
      .then((apiData) => {
        setData(apiData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Render your component using the data
  return (
    <div>
      {data ? (
        // Render data here
        <p>{data.someValue}</p> 
      ) : (
        // Render loading or error message here
        <p>Loading...</p> 
      )}
    </div>
  );
}

export default Component1;
