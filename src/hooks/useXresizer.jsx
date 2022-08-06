import { useEffect } from "react"
import { isMobile } from "../helpers/isMobile"

const useXresizer = !isMobile.any()
    ? (component, resizer) => {
          useEffect(() => {
              const onMousedown = (e) => {
                  const boxHeight =
                      component.current.getBoundingClientRect().height
                  const prevY = e.clientY
                  resizer.current.style.backgroundColor = "#fffffe"
                  const onMousemove = (e) => {
                      component.current.style.height =
                          boxHeight - (e.clientY - prevY) + "px"
                      if (component.current.getBoundingClientRect().height < 80)
                          component.current.style.height = 10 + "px"
                  }
                  const onMouseup = (e) => {
                      resizer.current.style.backgroundColor = "#393939"
                      window.removeEventListener("mousemove", onMousemove)
                  }
                  window.addEventListener("mousemove", onMousemove)
                  window.addEventListener("mouseup", onMouseup)
              }

              resizer.current.addEventListener("mousedown", onMousedown)
          }, [component, resizer])
      }
    : (component, resizer) => {
          useEffect(() => {
              const onMousedown = (e) => {
                  const boxHeight =
                      component.current.getBoundingClientRect().height
                  const prevY = e.changedTouches[0].clientY
                  resizer.current.style.backgroundColor = "#fffffe"
                  const onMousemove = (e) => {
                      component.current.style.height =
                          boxHeight -
                          (e.changedTouches[0].clientY - prevY) +
                          "px"
                      if (component.current.getBoundingClientRect().height < 40)
                          component.current.style.height = 10 + "px"
                  }
                  const onMouseup = (e) => {
                      resizer.current.style.backgroundColor = "#393939"
                      window.removeEventListener("touchmove", onMousemove)
                  }
                  window.addEventListener("touchmove", onMousemove)
                  window.addEventListener("touchend", onMouseup)
              }

              resizer.current.addEventListener("touchstart", onMousedown)
          }, [component, resizer])
      }

export { useXresizer }
