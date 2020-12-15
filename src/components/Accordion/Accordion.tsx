import React, {useState} from 'react';

// ---TYPES
type AccordionPropsType = {
    titleValue: string;
}
type AccordionTitlePropsType = {
    title: string;
}
// TYPES---

export function Accordion(props: AccordionPropsType) {

    let [toggle, setToggle] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={ () => {setToggle(!toggle)}}>Toggle</button>
            { toggle && <AccordionBody/> }
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
