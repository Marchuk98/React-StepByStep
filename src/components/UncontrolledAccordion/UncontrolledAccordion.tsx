import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    let [state, dispatch] = useReducer(reducer, {collapsed:false})


    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody title={props.titleValue}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    title: string
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion