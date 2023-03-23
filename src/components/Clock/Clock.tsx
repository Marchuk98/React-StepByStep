import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?:"digital" | "analog"
}



export const Clock: React.FC<PropsType> = ({mode}) => {

    const [data, setDate] = useState(new Date())


    useEffect(() => {
        const IntervalID = setInterval(() => {
            setDate(new Date());
        }, 1000)
        return () => clearInterval(IntervalID)
    }, [])

    let view;

    switch (mode){
        case 'analog': {
            view = <AnalogClockView data={data}/>
        }
        break;
        case 'digital':
        default:
            view =  <DigitalClockView data={data}/>
    }

    return(
        <div>
            {view}
        </div>
       )
}


export type ClockViewPropsType = {
    data:Date
}




