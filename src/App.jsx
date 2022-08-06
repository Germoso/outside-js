import { Output } from "./components/Output"
import { Playground } from "./components/Playground"
import { OutsideJs } from "./context/OutsideJs"

function App() {
    return (
        <OutsideJs>
            <div className="text-base font-mono flex flex-col max-h-screen min-h-screen h-screen bg-background sm:flex-row">
                <Playground />
                <Output />
            </div>
        </OutsideJs>
    )
}

export default App
