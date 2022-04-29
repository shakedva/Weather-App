// import {useReducer} from 'react';
import {useLocation} from './LocationContext'

function AddLocation(props) {
    const {dispatch} = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
            dispatch({type: 'add', location: props.name})
        alert(`The name you entered was: ${props.name}`);
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