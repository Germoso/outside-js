import { Output } from "./components/Output"
import { Playground } from "./components/Playground"
import { OutsideJs } from "./context/OutsideJs"

function App() {
    return (
        <OutsideJs>
            <div className="flex max-h-screen min-h-screen bg-background overflow-hidden">
                <Playground />
                <Output />
            </div>
        </OutsideJs>
    )
}

export default App
