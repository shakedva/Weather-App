import DisplayLocations from "./DisplayLocations";

function LocationRow({oneLocation}) {

    return (
        <tr>
            <td>{oneLocation.name}</td>
        </tr>
    );
}
export default LocationRow;