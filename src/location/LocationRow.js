import DeleteLocation from "./DeleteLocation";

function LocationRow(props) {

    const handleClick = () => {
        props.setSelectedLocation(props.oneLocation.name)
    }

    return (
        // <p className={'locationItem'}  >{props.oneLocation.name}
        <p>
            <span className={'locationItem'} onClick={handleClick}>{props.oneLocation.name}</span>
            {props.showDelete ? <DeleteLocation name={props.oneLocation.name}/> : ""}
        </p>
    );
}

export default LocationRow;