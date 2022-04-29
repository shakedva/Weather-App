import AddLocation from "./AddLocation"
import DisplayLocations from "./DisplayLocations"
import {useState} from "react";

function Locations() {

    const [name, setName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    return (
        <div>
            <DisplayLocations/>
            <AddLocation name={name} changeName={setName}
                         latitude={latitude} changeLatitude={setLatitude}
                         longitude={longitude} changeLongitude={setLongitude}/>
        </div>
    );

}

export default Locations;