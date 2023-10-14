import {useState} from 'react'
import TempControl from "./components/TempControl";

export default function App(){
    const [temp, setTemp] = useState(10)
    const [tempColor, setTempColor]= useState('cold')


    function increaseTemp(){
        const newTemp = temp +1
        if(newTemp >= 15){
            setTempColor('hot')
        }
       setTemp(newTemp)
        
      
    }

    function decreaseTemp(){
        const newTemp = temp -1
        if(newTemp < 15){
            setTempColor('cold')
        }
       setTemp(newTemp)
        
      
    }

    return(
        <div className="temp-control">
            <TempControl  tempValue={temp} increaseTemp={increaseTemp} decreaseTemp={decreaseTemp} tempColor={tempColor}/>
        </div>
    )
}