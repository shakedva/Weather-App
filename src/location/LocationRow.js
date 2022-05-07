import DeleteLocation from "./DeleteLocation";
import {useLocation} from '../contexts/LocationContext'

function LocationRow(props) {

    const {dispatch} = useLocation();

    return (
        <li>{props.oneLocation.name}
            <DeleteLocation name={props.oneLocation.name}/>
        </li>
    );
}

export default LocationRow;