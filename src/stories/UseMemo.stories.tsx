import {Meta, StoryObj} from "@storybook/react";
import React, {useMemo, useState} from "react";


const meta: Meta = {
    title: "useMemo",
    tags: ["autodocs"]
}

export default meta;
type Story = StoryObj;

const DifficultCountingExampleWithHooks = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);


    let resultB = 1;

    let resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])

    for (let j = 1; j <= b; j++) {
        resultB = resultB * j;
    }

    return <>
        <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input type="text" value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}
export const DifficultCountingExample: Story = {
    render: () => <DifficultCountingExampleWithHooks/>
}


const SecretUsers = (props: { users: string[] }) => {
    console.log("USERS SECRET")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(SecretUsers);

const HelpsToReactMemoWithHooks = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Alfred", "Georg", "Nikolai"]);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])


    const addUser = () => {
        const newUsers = [...users, "Svetlana" + new Date().getTime()];
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}
export const HelpsToReactMemo: Story = {
    render: () => <HelpsToReactMemoWithHooks/>
}