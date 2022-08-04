import { useEffect } from "react"

const useXresizer = (component, resizer) => {
    useEffect(() => {
        const onMousedown = (e) => {
            const boxHeight = component.current.getBoundingClientRect().height
            const prevY = e.clientY
            const onMousemove = (e) => {
                component.current.style.height =
                    boxHeight - (e.clientY - prevY) + "px"
            }
            const onMouseup = (e) => {
                window.removeEventListener("mousemove", onMousemove)
            }
            window.addEventListener("mousemove", onMousemove)
            window.addEventListener("mouseup", onMouseup)
        }

        resizer.current.addEventListener("mousedown", onMousedown)
    }, [component, resizer])
}

export { useXresizer }
