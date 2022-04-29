// import {useState} from "react";
import Locations from "./Locations";
import {useLocation} from './LocationContext'

//
function DisplayLocations(props) {

    const {state} = useLocation()

    let l = state.locationList.length === 0 ? 'No locations yet...' : state.locationList
    return (
        <div>
            <h1> Locations: </h1>
            {`${l}`}
        </div>
    )
}

export default DisplayLocations;
