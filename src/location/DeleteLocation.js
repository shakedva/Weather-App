import {useLocation} from '../contexts/LocationContext'

function DeleteLocation({name}) {
    const {dispatch} = useLocation();

    const handleDelete = () => {
        dispatch({type: 'delete', locationToDelete: name})
    }
    return <button className={"locationItem locationItem-sm"} onClick={handleDelete}>x</button>;
}

export default DeleteLocation;