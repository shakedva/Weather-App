import {useLocation} from '../contexts/LocationContext'

function DeleteLocation({name}) {
    const {dispatch} = useLocation();

    const handleDelete = (event) => {
        alert(name + " " + event.target.parentElement.tagName)
        event.target.parentElement.remove();
        dispatch({type: 'delete', locationToDelete: name})

    }
    return <button onClick={handleDelete}>x</button>;
}

export default DeleteLocation;