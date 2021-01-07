import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action("accordion mod change event fired")
const cnClickCallback = action("some item has been clicked")

export const AccordionCollapsed = () => <Accordion
    titleValue={'title'}
    collapsed={true}
    onChange={callback}
    onClick={cnClickCallback}
    items={[]}/>

export const AccordionOpen = () => <Accordion
    titleValue={'title'}
    collapsed={false}
    onChange={callback}
    onClick={cnClickCallback}
    items={[{title: 'Dymich', value: 1}, {title: 'Valera', value: 2}, {title: 'Artiom', value: 3}, {title: 'Victor', value: 4}]}/>

export const AccordionToggle = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={'title'}
        collapsed={value}
        onChange={setValue}
        onClick={(id) => {
            alert(`user with ID: ${id}, should be happy`)
        }}
        items={[{title: 'Dymich', value: 1}, {title: 'Valera', value: 2}, {title: 'Artiom', value: 3}, {title: 'Victor', value: 4}]}/>
}