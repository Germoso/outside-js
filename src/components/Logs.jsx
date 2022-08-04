import React from "react"

const Logs = ({ messages }) => {
    return (
        <div>
            <div>
                {messages.logs.map((message) => {
                    if (typeof message === "object") {
                        console.log("yes")
                        return (
                            <span className="block text-paragraph">
                                <span className="text-headline">{"> "}</span>
                                {String(message)}
                            </span>
                        )
                    }
                    return (
                        <span className="block text-paragraph">
                            <span className="text-headline">{"> "}</span>
                            {message}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export { Logs }
