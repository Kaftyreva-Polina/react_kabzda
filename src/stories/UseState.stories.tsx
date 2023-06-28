import React, {useState} from "react"; //1
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta = {
    title: "useState demo",
    tags: ["autodocs"]
}

export default meta;
type Story = StoryObj;


function generateData() {
    console.log("generate Date")
    //difficult counting
    return 1
}

const Example = () => {
    console.log("Example")
    // const initialValue = useMemo(generateDate, [])
    const [counter, setCounter] = useState<number>(generateData);//[1, function(newValue ){}]

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}
export const Example1: Story = {
    render: () => <Example/>
}