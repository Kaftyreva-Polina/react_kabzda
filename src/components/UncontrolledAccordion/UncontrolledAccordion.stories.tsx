import type {Meta, StoryObj} from "@storybook/react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";


const meta: Meta<typeof UncontrolledAccordion> = {
    title: "UncontrolledAccordion",
    component: UncontrolledAccordion,
    parameters: {
        action: "Accordion mode change event fired"
    }
};

export default meta;
type Story = StoryObj<typeof UncontrolledAccordion>;

export const ModeChanging: Story = {
    args: {
        titleValue: "Menu",
    },
};



