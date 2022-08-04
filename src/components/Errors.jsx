import React, { useRef } from "react"
import { useXresizer } from "../hooks/useXresizer"

const Errors = ({ messages }) => {
    const box = useRef()
    const resizer = useRef()

    useXresizer(box, resizer)

    return (
        <div ref={box} className="bottom-0 w-full h-[200px] max-h-[400px] ">
            <div
                ref={resizer}
                className="w-full h-2 bg-paragraph hover:cursor-n-resize"
            ></div>
            <div className="border-b mb-2">
                <span className="select-none">Errors</span>
            </div>
            <div>
                {messages.errors.map((message) => (
                    <span className="block text-headline">
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
