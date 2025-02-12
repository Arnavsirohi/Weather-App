import "./Searchbox.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'

export default function Searchbox({ updateInfo }) { // ✅ Destructure props
    const API_URL="https://api.openweathermap.org/data/2.5/weather?";
    const API_ID="4d2caf8e9c9dfaf35d3193af5dab8df8";

    // WEATHER INFORMATION FUNCTION
    let WeatherInfo=async(city)=>{
        let response=await fetch(`${API_URL}q=${city}&appid=${API_ID}&units=metric`);
        let jsonresponse=await response.json();
        console.log(jsonresponse);

        let result={
            city: city,
            temp: jsonresponse.main.temp,
            minimumtemp: jsonresponse.main.temp_min,
            maximumtemp: jsonresponse.main.temp_max,
            Feeltemp: jsonresponse.main.feels_like,
            humidity: jsonresponse.main.humidity,
        };
        console.log(result);
        return result;
    };

    // CITY STATE VARIABLE
    let [city, setCity] = useState("");
    let citychange = (event) => {
        setCity(event.target.value);
    };

    // SUBMIT BUTTON FUNCTION
    let Submit = async (event) => {
        event.preventDefault(); // ✅ Fixed missing parentheses

        let newInfo = await WeatherInfo(city); // ✅ Pass city to function
        setCity(""); // ✅ Clear input after search
        updateInfo(newInfo); // ✅ Update state in parent component
    };

    return (
        <div id="Searchbox">
            <form onSubmit={Submit}>
                <TextField
                    id="CITY"
                    label="ENTER THE CITY"
                    variant="outlined"
                    required
                    value={city}
                    onChange={citychange}
                />
                <br /><br /><br />
                <Button variant="text" onClick={Submit} type="submit">SUBMIT</Button>
            </form>
        </div>
    );
}
