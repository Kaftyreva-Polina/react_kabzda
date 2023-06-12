import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from "./Select.module.css"

export type ItemType = {
    title: string
    value?: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
    className?: any
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const applicantElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (applicantElement) {
                        props.onChange(applicantElement.value);
                        return;
                    }
                }
            }
            if (!selectItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }
    return (
        <>
            <div tabIndex={0} onKeyUpCapture={onKeyUp} className={styles.select}>
                <span className={styles.main} onClick={toggleItems}>{
                    selectItem && selectItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => setHoveredElementValue(i.value)}
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        >{i.title}</div>)}
                    </div>
                }

            </div>
        </>
    )
}

