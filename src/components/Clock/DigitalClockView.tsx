import React from "react";
import {ClockViewPropsType} from "./Clock";

export const getTwoDigitsString = (num: number) => num < 10 ? "0" + num : num;

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{getTwoDigitsString(date.getHours())}</span>:
        <span>{getTwoDigitsString(date.getMinutes())}</span>:
        <span>{getTwoDigitsString(date.getSeconds())}</span>
    </>
}
