import AddLocation from "./AddLocation"
import DisplayLocations from "./DisplayLocations"
import {useState} from "react";

/**
 * This component is responsible of the representation of the Location page
 * @returns {JSX.Element}
 * @constructor
 */
function Locations() {

    const [name, setName] = useState(""); //name input
    const [latitude, setLatitude] = useState(""); //latitude input
    const [longitude, setLongitude] = useState(""); //longitude input

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