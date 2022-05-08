import DisplayLocations from "../location/DisplayLocations"
import {useState} from "react";
import DisplaySelectedLocation from "./DisplaySelectedLocation";

const Forecast = () => {
    const [selectedLocation, setSelectedLocation] = useState("");


    return (
        <div>
            <h1>Forecast</h1>
            <DisplayLocations setSelectedLocation={setSelectedLocation} showDelete={false}/>
            {selectedLocation ? <DisplaySelectedLocation selectedLocation={selectedLocation}/> : <br/>}
        </div>)
};

export default Forecast;