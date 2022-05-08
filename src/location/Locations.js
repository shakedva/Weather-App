import AddLocation from "./AddLocation"
import DisplayLocations from "./DisplayLocations"
import {useState} from "react";

function Locations() {

    //todo remove default
    const [name, setName] = useState("jlm");
    const [latitude, setLatitude] = useState("31.771959");
    const [longitude, setLongitude] = useState("35.213618");

    return (
        <div>
            <DisplayLocations showDelete={true}/>
            <AddLocation name={name} changeName={setName}
                         latitude={latitude} changeLatitude={setLatitude}
                         longitude={longitude} changeLongitude={setLongitude}/>
        </div>
    );

}

export default Locations;