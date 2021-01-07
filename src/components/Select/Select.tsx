import React from "react";

type itemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: string
    onChange: (value: any) => void
    items: itemsType[]
}

export function Select(props: SelectPropsType) {
    return (
        <div>
            <div>{}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}