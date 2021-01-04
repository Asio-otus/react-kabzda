import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {RatingUncontrolled} from "./RatingUncontrolled";

export default {
    title: 'RatingUncontrolled',
    component: RatingUncontrolled
}

export const RatingZero = () => <RatingUncontrolled defaultValue={0} /> // x=>x Это заглушка (функция которая ничего не возвращает). Нужна, так как Rating требует onClick а нам для данной story он не нужен.
export const RatingOne = () => <RatingUncontrolled defaultValue={1} />
export const RatingTwo = () => <RatingUncontrolled defaultValue={2} />
export const RatingThree = () => <RatingUncontrolled defaultValue={3} />
export const RatingFour = () => <RatingUncontrolled defaultValue={4} />
export const RatingFive = () => <RatingUncontrolled defaultValue={5} />