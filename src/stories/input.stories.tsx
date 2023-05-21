import type {Meta, StoryObj} from "@storybook/react";
import {ChangeEvent, useRef, useState} from "react";

const Input = () => <input/>
const meta: Meta<typeof Input> = {
    title: "Example/Input",
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const UncontrolledInput: Story = {
    render: () => <input type="text"/>
}

const InputWithUseStateHook = () => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
    return <>
        <input type="text" onChange={onChange}/> - {value}
    </>
}
export const TrackValueOfUncontrolledInput: Story = {
    render: () => <InputWithUseStateHook/>
}

const InputWithButtonAndRef = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actualValue {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress: Story = {
    render: () => <InputWithButtonAndRef/>
}

export const ControlledInputWithFixedValue: Story = {
    render: () => <input value={"Quelque chose d'amusant"}/>
}