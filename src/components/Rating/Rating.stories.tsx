import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating
}

export const RatingZero = () => <Rating value={0} onClick={x => x}/> // x=>x Это заглушка (функция которая ничего не возвращает). Нужна, так как Rating требует onClick а нам для данной story он не нужен.
export const RatingOne = () => <Rating value={1} onClick={x => x}/>
export const RatingTwo = () => <Rating value={2} onClick={x => x}/>
export const RatingThree = () => <Rating value={3} onClick={x => x}/>
export const RatingFour = () => <Rating value={4} onClick={x => x}/>
export const RatingFive = () => <Rating value={5} onClick={x => x}/>
export const RatingChange = () => {
    const [rating, setRating] = useState<RatingValueType>(5);
    return <Rating value={rating} onClick={setRating} />
}