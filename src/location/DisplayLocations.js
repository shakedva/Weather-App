import {useLocation} from '../contexts/LocationContext'
import LocationRow from './LocationRow'
import * as React from 'react'
import style from '../css/style.css'

function DisplayLocations(props) {

    const {state} = useLocation()

    //todo maybe state
    const locationRows = state.locationList.map((oneLocation, index) => {
            return (
                <React.Fragment key={index}>
                    <LocationRow setSelectedLocation={props.setSelectedLocation} showDelete={props.showDelete}
                                 oneLocation={oneLocation}/>
                </React.Fragment>
            )
        }
    )
    const msg = <div>(No locations yet...)</div>
    let l = state.locationList.length === 0 ? msg : locationRows

    return (
        <div className={'locationsList'}>
            {/*<li><h3>Locations:</h3></li>*/}
            {locationRows}
        </div>
    )
}

export default DisplayLocations;
