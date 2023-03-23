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

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)

    useEffect(() => {

            const handler = (e: KeyboardEvent) => {
                console.log(e.key)
                setText(text + e.key)
            }

            window.addEventListener('keypress', handler)

            return () => {
                console.log('RESET EFFECT')
                window.removeEventListener('keypress', handler)
            }

        }, [text]
    )

    return <>
        Typed text: {text}
    </>
}


