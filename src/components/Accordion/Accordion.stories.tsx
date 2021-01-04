import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action("accordion mod change event fired")

export const AccordionCollapsed = () => <Accordion titleValue={'title'} collapsed={true} onClick={callback} />
export const AccordionOpen = () => <Accordion titleValue={'title'} collapsed={false} onClick={callback} />

export const AccordionToggle = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'title'} collapsed={value} onClick={setValue} />
}