import {useLocation} from '../contexts/LocationContext'
import LocationRow from './LocationRow'
import * as React from 'react'

function DisplayLocations(props)
{

    const {state} = useLocation()

    //todo maybe state
    const locationRows = state.locationList.map((oneLocation, index) =>
        {
            return (
                <React.Fragment key={index}>
                    <LocationRow setIsLocationChanged={props.setIsLocationChanged}
                                 setSelectedLocation={props.setSelectedLocation} showDelete={props.showDelete}
                                 oneLocation={oneLocation}/>
                </React.Fragment>
            )
        }
    )
    const msg = <div>(No locations yet...)</div>
    let l = state.locationList.length === 0 ? msg : locationRows

    return (
        <div className={'locationsList'}>
            <h3>Locations:</h3>
            {l}
        </div>
    )
}

export default DisplayLocations;
