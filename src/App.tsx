import React, {useState} from "react";
import "./App.css";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {
    ControlledInputWithFixedValue, GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUncontrolledInput,
    UncontrolledInput
} from "./components/Input/UncontrolledInput";
import {
    ControlledCheckbox,
    ControlledInput,
    ControlledSelect
} from "./components/Input/Controlled input select checkbox";


function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(true)

    return (
        <div className={"App"}>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledRating/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>


            <UncontrolledInput/>
            <ControlledInputWithFixedValue/>
            <TrackValueOfUncontrolledInput/>
            <GetValueOfUncontrolledInputByButtonPress/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;