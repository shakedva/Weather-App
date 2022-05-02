// import {useState} from "react";
import Locations from "./Locations";
import {useLocation} from '../contexts/LocationContext'
import LocationRow from './LocationRow'

function DisplayLocations() {

    const {state} = useLocation()

    const locationRows = [];

    state.locationList.forEach((oneLocation) => {
        locationRows.push(<LocationRow key={oneLocation.name} oneLocation={oneLocation}/>);
    });
    const msg = <tr>
        <td>(No locations yet...)</td>
    </tr>

    let l = state.locationList.length === 0 ? msg : locationRows
    return (
        <table>
            <thead>
            <tr>
                <th>Locations:</th>
                <th> </th>
            </tr>
            </thead>
            <tbody>{l}</tbody>
        </table>

    );
}

export default DisplayLocations;
