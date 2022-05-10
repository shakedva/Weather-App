import {useLocation} from '../contexts/LocationContext'
import LocationRow from './LocationRow'
import * as React from 'react'

/**
 * This component is responsible to display all locations from the locations list
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function DisplayLocations(props) {
    const {state} = useLocation()

    //create a LocationRow component for each of the locations from the locations list
    const locationRows = state.locationList.map((oneLocation, index) => {
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
    //show all existing locationd from the locations list if there are any. otherwise show msg
    let dataToShow = state.locationList.length === 0 ? msg : locationRows

    return (
        <div className={'locationsList'}>
            <h3>Locations:</h3>
            {dataToShow}
        </div>
    )
}

export default DisplayLocations;
