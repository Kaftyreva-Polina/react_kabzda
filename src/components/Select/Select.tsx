import React, {useState} from "react";
import styles from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
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

    return (
        <>
            <div className={styles.select}>
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


    // <div className={styles.select + " " + (active ? styles.active : "")}>

    // let [parentValue, setParentValue] = useState("Help")

    // const onClickBoard = () => {
    //     return <span className={"select"}>{parentValue}</span>
    // }
    // return <div className={"select"}>
    //     <div className={"select_header"}>
    //         <span className={"select_current"} onClick={onClickBoard}>{parentValue }</span>
    //         <div className={"select_icon"}>&times;</div>
    //     </div>
    //     <div className={"select_body"}>
    //         {props.items.map(el => <div className="select_item">{el.title}</div>)}
    //         {/*<div className={"select_item"}>Value_1</div>*/}
    //         {/*<div className={"select_item"}>Value_2</div>*/}
    //         {/*<div className={"select_item"}>Value_3</div>*/}
    //         {/*<div className={"select_item"}>Value_4</div>*/}
    //     </div>

    // </div>


}

