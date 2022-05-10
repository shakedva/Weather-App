import DeleteLocation from "./DeleteLocation";

function LocationRow(props)
{

    const handleClick = () =>
    {
        props.setSelectedLocation(props.oneLocation.name)
        props.setIsLocationChanged(true)
    }


    return (
        <p>
            {/*{locationClickability}*/}
            <button className={`locationItem locationItem${props.showDelete}`} onClick={handleClick}>{props.oneLocation.name}</button>
            {/*{props.showDelete ? <button className={'locationItem dis'} onClick={handleClick}>{props.oneLocation.name}</button>*/}
            {/*                  :<button className={'locationItem'} onClick={handleClick}>{props.oneLocation.name}</button>}*/}
            {props.showDelete ? <DeleteLocation name={props.oneLocation.name}/> : ""}

        </p>
    );
}

export default LocationRow;