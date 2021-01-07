import React from 'react';

// Types
type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (toggle: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}
type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onChange: (toggle: boolean) => void
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

// Accorodion FC
export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
                collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ () => {
            props.onChange(!props.collapsed)
        }}> {props.title} </h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (<ul>
        {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
    </ul>)
}