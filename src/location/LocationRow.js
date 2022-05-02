import DeleteLocation from "./DeleteLocation";

function LocationRow({oneLocation}) {

    return (
        <tr>
            <td>{oneLocation.name}</td>
            <td><DeleteLocation name={oneLocation.name}/></td>
        </tr>
    );
}

export default LocationRow;