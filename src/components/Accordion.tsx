import React from 'react';

// ---TYPES
type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}

type AccordionTitlePropsType = {
    title: string;
}
// TYPES---

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            { !props.collapsed && <AccordionBody/> }
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
