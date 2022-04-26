import {useState} from 'react';

function AddLocation()
{
    const [name, setName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Name </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <label> Latitude </label>
            <input
                type="text"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
            />
            <br/>
            <label> Longitude </label>
            <input
                type="text"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
            />
            <br/>
            <input type="submit" value={"Add Location"}/>
        </form>
    )
}

export default AddLocation;