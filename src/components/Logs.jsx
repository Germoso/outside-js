import React, { useId } from "react"

const Logs = ({ messages }) => {
    const id = useId()
    return (
        <div className="relative grow">
            <div className="ml-2 mt-2">
                {messages.logs.map((message) => {
                    if (typeof message === "object") {
                        return (
                            <span
                                key={id + Math.random() * Math.random()}
                                className="block text-secondary"
                            >
                                <span className="text-headline select-none">
                                    {"> "}
                                </span>
                                {String(message)}
                            </span>
                        )
                    }
                    if (typeof message === "function") {
                        return (
                            <span
                                key={
                                    id +
                                    String(message) +
                                    Math.random() * Math.random()
                                }
                                className="block text-secondary"
                            >
                                <span className="text-headline select-none">
                                    {"> "}
                                </span>
                                {String(message)}
                            </span>
                        )
                    }
                    return (
                        <span
                            key={
                                id +
                                String(message) +
                                Math.random() * Math.random()
                            }
                            className="block text-secondary"
                        >
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
