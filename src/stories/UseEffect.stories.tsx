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


//api.getUsers().then('')
//setInterval
//indexedDB
//document.getElementId
//document.title = "Users"