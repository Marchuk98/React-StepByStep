import React, {useState} from "react";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
};


export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <>

        <Select value={value}
                onChange={setValue}
                items={[
                    {title: 'None', value: '0'},
                    {title: 'Alex', value: '1'},
                    {title: 'Vika', value: '2'}
                ]}/>
    </>
}

export const WithoutValue = () =>{
    const [value, setValue] = useState(null)
   return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {title: 'None', value: '0'},
                {title: 'Alex', value: '1'},
                {title: 'Vika', value: '2'}
            ]}/>
    </>
}
