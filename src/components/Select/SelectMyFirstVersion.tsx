import React, {DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction} from "react";
import {selectValueType} from "../../App";

type itemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    selectedValue: selectValueType
    collapsed: boolean
    onChange: (value: any) => void
    items: itemsType[]
    selectValue: Dispatch<SetStateAction<selectValueType>>
}

type SelectMenuPropsType = {
    selectedValue: selectValueType
    collapsed: boolean
    onChange: (value: any) => void
    items: itemsType[]
    selectValue: Dispatch<SetStateAction<selectValueType>>
}

export function SelectMyFirstVersion(props: SelectPropsType) {
    return (
        <div>
            <h3 onClick={() => {
                props.onChange(!props.collapsed)
            }}>{props.selectedValue.title}</h3>
            {!props.collapsed && <SelectMenu
                selectedValue={props.selectedValue}
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
            {props.items.map(i => <div key={props.selectedValue.value} onClick={() => {
                props.selectValue(i);
                props.onChange(!props.collapsed)
            }}>{i.title}</div>)}
        </div>
    )
}