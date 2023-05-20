import type {Meta, StoryObj} from "@storybook/react";
import {UncontrolledRating} from "./UncontrolledRating";



const meta: Meta<typeof UncontrolledRating> = {
    title: "UncontrolledRating",
    component: UncontrolledRating,
    argTypes: {onChange: {action: "rating was changed inside component"}},
};

export default meta;
type Story = StoryObj<typeof UncontrolledRating>;

export const EmptyUncontrolledRating: Story = {
    args: {
        defaultValue: 0,
    },
};

export const UncontrolledRating1: Story = {
    args: {
        defaultValue: 1,
    },
};

export const UncontrolledRating2: Story = {
    args: {
        defaultValue: 2,
    },
};

export const UncontrolledRating3: Story = {
    args: {
        defaultValue: 3,
    },
};

export const UncontrolledRating4: Story = {
    args: {
        defaultValue: 4,
    },
};

export const UncontrolledRating5: Story = {
    args: {
        defaultValue: 5,
    },
};

