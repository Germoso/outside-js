import { useEffect } from "react"

const useXresizer = (component, resizer) => {
    useEffect(() => {
        const onMousedown = (e) => {
            const boxHeight = component.current.getBoundingClientRect().height
            const prevY = e.clientY
            resizer.current.style.backgroundColor = "#fffffe"
            const onMousemove = (e) => {
                component.current.style.height =
                    boxHeight - (e.clientY - prevY) + "px"
                if (component.current.getBoundingClientRect().height < 100)
                    component.current.style.height = 8 + "px"
            }
            const onMouseup = (e) => {
                resizer.current.style.backgroundColor = "#a7a9be"
                window.removeEventListener("mousemove", onMousemove)
            }
            window.addEventListener("mousemove", onMousemove)
            window.addEventListener("mouseup", onMouseup)
        }

        resizer.current.addEventListener("mousedown", onMousedown)
    }, [component, resizer])
}

export { useXresizer }
