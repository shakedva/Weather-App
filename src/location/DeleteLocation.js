import {useLocation} from '../contexts/LocationContext'

/**
 * This component is responsible of the x button that's deleting a location from the locations list
 * @param name
 * @returns {JSX.Element}
 * @constructor
 */
function DeleteLocation({name}) {
    const {dispatch} = useLocation();

    const handleDelete = () => {
        dispatch({type: 'delete', locationToDelete: name}) //delete location from context
    }
    return <button className={"locationItem locationItem-sm"} onClick={handleDelete}>x</button>;
}

export default DeleteLocation;