import React, {useEffect, useState} from "react";


type ClockPropsType = {}

const getTwoDigitsString = (num: number) => num < 10 ? "0" + num : num;

export const Clock1: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Tick")
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            <span>{getTwoDigitsString(date.getHours())}</span>:
            <span>{getTwoDigitsString(date.getMinutes())}</span>:
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    )
}