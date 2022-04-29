import AddLocation from "./AddLocation"
import LocationList from "./LocationList"
import {useState} from "react";
function Locations () {

    const [locationList, setLocationList] = useState([]);

    // const [name, setName] = useState("");
    // const [latitude, setLatitude] = useState("");
    // const [longitude, setLongitude] = useState("");
    //

    return (
        <div>
            <h1>Locations</h1>
            <LocationList />
            {/*<AddLocation name={name} changeName={setName} latitude={latitude} longitude={longitude}/>*/}
        </div>
        );

};

export default Locations;