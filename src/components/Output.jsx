import React, { useContext } from "react"
import { context } from "../context/OutsideJs"
import { Errors } from "./Errors"
import { Logs } from "./Logs"

const Output = () => {
    const [messages] = useContext(context)

    return (
        <div className="flex flex-col grow h-full overflow-clip">
            <Logs messages={messages} />
            <Errors messages={messages} />
        </div>
    )
}

export { Output }
