import {useLocation} from '../contexts/LocationContext'

function DeleteLocation({name}) {
    const {dispatch} = useLocation();

    const handleDelete = () => {
        dispatch({type: 'delete', locationToDelete: name})
    }
    return <button onClick={handleDelete}>x</button>;
}

export default DeleteLocation;