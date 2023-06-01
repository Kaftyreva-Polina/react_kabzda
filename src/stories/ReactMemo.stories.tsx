import React, {useState} from "react";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta = {
    title: "React.memo demo",
    tags: ["autodocs"]
}

export default meta;
type Story = StoryObj;

const NewMessagesCounterInitial = (props: { count: number }) => {
    console.log("COUNT")
    return <div>{props.count}</div>
}

const NewMessagesCounter = React.memo(NewMessagesCounterInitial);

const SecretUsers = (props: { users: string[] }) => {
    console.log("USERS")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(SecretUsers);

const Example = () => {
    console.log("Smth was changed")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Alfred", "Georg", "Nikolai"]);

    const addUser = () => {
        const newUsers = [...users, "Svetlana" + new Date().getTime()];
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
export const Example1: Story = {
    render: () => <Example/>
}