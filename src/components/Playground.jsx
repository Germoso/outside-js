import React, { useState } from "react"
import { useConsole } from "../hooks/useConsole"
import { useTranspiler } from "../hooks/useTranspiler"

const Playground = () => {
    const [untranspiledCode, setUntranspiledCode] = useState("")
    const { code } = useTranspiler(untranspiledCode)
    const outside_js = useConsole()

    const handleTyping = (e) => {
        setUntranspiledCode(e.target.value)
    }

    const run = () => {
        try {
            // eslint-disable-next-line no-eval
            eval(code)
        } catch (error) {
            outside_js.error(error)
        }
    }

    return (
        <div className="relative w-3/5">
            <textarea
                className="border-r w-full h-full bg-[#00000000] text-headline resize-none p-2"
                onChange={handleTyping}
                value={untranspiledCode}
                name="code"
                cols="30"
                rows="10"
                placeholder="Type to start coding..."
            ></textarea>
            <div className=" flex w-full justify-center absolute bottom-0">
                <button
                    className=" select-none bottom-2 border border-headlines left-1/2 text-headline py-2 px-4 hover:text-background hover:bg-headline transition-colors my-2"
                    onClick={run}
                >
                    Run
                </button>
            </div>
        </div>
    )
}

export { Playground }
