import React from "react";
import "./App.css";
import {Clock} from "./components/Clock/Clock";


function App() {
    console.log("App rendering")
    return (
        <div className={"App"}>
            <Clock />
        </div>
    );
}

export default App;