import { useContext } from "react"
import { context } from "../context/OutsideJs"

const useConsole = () => {
    const [messages, setMessages] = useContext(context)
    const output_js = {
        log(args) {
            setMessages((state) => {
                const logs = state.logs
                return { ...state, logs: [...logs, args] }
            })
        },
        error(args) {
            setMessages((state) => {
                const errors = state.errors
                return { ...state, errors: [...errors, args] }
            })
        },
    }

    return output_js
}

export { useConsole }
