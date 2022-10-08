import { useState } from "react";
import "./App.css";
import useRequest from "./hooks/useRequest";
import Forecast from "./components/Forecast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
function App() {
  const [searchResults, setSearchResults] = useState("kolkata");
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResults}&days=10&aqi=no&alerts=no`;
  const { data } = useRequest(url);
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <h1 style={{ margin: "30px 5px", fontSize: "40px", marginLeft: 5 }}>
        Ambi<span style={{ color: "#F44336" }}>enca</span>
      </h1>
      {Object.keys(data).length !== 0 && (
        <>
          <Search setSearchResults={setSearchResults}></Search>
          <CurrentWeather data={data}></CurrentWeather>
          <Forecast data={data}></Forecast>
        </>
      )}

      <Footer></Footer>
    </div>
  );
}

export default App;
