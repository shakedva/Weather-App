import {useLocation} from '../contexts/LocationContext'

function DeleteLocation(props) {
    const {dispatch} = useLocation();

    const handleDelete = (event) => {
        alert(props.name + " " + event.target.parentElement.tagName
            + " " + event.target.parentElement.parentElement.tagName
            + " " + event.target.parentElement.parentElement.parentElement.tagName)
        event.target.parentElement.parentElement.remove();
        dispatch({type: 'delete', locationToDelete: props.name})


    }
    return <button onClick={handleDelete}>x</button>;
}
//todo li instead of td
export default DeleteLocation;