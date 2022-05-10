import DisplayLocations from "../location/DisplayLocations"
import {useState} from "react";
import DisplaySelectedLocation from "./DisplaySelectedLocation";

const Forecast = () =>
{
    const [selectedLocation, setSelectedLocation] = useState("");
    const [isLocationChanged, setIsLocationChanged] = useState(false);

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