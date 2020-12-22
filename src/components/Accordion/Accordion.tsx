import React from 'react';

type AccordionPropsType = {
    titleValue: string
    toggle: boolean
    onClick: (toggle: boolean) => void
}
type AccordionTitleProps = {
    title: string
    toggle: boolean
    onClick: (toggle: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} toggle={props.toggle}/>
            {!props.toggle && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitleProps) {
    return (
        <h3 onClick={ () => {
            props.onClick(!props.toggle)
        }}> {props.title} </h3>
    )
}

function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}