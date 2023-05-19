import type {Meta, StoryObj} from "@storybook/react";
import {OnOff} from "./OnOff";
import {useState} from "react";


const meta: Meta<typeof OnOff> = {
    title: "OnOff",
    component: OnOff,
    argTypes: {onChange: {action: "on or off clicked"}},
};

export default meta;
type Story = StoryObj<typeof OnOff>;

export const OnMode: Story = {
    args: {
        on: true,
    },
};

export const OffMode: Story = {
    args: {
        on: false,
    },
};

const OnOffWithHooks = () => {
    let [mode, setMode] = useState<boolean>(true)

    return <OnOff on={mode} onChange={setMode}/>
}

export const ModeChanging: Story = {
    render: () => <OnOffWithHooks/>
}
