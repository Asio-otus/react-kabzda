import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString();
    })
    useEffect(() => {
        console.log("useEffect only on the first render (componentDidMount)")
        document.title = counter.toString();
    }, [])
    useEffect(() => {
        console.log("useEffect first render and on every counter state change")
        document.title = counter.toString();
    }, [counter])

    return <>
        <div>Hello, {counter} {fake}</div>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}

export const SetIntervalExample = () => {

    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('setInterval')
            setCounter(state => state + 1)
        }, 1000)

        // ComponentWillUnmount
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return <>
        <div>Hello, counter: {counter}</div>
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component rendered with: ' + counter)

    useEffect(() => {
        console.log('Effect occurred: ' + counter)

        // ComponentWillUnmount
        return () => {
            console.log('Reset effect: ' + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        <div>Hello, counter: {counter}</div>
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with: ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        // ComponentWillUnmount
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        <div>Typed text: {text}</div>
    </>
}

export const SetTimeoutExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with: ' + text)

    useEffect(() => {

        const timeoutID = setTimeout(() => {
            console.log('Timeout expired')
            setText('3 seconds passed')
        }, 3000)

        // ComponentWillUnmount
        return () => {
            clearTimeout(timeoutID)
        }
    }, [text])

    return <>
        <div>Typed text: {text}</div>
    </>
}