import React, {ChangeEvent, useState} from "react";

export const ControlledInput = () => {
    const [parentValue, setPatentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPatentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <div>
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value="1">Moscow</option>
            <option value="2">Minsk</option>
            <option value="3">Kiev</option>
        </select>
    </div>
}