import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'Input',
};


export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <><input onChange={onChange}/> - {value}</>
}

export const GetValueOfcontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value : {value} </>
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>
