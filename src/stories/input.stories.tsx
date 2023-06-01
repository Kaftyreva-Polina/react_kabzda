import React from "react";
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

const InputWithUseStateHookInitial = () => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
    return <>
        <input type="text" onChange={onChange}/> - {value}
    </>
}

const InputWithUseStateHook = React.memo(InputWithUseStateHookInitial);
export const TrackValueOfUncontrolledInput: Story = {
    render: () => <InputWithUseStateHook/>
}

const InputWithButtonAndRefInitial = () => {
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

const InputWithButtonAndRef = React.memo(InputWithButtonAndRefInitial);

export const GetValueOfUncontrolledInputByButtonPress: Story = {
    render: () => <InputWithButtonAndRef/>
}

const ControlledInputWithHooksInitial = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

const ControlledInputWithHooks = React.memo(ControlledInputWithHooksInitial);
export const ControlledInput: Story = {
    render: () => <ControlledInputWithHooks/>
}

const ControlledCheckboxWithHooksInitial = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

const ControlledCheckboxWithHooks = React.memo(ControlledCheckboxWithHooksInitial);
export const ControlledCheckbox: Story = {
    render: () => <ControlledCheckboxWithHooks/>
}

const ControlledSelectWithHooksInitial = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Moscow</option>
        <option value={"2"}>Saint-Petersburg</option>
        <option value={"3"}>Kaliningrad</option>
    </select>
}

const ControlledSelectWithHooks = React.memo(ControlledSelectWithHooksInitial);
export const ControlledSelect: Story = {
    render: () => <ControlledSelectWithHooks/>
}

export const ControlledInputWithFixedValue: Story = {
    render: () => <input value={"Quelque chose d'amusant"}/>
}