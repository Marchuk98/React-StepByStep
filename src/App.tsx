import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Select} from "./components/Select/Select";



function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    const [select , setSelect] = useState(false)

    let items = [
        {title: 'None', value: '0'},
        {title: 'Alex', value: '1'},
        {title: 'Vika', value: '2'},
        {title: 'Yana', value: '3'},
        {title: 'Natasha', value: '4'}];


    const onClick = (name:string) => {
        alert(`${name} ${'will be happy!'}`)
    }

    return (
        <div className={"App"}>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)} items={items} onClick={onClick}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledRating onChange={()=>{}}/>
            <Select value={select} onChange={setSelect} items={items}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;