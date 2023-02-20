import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

function UncontrolledAccordionMemo(props: AccordionPropsType) {
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

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleMemo(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>-- {props.title} --</h3>
}

export const AccordionTitle = React.memo(AccordionTitleMemo)

type AccordionBodyPropsType = {
    title: string
}

function AccordionBodyMemo(props: AccordionBodyPropsType) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export const AccordionBody = React.memo(AccordionBodyMemo)

export default UncontrolledAccordion