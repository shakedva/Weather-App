import DisplayLocations from "../location/DisplayLocations"
import {useState} from "react";

const Forecast = () => {
    const [selectedLocation, setSelectedLocation] = useState("");


    return (
        <div>
            <h1>Forecast</h1>
            <DisplayLocations setSelectedLocation={setSelectedLocation} showDelete={false}/>

            <div>
                {selectedLocation}
            </div>
        </div>)
};

export default Forecast;