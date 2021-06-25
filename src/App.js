import "./App.css";
import { useState } from "react";
import SearchInput from "./components/searchInput";
import SawoUser from "./SawoConfig/sawoUser";
import WeatherCard from "./components/weatherCard";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  //Data State
  const [cityName, setCityName] = useState("");
  const [user, setUser] = useState();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  const [cityData, setCityData] = useState();

  //Preloader State
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <NavbarComponent />

      <div className="p-2 mt-3">
        {/* SEARCH BAR COMPONENT */}
        <SearchInput
          cityName={cityName}
          setIsUserLoggedIn={setIsUserLoggedIn}
          isUserLoggedIn={isUserLoggedIn}
          setCityName={setCityName}
          setCityData={setCityData}
          setLoading={setLoading}
        />

        {user ? (
          <div
            style={{ maxWidth: "600px" }}
            className="bg-white weather-card text-dark p-2 mx-auto my-3"
          >
            <h5 className="text-center">
              HELLO, {user.identifier.split("@")[0].toUpperCase()}
            </h5>
          </div>
        ) : null}
        {loading ? <div class="loader">Loading...</div> : null}

        {/* WEATHER CARD */}
        {cityData && !loading ? <WeatherCard cityData={cityData} /> : null}

        {/* SAWO USER LOGIN */}
        <SawoUser
          setCityName={setCityName}
          setIsUserLoggedIn={setIsUserLoggedIn}
          isUserLoggedIn={isUserLoggedIn}
          setUser={setUser}
          setLoading={setLoading}
        />
      </div>
    </>
  );
}

export default App;
