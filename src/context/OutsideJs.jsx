import React, { useState } from "react"

const context = React.createContext()

const INITIAL_STATE = {
    logs: [],
    errors: [],
}

const OutsideJs = ({ children }) => {
    const [messages, setMessages] = useState(INITIAL_STATE)
    return (
        <context.Provider value={[messages, setMessages]}>
            {children}
        </context.Provider>
    )
}

export { OutsideJs, context, INITIAL_STATE }
