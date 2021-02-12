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
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => {
        setInterval(() => {
            console.log("setInterval")
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    // setTimeout(() => {
    //     console.log("setTimeout")
    //     document.title = counter.toString()
    // }, 1000)

    return <>
        Hello, counter: {counter}
        {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
    </>
}