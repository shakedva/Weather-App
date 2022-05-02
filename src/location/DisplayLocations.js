// import {useState} from "react";
import Locations from "./Locations";
import {useLocation} from '../contexts/LocationContext'
import LocationRow from './LocationRow'

function DisplayLocations() {

    const {state} = useLocation()

    const locationRows = [];

    state.locationList.forEach((oneLocation) => {
        locationRows.push(
            <LocationRow
                oneLocation={oneLocation}/>
        );
    });

    let l = state.locationList.length === 0 ? '(No locations yet...)' : locationRows
    return (
        <table>
            <thead>
            <th>Locations:</th>
            </thead>
            <tbody>{l}</tbody>
        </table>

    );
}

export default DisplayLocations;
