import type {Meta, StoryObj} from "@storybook/react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


const meta: Meta<typeof UncontrolledOnOff> = {
    title: "UncontrolledOnOff",
    component: UncontrolledOnOff,
    argTypes: {onChange: {action: "on or off clicked"}},
};

export default meta;
type Story = StoryObj<typeof UncontrolledOnOff>;

export const OnMode: Story = {
    args: {
        defaultOn: true
    },
};

export const OffMode: Story = {
    args: {
        defaultOn: false
    },
};

// export const BugMode for UseEffect


