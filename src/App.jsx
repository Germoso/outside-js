import { useState } from "react"
import { Output } from "./components/Output"
import { Playground } from "./components/Playground"
import { OutsideJs } from "./context/OutsideJs"
import { AutorunButton } from "./components/AutorunButton"

function App() {
    const [autorun, setAutorun] = useState(true)

    return (
        <OutsideJs>
            <div className="text-base font-mono flex flex-col max-h-screen min-h-screen h-screen bg-background sm:flex-row">
                <Playground autorun={autorun} />
                <Output />
                <AutorunButton setAutorun={setAutorun} autorun={autorun} />
            </div>
        </OutsideJs>
    )
}

export default App
