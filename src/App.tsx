import React from "react";
import "./App.css";
import {Clock} from "./components/Clock/Clock";
import {Clock1} from "./components/Clock/Clock1";


function App() {
    console.log("App rendering")
    return (
        <div className={"App"}>
            <Clock />
            <Clock1 />
        </div>
    );
}

export default App;