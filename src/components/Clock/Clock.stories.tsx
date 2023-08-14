import React from "react";
import {Meta} from "@storybook/react";
import {Clock} from "./Clock";


const meta: Meta = {
    title: "Clock",
    component: Clock,
    tags: ["autodocs"]
}

export default meta;

export const BaseAnalogExample = () => {
    return <Clock mode="analog"/>
}

export const BaseDigitalExample = () => {
    return <Clock mode="digital"/>
}