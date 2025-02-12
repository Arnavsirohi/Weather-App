import Searchbox from "./Searchbox";
import Infobox from "./Infobox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Uttar Pradesh",
        Feeltemp: 26.71,
        humidity: 19,
        maximumtemp: 27.99,
        minimumtemp: 27.99,
        temp: 27.99,
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
        <div>
            <h2>WEATHER APP</h2>
            <Searchbox updateInfo={updateInfo} />
            <Infobox info={weatherInfo} />
        </div>
    );
}
