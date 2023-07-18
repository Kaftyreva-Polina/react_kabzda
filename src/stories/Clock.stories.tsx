import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Clock} from "../components/Clock/Clock";


const meta: Meta = {
    title: "clock",
    component: Clock,
    tags: ["autodocs"]
}

export default meta;
type Story = StoryObj<typeof Clock>;

export const Clock1: Story = {
    render: () => <Clock />
}


