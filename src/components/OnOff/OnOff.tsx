import React from "react";


export type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: PropsType) {
    console.log("OnOff rendering");


    console.log("on: " + props.on);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !props.on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"

    };

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onChange(true)
            }}>
                On
            </div>
            <div style={offStyle} onClick={() => {
                props.onChange(false)
            }}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

