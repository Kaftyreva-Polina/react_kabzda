import React, {useEffect, useState} from "react";

export const Clock = React.memo(() => {
    console.log("Clock was rendering")

    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        console.log("tick of first clock")
        const timerId = setInterval((() => setDate(new Date())), 1000);
        return () => {
            clearInterval(timerId)
        }
    }, [])

    const dateTime = date.toLocaleString()
    const currentTime = date.toLocaleTimeString()
    return (
        <div>
            <time dateTime={dateTime}>
                {currentTime}
            </time>
        </div>
    )

})

