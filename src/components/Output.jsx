import React, { useContext } from "react"
import { context, INITIAL_STATE } from "../context/OutsideJs"
import { Errors } from "./Errors"
import { Logs } from "./Logs"
import { ClearButton } from "./ClearButtons"

const Output = () => {
    const [messages, setMessages] = useContext(context)

    const clearOutput = () => {
        setMessages(INITIAL_STATE)
    }

    return (
        <div className="relative grow text-paragraph  flex flex-col">
            <Logs messages={messages} />
            <Errors messages={messages} />
            <div className="absolute top-2 right-2">
                <ClearButton text="clear console" callback={clearOutput} />
            </div>
        </div>
    )
}

export { Output }
