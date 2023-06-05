import {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import styles from "../components/Select/Select.module.css";
import {Select} from "../components/Select/Select";


const meta: Meta = {
    title: "useMemoWithSelect",
    tags: ["autodocs"]
}

export default meta;
type Story = StoryObj;

type itemsPropsType = {
    id: number
    value: string
    country: string
    title: string
    population: number
}
const itemsForSelect: itemsPropsType[] = [
    {id: 1, value: "1", country: "Russia", title: "Moscow", population: 13104177},
    {id: 2, value: "2", country: "France", title: "Lille", population: 232787},
    {id: 3, value: "3", country: "Russia", title: "Norilsk", population: 174453},
    {id: 4, value: "4", country: "France", title: "Strasbourg", population: 290576},
    {id: 4, value: "5", country: "Norway", title: "Narvik", population: 14148},
    {id: 4, value: "6", country: "Norway", title: "Trondheim", population: 212660},
    {id: 4, value: "7", country: "Russia", title: "Khanty-Mansiysk", population: 109745},
    {id: 4, value: "8", country: "Norway", title: "Oslo", population: 709037},
    {id: 4, value: "9", country: "France", title: "Marseille", population: 870321}
]

const UseMemoWithSelect = () => {

    const [counter, setCounter] = useState(0)


    const [value1, setValue1] = useState("2")
    const [value2, setValue2] = useState("5")
    const [value3, setValue3] = useState("1")


    const itemsFilteredByCountry = itemsForSelect.filter(el => el.country === "France");
    const itemsFilteredByLetter = itemsForSelect.filter(el => el.title.toLowerCase().indexOf("n") > -1);
    const itemsFilteredByPopulation = itemsForSelect.filter(el => el.population > 400000);

    const onClickHandler = () => setCounter(counter + 1)
    return <>
        <div>
            {counter}
            <button onClick={onClickHandler}>add count</button>
        </div>
        <div className={styles.div}>
            <Select className={styles.child} value={value1} onChange={setValue1} items={itemsFilteredByCountry}/>
            <Select className={styles.child} value={value2} onChange={setValue2} items={itemsFilteredByLetter}/>
            <Select className={styles.child} value={value3} onChange={setValue3} items={itemsFilteredByPopulation}/>
        </div>
    </>

}

export const HelpExample: Story = {
    render: () => <UseMemoWithSelect/>
}


