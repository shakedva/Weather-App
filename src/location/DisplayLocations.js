import {useEffect, useState} from "react";
import Locations from "./Locations";
import {useLocation} from '../contexts/LocationContext'
import LocationRow from './LocationRow'
import * as React from 'react'

function DisplayLocations() {

    const {state} = useLocation()

    //todo maybe state
    const locationRows = state.locationList.map((oneLocation, index) => {
            return (
                <React.Fragment key={index}>
                    <LocationRow oneLocation={oneLocation}/>
                </React.Fragment>
            )
        }
    )
    const msg = <li>(No locations yet...)</li>
    let l = state.locationList.length === 0 ? msg : locationRows

    return (
        <ul>
            {/*<li><h3>Locations:</h3></li>*/}
            {locationRows}
        </ul>
    )
}

export default DisplayLocations;
