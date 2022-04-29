import {useState} from 'react';

function AddLocation(props)
{

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        alert(`The name you entered was: ${props.name}`);
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
                // onChange={(e) => setLatitude(e.target.value)}
            />
            <br/>
            <label> Longitude </label>
            <input
                type="text"
                value={props.longitude}
                // onChange={(e) => setLongitude(e.target.value)}
            />
            <br/>
            <input type="submit" value={"Add Location"}/>
        </form>
    )
}

export default AddLocation;