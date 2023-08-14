import React, {useEffect, useState} from "react"; //1
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta = {
    title: "useEffect demo",
    tags: ["autodocs"]
}

export default meta;
type Story = StoryObj;


const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fakeCounter, setFakeCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])


    return (<>
        Hello, {counter} {fakeCounter}
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
        <button onClick={() => setFakeCounter(fakeCounter + 1)}>fakeCounter+</button>
    </>)

}
export const SimpleExample1: Story = {
    render: () => <SimpleExample/>
}

const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fakeCounter, setFakeCounter] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => {
        const intervalId = setTimeout(() => {
            console.log("setTimeoutExampleUseEffect")
            document.title = counter.toString()
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [counter])

    return (<>
        Hello, {counter} {fakeCounter}
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
        <button onClick={() => setFakeCounter(fakeCounter + 1)}>fakeCounter+</button>
    </>)
}

export const SetTimeoutExample1: Story = {
    render: () => <SetTimeoutExample/>
}


const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SetIntervalExample")

    useEffect(() => {
        let intervalId = setInterval(() => {
            console.log("tick")
            setCounter((state) => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (<>
        Hello, counter: {counter}
    </>)
}

export const setIntervalExample1: Story = {
    render: () => <SetIntervalExample/>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component rendered");

    useEffect(() => {
        console.log("Effect occurred" + counter)

        return () => {
            console.log("Reset effect")
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)
    return <>
        {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample1 = () => {
    const [text, setText] = useState("")

    console.log("Component rendered with" + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [])

    return <>
        Typed text: {text}
    </>
}

export const KeysTrackerExample2 = () => {
    const [text, setText] = useState("")

    console.log("Component rendered with" + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample2 = () => {
    const [text, setText] = useState("")

    console.log("Component rendered with" + text)

    useEffect(() => {
        const intervalId = setTimeout(() => {
            console.log("Timeout expired")
            setText("3 seconds passed")
        }, 3000)
        return () => {
            clearInterval(intervalId)
        }
    }, [text])

    return <>
        text: {text}
    </>
}

