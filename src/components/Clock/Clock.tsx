import {useEffect, useState} from "react";

type PropsType = {

}

export const Clock: React.FC<PropsType> = (props) => {

    const [data,setDate] = useState(new Date())


    useEffect(()=> {
       const IntervalID =  setInterval(()=>{
        setDate(new Date());
    },1000)
    return ()=> clearInterval(IntervalID)
    },[])

    const get2digitsString = (num:number) => num < 10 ? "0" + num : num

    const hoursString = get2digitsString(data.getHours())
    const minutesString = get2digitsString(data.getMinutes())
    const secondsString = get2digitsString(data.getSeconds())

    return <div>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </div>
}



