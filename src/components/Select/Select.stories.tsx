import type {Meta, StoryObj} from "@storybook/react";
import {Select} from "./Select";
import React, {useState} from "react";


const meta: Meta<typeof Select> = {
    title: "Select",
    component: Select,
    tags: ["autodocs"],
    argTypes: {
        onChange: {action: "Value changed"},
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

const WithValueWithHooksInitial = () => {
    const [value, setValue] = useState("2")

    return <>
        <Select value={value} onChange={setValue} items={[
            {value: "1", title: "Smth1"},
            {value: "2", title: "Smth2"},
            {value: "3", title: "Smth3"}
        ]}/>
    </>
}

const WithValueWithHooks = React.memo(WithValueWithHooksInitial);
export const BaseExampleWithValue: Story = {
    render: () => <WithValueWithHooks/>
}

const WithoutValueWithHooksInitial = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select value={value} onChange={setValue} items={[
            {value: "1", title: "Smth1"},
            {value: "2", title: "Smth2"},
            {value: "3", title: "Smth3"}
        ]
        }/>
    </>
}

const WithoutValueWithHooks = React.memo(WithoutValueWithHooksInitial);

export const BaseExampleWithoutValue: Story = {
    render: () => <WithoutValueWithHooks/>
}
