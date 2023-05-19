import type { Meta, StoryObj } from '@storybook/react';
import {Rating} from "./Rating";




const meta: Meta<typeof Rating> = {
    title: 'Rating',
    component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const EmptyRating: Story = {
    args: {
        value: 0,
    },
};

export const Rating1: Story = {
    args: {
        value: 1,
    },
};

export const Rating2: Story = {
    args: {
        value: 2,
    },
};

export const Rating3: Story = {
    args: {
        value: 3,
    },
};

export const Rating4: Story = {
    args: {
        value: 4,
    },
};

export const Rating5: Story = {
    args: {
        value: 5,
    },
};

