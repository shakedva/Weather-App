import {useLocation} from '../contexts/LocationContext'
import {LocationData} from '../structs/LocationData'
import {useState} from "react";

function AddLocation(props) {
    const {dispatch, state} = useLocation();
    const [isValid, setIsValid] = useState(true);


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
    const resetInputs = () => {
        props.changeName('')
        props.changeLatitude('')
        props.changeLongitude('')
        setIsValid(true);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = LocationData(props.name, props.latitude, props.longitude);

        if (validateName()) {
            resetInputs()
            dispatch({type: 'add', location: data})
        }
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