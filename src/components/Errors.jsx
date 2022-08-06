import React, { useRef, useId } from "react"
import { useXresizer } from "../hooks/useXresizer"

const Errors = ({ messages }) => {
    const box = useRef()
    const resizer = useRef()
    const id = useId()
    useXresizer(box, resizer)

    return (
        <div ref={box} className="background h-[100px]">
            <div
                ref={resizer}
                className="flex justify-center w-full h-2 bg-paragraph hover:cursor-n-resize"
            >
                <div className="w-8 h-full bg-headline"></div>
            </div>
            <div className="border-b border-paragraph mb-2">
                <span className="select-none text-paragraph font-bold pl-2">
                    Errors
                </span>
            </div>
            <div>
                {messages.errors.map((message) => (
                    <span
                        key={
                            id + String(message) + Math.random() * Math.random()
                        }
                        className="block text-headline pl-2"
                    >
                        <span className="text-headline select-none">
                            {"> "}
                        </span>
                        {message.message}
                    </span>
                ))}
            </div>
        </div>
    )
}

export { Errors }
