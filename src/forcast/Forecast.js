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
    const [isLocationChanged, setIsLocationChanged] = useState(false); //to know if a new location was selected

    return (
        <div>
            <h1>Forecast</h1>
            <DisplayLocations setIsLocationChanged={setIsLocationChanged} setSelectedLocation={setSelectedLocation}
                              showDelete={false}/>
            {selectedLocation ? <DisplaySelectedLocation isLocationChanged={isLocationChanged}
                                                         setIsLocationChanged={setIsLocationChanged}
                                                         selectedLocation={selectedLocation}/> : <br/>
            }
        </div>)
};

export default Forecast;