// import {useReducer} from 'react';
import {useLocation} from '../contexts/LocationContext'
import {LocationData} from '../structs/LocationData'
import {useState} from "react";

function AddLocation(props) {
    const {dispatch, state} = useLocation();
    const [isValid, setIsValid] = useState(true);


    const validateName = () => {
        setIsValid(true);
        // document.getElementById("errorElem").classList.add("d-none")
        //document.getElementById("errorElem").style.display = 'none';
        for (let location of state.locationList) {
            if (props.name === location.name) {
                //document.getElementById("errorElem").style.display = 'block';//classList.remove("d-none")
                setIsValid(false);
                return false;
            }
        }
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = LocationData(props.name, props.latitude, props.longitude);

        if (validateName()) {
            dispatch({type: 'add', location: data})
        }
        // else
        //     document.getElementById("errorElem").classList.remove("d-none")
        //todo clear inputs

    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Name </label>
            <input
                type="text"
                value={props.name}
                onChange={(e) => props.changeName(e.target.value)}
                required={true} maxLength={10}
            />
            {isValid ? <br/> : <span id={"errorElem"}><br/> Already exists <br/></span>}
            <label> Latitude </label>
            <input
                type="number"
                value={props.latitude}
                onChange={(e) => props.changeLatitude(e.target.value)}
                required={true} step={0.0000001}
                min={-90} max={90}
            />
            <br/>
            <label> Longitude </label>
            <input
                type="number"
                value={props.longitude}
                onChange={(e) => props.changeLongitude(e.target.value)}
                required={true} step={0.0000001}
                min={-180} max={180}

            />
            <br/>
            <input type="submit" value={"Add Location"}/>
        </form>
    )
}

export default AddLocation;