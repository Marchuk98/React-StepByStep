import React,{useState} from "react";

import {Rating, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";


export default {
    title:'Rating stories',
    component:Rating,
};

const callBack = action("Change rating");

export const Rating1 = () => <Rating value={1} onClick={callBack}/>
export const Rating2 = () => <Rating value={2} onClick={callBack}/>
export const Rating3 = () => <Rating value={3} onClick={callBack}/>
export const Rating4 = () => <Rating value={4} onClick={callBack}/>
export const Rating5 = () => <Rating value={5} onClick={callBack}/>

export const RatingChanging = () => {

    const [rating, setRating] = useState<RatingValueType>(0);
    return <Rating value={rating} onClick={setRating}/>
}


