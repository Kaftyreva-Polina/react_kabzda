import type {Meta, StoryObj} from "@storybook/react";
import {Accordion} from "./Accordion";
import React, {useState} from "react";


const meta: Meta<typeof Accordion> = {
    title: "Accordion",
    component: Accordion,
    tags: ["autodocs"],
    argTypes: {
        onChange: {action: "Accordion mode change event fired"},
        onClick: {action: "Some item was clicked"}
    },
};

const items = [
    {title: "Louis", value: 1},
    {title: "Philip", value: 2},
    {title: "Andrei", value: 3},
    {title: "William", value: 4},
    {title: "James", value: 5}
]

export default meta;
type Story = StoryObj<typeof Accordion>;

export const CollapsedMode: Story = {
    args: {
        titleValue: "Menu",
        collapsed: true,
        items: []
    },
};

export const UncollapsedMode: Story = {
    args: {
        titleValue: "Users",
        collapsed: false,
        items: items
    },
};

const AccordionWithHooksInitial = () => {
    let [value, setValue] = useState(false)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items={items} onClick={(value) => {
        alert(`user with ID ${value} should be happy`)
    }}/>
}

const AccordionWithHooks = React.memo(AccordionWithHooksInitial);
export const AccordionChange: Story = {
    render: () => <AccordionWithHooks/>
}


