import type {Meta, StoryObj} from "@storybook/react";
import {Select} from "./Select";
import {useState} from "react";


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

const WithValueWithHooks = () => {
    const [value, setValue] = useState("2")

    return <>
        <Select value={value} onChange={setValue} items={[
            {value: "1", title: "Smth1"},
            {value: "2", title: "Smth2"},
            {value: "3", title: "Smth3"}
        ]}/>
    </>
}

export const BaseExampleWithValue: Story = {
    render: () => <WithValueWithHooks/>
}

const WithoutValueWithHooks = () => {
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

export const BaseExampleWithoutValue: Story = {
    render: () => <WithoutValueWithHooks/>
}
