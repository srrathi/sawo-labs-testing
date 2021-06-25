import React, { useEffect } from "react";
//Sawo package import
import Sawo from "sawo";

const SawoUser = ({
  setCityName,
  setUser,
  setIsUserLoggedIn,
  isUserLoggedIn,
  setLoading,
}) => {
  //Sawo Configuration data
  const config = {
    // should be same as the id of the container created on 3rd step
    containerID: process.env.REACT_APP_SAWO_CONTAINER_ID,
    // can be one of 'email' or 'phone_number_sms'
    identifierType: process.env.REACT_APP_SAWO_IDENTIFIER_TYPE,
    // Add the API key copied from 2nd step
    apiKey: process.env.REACT_APP_SAWO_API_KEY,
    // Add a callback here to handle the payload sent by sdk
    onSuccess: (payload) => {
      setUser(payload);
      setIsUserLoggedIn(true);
      setCityName("");
    },
  };

  //Sawo Initialization and login form show
  useEffect(() => {
    setLoading(false);
    const sawo = new Sawo(config);
    if (isUserLoggedIn === false) {
      sawo.showForm();
    }
    // eslint-disable-next-line
  }, [isUserLoggedIn]);

  return (
    <div>
      {isUserLoggedIn === false ? (
        <div
          style={{ maxWidth: "600px" }}
          className="bg-white weather-card text-dark p-2 mx-auto my-3"
        >
          <h5 className="text-center">
            Please Login to watch your city's weather
          </h5>
        </div>
      ) : null}
      <div
        id={process.env.REACT_APP_SAWO_CONTAINER_ID}
        style={{ height: "300px", width: "300px" }}
        className="mx-auto"
      ></div>
    </div>
  );
};

export default SawoUser;
