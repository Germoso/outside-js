import React from "react"

const Logs = ({ messages }) => {
    return (
        <div className="relative grow">
            <div className="ml-2 mt-2">
                {messages.logs.map((message) => {
                    if (typeof message === "object") {
                        console.log("yes")
                        return (
                            <span className="block text-secondary">
                                <span className="text-headline select-none">
                                    {"> "}
                                </span>
                                {String(message)}
                            </span>
                        )
                    }
                    if (typeof message === "function") {
                        return (
                            <span className="block text-secondary">
                                <span className="text-headline select-none">
                                    {"> "}
                                </span>
                                {String(message)}
                            </span>
                        )
                    }
                    return (
                        <span className="block text-secondary">
                            <span className="text-headline select-none">
                                {"> "}
                            </span>
                            {message}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export { Logs }
