import type {Meta, StoryObj} from "@storybook/react";
import {Accordion} from "./Accordion";
import {useState} from "react";


const meta: Meta<typeof Accordion> = {
    title: "Accordion",
    component: Accordion,
    argTypes: {onChange: {action: "Accordion mode change event fired"}},
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const CollapsedMode: Story = {
    args: {
        titleValue: "Menu",
        collapsed: true
    },
};

export const UncollapsedMode: Story = {
    args: {
        titleValue: "Users",
        collapsed: false,
    },
};

const AccordionWithHooks = () => {
    let [value, setValue] = useState(false)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}/>
}

export const AccordionChange: Story = {
    render: () => <AccordionWithHooks/>
}


