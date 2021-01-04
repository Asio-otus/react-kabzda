import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'Input'
}

export const UncontrolledInput = () => <input/>

export const UncontrolledInputWithTrackableValue = () => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <><input onChange={onChange}/> - {value} </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}/> - <button onClick={save}>save</button> saved value: {value} </>
}

export const ControlledInput = () => {
    const [value, setValue] = useState<string>('')

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        let currentValue = event.currentTarget.value
        setValue(currentValue)
    }

    return (
        <div>
            <input value={value} onChange={inputChange}/>
            <div>{value}</div>
        </div>
    )
}

export const ControlledCheckbox = () => {
    const [state, setState] = useState<boolean>(true)

    const click = () => {
        setState(!state)
    }

    return (
        <div>
            <input checked={state} type={'checkbox'} onClick={click} />
            <div>{state}</div>
        </div>
    )
}

export const ControlledSelect = () => {
    const [state, setState] = useState<string | undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        let currentValue = e.currentTarget.value
        setState(currentValue)
    }

    return (
        <div>
            <select value={state} onChange={onChange}>
                <option>none</option>
                <option value={'1'}>One</option>
                <option value={'2'}>Two</option>
                <option value={'3'}>Three</option>
            </select>
            <div>{state}</div>
        </div>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'custom text'}/>