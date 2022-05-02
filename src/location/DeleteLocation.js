import {useLocation} from '../contexts/LocationContext'

function DeleteLocation(props) {
    const {dispatch} = useLocation();

    const handleDelete = () => {
        alert(props.name)
        dispatch({type: 'delete', locationToDelete: props.name})
    }
    return (
        <button onClick={handleDelete}>
            x
        </button>
    )
}
//todo map instead of for each
export default DeleteLocation;