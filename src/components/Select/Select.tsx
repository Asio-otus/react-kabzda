import React, {DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction} from "react";
import {selectValueType} from "../../App";

type itemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: selectValueType
    collapsed: boolean
    onChange: (value: any) => void
    items: itemsType[]
    selectValue: Dispatch<SetStateAction<selectValueType>>
}

type SelectMenuPropsType = {
    collapsed: boolean
    onChange: (value: any) => void
    items: itemsType[]
    selectValue: Dispatch<SetStateAction<selectValueType>>
}

export function Select(props: SelectPropsType) {
    return (
        <div>
            <div onClick={() => {
                props.onChange(!props.collapsed)
            }}>{props.value.title}</div>
            {!props.collapsed && <SelectMenu
                items={props.items}
                selectValue={props.selectValue}
                onChange={props.onChange}
                collapsed={props.collapsed}/>}
        </div>
    )
}

function SelectMenu(props: SelectMenuPropsType) {

    return (
        <div>
            {props.items.map(i => <div onClick={() => {
                props.selectValue(i);
                props.onChange(!props.collapsed)
            }}>{i.title}</div>)}
        </div>
    )
}