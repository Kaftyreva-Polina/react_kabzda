import React, {ChangeEvent, useRef, useState} from "react";

export const UncontrolledInput = () => <input/>

//1Способ трекинга неконтролируемого инпута
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }
    return <> <input onChange={onChange}/> - {value} </>
}

//2Способ трекинга некотролируемого инпута с помощью рефа при нажатии кнопки
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <div>
        <input ref={inputRef} id={"inputId"}/>
        <button onClick={save}>save</button>
        -actual value: {value}
    </div>
}

//useRef ссылка на элемент компоненту

export const ControlledInputWithFixedValue = () => <input value={"it-incubator"}/>




