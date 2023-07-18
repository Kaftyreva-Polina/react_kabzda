import React, {useEffect, useState} from "react";

export const Clock = React.memo(() => {
    console.log("Clock was rendering")

    const [date, setDate] = useState<Date>(new Date())

   useEffect(()=> {
       let timerId = setInterval((() => setDate(new Date())), 1000)
       setTimeout(() => {clearInterval(timerId); alert("stop")}, 30000)
   }, [])

    // const stopTimerHandler = useCallback(() => {
    //     setTimeout(() => {clearInterval(setInterval((() => setDate(new Date())), 1000));
    //         console.log(("stop"))}, 1000)
    // }, [])


    const dateTime = date.toLocaleString()
    const currentTime = date.toLocaleTimeString()
    return (
        <div>
            <time dateTime={dateTime}>
                {currentTime}
                {/*<button onClick={stopTimerHandler}>+</button>*/}
            </time>
        </div>
    )

})

