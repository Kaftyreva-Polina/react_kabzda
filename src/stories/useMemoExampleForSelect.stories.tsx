import {Meta, StoryObj} from "@storybook/react";
import React, {useMemo, useState} from "react";
import styles from "../components/Select/Select.module.css";
import {Select, SelectPropsType} from "../components/Select/Select";


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

// Дальнейшее повоторение кода сделано исключительно с целью продемонстрировать работу React.memo и useMemo
//  Further repetition of the code is done solely for the purpose of demonstrating the work of React.memo and useMemo
const SelectItems1WithoutHOCMemo = (props: SelectPropsType) => {
    console.log("Select1 was rendered")

    return <Select value={props.value} onChange={props.onChange} items={props.items}/>
}

const SelectItems1 = React.memo(SelectItems1WithoutHOCMemo)
const SelectItems2WithoutHOCMemo = (props: SelectPropsType) => {
    console.log("Select2 was rendered")

    return <Select value={props.value} onChange={props.onChange} items={props.items}/>
}

const SelectItems2 = React.memo(SelectItems2WithoutHOCMemo);

const SelectItem3WithoutHOCMemo = (props: SelectPropsType) => {
    console.log("Select3 was rendered")

    return <Select value={props.value} onChange={props.onChange} items={props.items}/>
}

const SelectItems3 = React.memo(SelectItem3WithoutHOCMemo);

const Example = () => {
    const [value1, setValue1] = useState("2");
    const [value2, setValue2] = useState("5");
    const [value3, setValue3] = useState("1");
    const [counter, setCounter] = useState(0);

    const filteredItemsByCountry = useMemo(() => {
        return itemsForSelect.filter((el => el.country === "France"))
    }, [itemsForSelect])

    const filteredItemsByLetter = useMemo(() => {
        return itemsForSelect.filter(el => el.title.toLowerCase().indexOf("n") > -1);
    }, [itemsForSelect])


    const filteredItemsByPopulation = useMemo(() => {
        return itemsForSelect.filter(el => el.population > 400000)
    }, [itemsForSelect])

    return <>
        <div className={styles.div}>
            <SelectItems1 className={styles.child} value={value1} onChange={setValue1} items={filteredItemsByCountry}/>
            <SelectItems2 className={styles.child} value={value2} onChange={setValue2} items={filteredItemsByLetter}/>
            <SelectItems3 className={styles.child} value={value3} onChange={setValue3}
                          items={filteredItemsByPopulation}/>
        </div>
        <div>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    </>
}

export const HelpExample: Story = {
    render: () => <Example/>
}



