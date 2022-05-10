import DisplayLocations from "../location/DisplayLocations"
import {useState} from "react";
import DisplaySelectedLocation from "./DisplaySelectedLocation";

/**
 * This component is responsible of the representation of the forecast page
 * @returns {JSX.Element}
 */
const Forecast = () =>
{
    const [selectedLocation, setSelectedLocation] = useState(""); //the location to show forecast on

    return (
        <div>
            <h1>Forecast</h1>
            <DisplayLocations setSelectedLocation={setSelectedLocation} showDelete={false}/>
            {selectedLocation ? <DisplaySelectedLocation selectedLocation={selectedLocation}/> : <br/>
            }
        </div>)
};

export default Forecast;