import "./DevStyles.css";

function DevData(props){
    return(
        <div className="d-card">
            <div className="d-image">
                <img src={props.image} alt="dimage"/>
            </div>
            <h4>{props.heading}</h4>
            <p2>{props.text}</p2>
        </div>
    )
}

export default DevData;