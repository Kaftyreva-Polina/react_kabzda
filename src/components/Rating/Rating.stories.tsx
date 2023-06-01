import type {Meta, StoryObj} from "@storybook/react";
import {Rating, RatingValueType} from "./Rating";
import React, {useState} from "react";


const meta: Meta<typeof Rating> = {
    title: "Rating",
    component: Rating,
    tags: ["autodocs"],
    argTypes: {onClick: {action: "rating was changed"}},
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

const RatingWithHooksInitial = () => {
    let [rating, setRating] = useState<RatingValueType>(0)

    return <Rating value={rating} onClick={setRating}/>
}

const RatingWithHooks = React.memo(RatingWithHooksInitial);

export const RatingChange: Story = {
    render: () => <RatingWithHooks/>
}

