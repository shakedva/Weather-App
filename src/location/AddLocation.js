// import {useReducer} from 'react';
import {useLocation} from '../contexts/LocationContext'
import {LocationData} from '../structs/LocationData'

function AddLocation(props) {
    const {dispatch} = useLocation();

    //todo limit name to 10 chars


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = LocationData(props.name, props.latitude, props.longitude);
        dispatch({type: 'add', location: data})

        //todo clear inputs
        return <div> after submit </div>
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Name </label>
            <input
                type="text"
                value={props.name}
                onChange={(e) => props.changeName(e.target.value)}
            />
            <br/>
            <label> Latitude </label>
            <input
                type="text"
                value={props.latitude}
                onChange={(e) => props.changeLatitude(e.target.value)}
            />
            <br/>
            <label> Longitude </label>
            <input
                type="text"
                value={props.longitude}
                onChange={(e) => props.changeLongitude(e.target.value)}
            />
            <br/>
            <input type="submit" value={"Add Location"}/>
        </form>
    )
}

export default AddLocation;