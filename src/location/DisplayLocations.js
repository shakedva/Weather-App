// import {useState} from "react";
import Locations from "./Locations";
import {useLocation} from '../contexts/LocationContext'

//
function DisplayLocations(props) {

    const {state} = useLocation()

    let l = state.locationList.length === 0 ? '(No locations yet...)' : state.locationList[0].name
    return (
        <div>
            <h1> Locations: </h1>
            {`${l}`}
        </div>
    )
}

export default DisplayLocations;
