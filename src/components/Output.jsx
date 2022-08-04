import React, { useContext } from "react"
import { context } from "../context/OutsideJs"
import { Errors } from "./Errors"
import { Logs } from "./Logs"

const Output = () => {
    const [messages] = useContext(context)
    console.log(messages.logs)
    return (
        <div className="relative grow text-paragraph p-2">
            <Logs messages={messages} />
            <Errors messages={messages} />
        </div>
    )
}

export { Output }
