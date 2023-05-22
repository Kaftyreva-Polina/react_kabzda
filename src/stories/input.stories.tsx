import type {Meta, StoryObj} from "@storybook/react";
import {ChangeEvent, useRef, useState} from "react";

const Input = () => <input/>
const meta: Meta<typeof Input> = {
    title: "Example/Input",
    tags: ["autodocs"],
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

const ControlledInputWithHooks = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}
export const ControlledInput: Story = {
    render: () => <ControlledInputWithHooks/>
}

const ControlledCheckboxWithHooks = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}
export const ControlledCheckbox: Story = {
    render: () => <ControlledCheckboxWithHooks/>
}

const ControlledSelectWithHooks = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    debugger
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        debugger
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Moscow</option>
        <option value={"2"}>Saint-Petersburg</option>
        <option value={"3"}>Kaliningrad</option>
    </select>
}
export const ControlledSelect: Story = {
    render: () => <ControlledSelectWithHooks />
}

export const ControlledInputWithFixedValue: Story = {
    render: () => <input value={"Quelque chose d'amusant"}/>
}