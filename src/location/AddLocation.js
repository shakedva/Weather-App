import {useLocation} from '../contexts/LocationContext'
import {LocationData} from '../structs/LocationData'
import {useState} from "react";
import * as React from "react";

/**
 * This component is responsible of adding a new location to the locations list
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

function AddLocation(props) {
    const {dispatch, state} = useLocation(); //the location context
    const [isValid, setIsValid] = useState(true); //if the input is valid

    /**
     * this function checks if the given location name input is unique
     * @returns {boolean}
     */
    const validateName = () => {
        setIsValid(true);
        for (let location of state.locationList) {
            if (props.name === location.name) {
                setIsValid(false);
                return false;
            }
        }
        return true;
    }

    /**
     * reset input values
     */
    const resetInputs = () => {
        props.changeName('')
        props.changeLatitude('')
        props.changeLongitude('')
        setIsValid(true);
    }

    /**
     * this function dispatched the request to add a location to the location list
     * @param event
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        //create a LocationData object to add to the location list inside the context
        const data = LocationData(props.name, props.latitude, props.longitude);

        if (validateName()) {
            resetInputs()
            dispatch({type: 'add', location: data})
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label><b> Name </b></label> <br/>
                <input type="text" value={props.name} required={true} maxLength={10}
                       onChange={(e) => props.changeName(e.target.value)}
                />
            </div>

            {isValid ? <> </> : <span id={"errorElem"}> <b>{props.name} already exists</b> <br/></span>}

            <div className="form-group">
                <label> <b>Latitude</b> </label> <br/>
                <input type="number" value={props.latitude} required={true} step={0.0000001} min={-90} max={90}
                       onChange={(e) => props.changeLatitude(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label><b>Longitude</b></label> <br/>
                <input type="number" value={props.longitude} min={-180} max={180} required={true} step={0.0000001}
                       onChange={(e) => props.changeLongitude(e.target.value)}
                />
            </div>

            <br/>
            <input type="submit" className={"btn btn-outline-info"} value={"Add Location"}/>
        </form>
    )
}

export default AddLocation;