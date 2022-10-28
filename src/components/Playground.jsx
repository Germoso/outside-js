import Editor from "@monaco-editor/react"
import React, { useState, useContext, useEffect, useCallback } from "react"
import { Loading } from "./Loading"
import { useConsole } from "../hooks/useConsole"
import { useTranspiler } from "../hooks/useTranspiler"
import { context, INITIAL_STATE } from "../context/OutsideJs"

const Playground = ({autorun}) => {
    const [untranspiledCode, setUntranspiledCode] = useState("")
    const { code } = useTranspiler(untranspiledCode)
    const outside_js = useConsole()
    const [, setMessages] = useContext(context)

    const clearOutput = useCallback(() => {
        setMessages(INITIAL_STATE)
    }, [setMessages])

    const handleChange = (value, e) => {
        autorun && setUntranspiledCode(value)
    }

    const run = useCallback(() => {
        try {
            // eslint-disable-next-line no-eval
            eval(code)

        } catch (error) {
            outside_js.error(error)
        }
    }, [code, outside_js])

    useEffect(() => {
        clearOutput()
        run()
    }, [code, clearOutput, run])

    return (
        <div className="h-3/5 w-full border-b border-r border-paragraph sm:h-full sm:w-4/6 ">
            <Editor
                // ref={editorRef}
                defaultLanguage="javascript"
                onChange={handleChange}
                loading={<Loading />}
                theme={"vs-dark"}
            />
            {/* <button 
            onClick={() => {
                run()
            }}
            className="h-10 w-10 bg-headline absolute bottom-5 left-1/2 rounded-lg">RUN</button> */}
        </div>
    )
}

export { Playground }
