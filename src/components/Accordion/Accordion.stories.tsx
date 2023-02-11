import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode event fired');
const onclickCallback = action('some item was clicked');

export const MenuCollapsedMode = () => <Accordion
    titleValue={"Menu"}
    collapsed={true}
    onChange={callback}
    items={[]}
    onClick={onclickCallback}
/>

export const UserUncollapsedMode = () => <Accordion
    titleValue={"Users"}
    collapsed={false}
    onChange={callback}
    items={[
        {title: "QQ", value: 1},
        {title: "WWW", value: 2},
        {title: "RRR", value: 3},
    ]}
    onClick={onclickCallback}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title: "QQ", value: 1},
            {title: "WWW", value: 2},
            {title: "RRR", value: 3},
        ]}
        onClick={(id)=>{alert(`user with ID ${id} should be happy`)}}
    />
}