import React, {useEffect, useState} from "react";

export default {
    title: "UseEffect demo"
}

export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample')
    useEffect(() => {
        console.log('UseEffect every render');
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('UseEffect only first render (componentDidMounth)');
        document.title = counter.toString();
    },[]);

    useEffect(() => {
        console.log('UseEffect first render and every change counter');
        document.title = counter.toString();
    },[counter]);

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
}

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(new Date())

    console.log('SetTimeoutExample')

    // useEffect(() => {
    //     setTimeout(()=> {
    //         console.log("setTimeout")
    //         document.title = counter.toString()
    //     },1000)
    // },[]);

    useEffect(() => {
        const Interval = setInterval(()=> {
            setCounter(new Date());
        },1000);
        return () => clearInterval(Interval);
    },[]);

    return <>
            <h1>Clock</h1>
        <p>{counter.toLocaleTimeString()}</p>
    </>
}


