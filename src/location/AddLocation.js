import {useLocation} from '../contexts/LocationContext'
import {LocationData} from '../structs/LocationData'
import {useState} from "react";
import * as React from "react";

function AddLocation(props)
{
    const {dispatch, state} = useLocation();
    const [isValid, setIsValid] = useState(true);


    const validateName = () =>
    {
        setIsValid(true);
        for (let location of state.locationList)
        {
            if (props.name === location.name)
            {
                setIsValid(false);
                return false;
            }
        }
        return true;
    }
    const resetInputs = () =>
    {
        props.changeName('')
        props.changeLatitude('')
        props.changeLongitude('')
        setIsValid(true);
    }
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const data = LocationData(props.name, props.latitude, props.longitude);

        if (validateName())
        {
            resetInputs()
            dispatch({type: 'add', location: data})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label><b> Name </b></label> <br/>
                <input
                    type="text"
                    value={props.name}
                    onChange={(e) => props.changeName(e.target.value)}
                    required={true} maxLength={10}
                />
            </div>
            {isValid ? <> </> : <span id={"errorElem"}> <b>{props.name} already exists</b> <br/></span>}
            <div className="form-group">
                <label> <b>Latitude</b> </label> <br/>
                <input

                    type="number"
                    value={props.latitude}
                    onChange={(e) => props.changeLatitude(e.target.value)}
                    required={true} step={0.0000001}
                    min={-90} max={90}
                />
            </div>
            <div className="form-group">
                <label><b>Longitude </b></label> <br/>
                <input
                    type="number"
                    value={props.longitude}
                    onChange={(e) => props.changeLongitude(e.target.value)}
                    required={true} step={0.0000001}
                    min={-180} max={180}
                />
            </div>
            <br/>
            <input type="submit" className={"btn btn-outline-info"} value={"Add Location"}/>
        </form>
    )
}

export default AddLocation;