
export default function TempControl(props){

    
    return(
        <div className={`temp-circle ${props.tempColor}`}  >
        <h1>{props.tempValue}°C</h1>
        <div className="temp-change">
            <button className="temp-btn add" onClick={props.increaseTemp}>+</button>
            <button className="temp-btn minus" onClick={props.decreaseTemp}>-</button>
        </div>
        </div>
    )
}