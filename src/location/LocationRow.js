import DeleteLocation from "./DeleteLocation";

/**
 * This component is responsible to display one location from the locations list
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function LocationRow(props) {

    /**
     * this function saves the location that was last clicked
     */
    const handleClick = () => {
        props.setSelectedLocation(props.oneLocation.name)
        props.setIsLocationChanged(true)
    }

    return (
        <p>
            <button className={`locationItem locationItem${props.showDelete}`}
                    onClick={handleClick}>{props.oneLocation.name}</button>
            {props.showDelete ? <DeleteLocation name={props.oneLocation.name}/> : ""}
        </p>
    );
}

export default LocationRow;