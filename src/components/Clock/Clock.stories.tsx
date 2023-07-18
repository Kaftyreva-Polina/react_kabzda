import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Clock} from "./Clock";
import {Clock1} from "./Clock1";


const meta: Meta = {
    title: "clock",
    component: Clock,
    tags: ["autodocs"]
}

export default meta;
type Story = StoryObj<typeof Clock>;

export const ClockExample: Story = {
    render: () => <Clock />
}


export const BaseExample = () => {
    return <Clock1 />
}

