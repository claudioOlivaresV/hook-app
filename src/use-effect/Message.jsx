import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
        const onMouseMove = (event) => {
            console.log(event);
        }
        window.addEventListener('mousemove', onMouseMove)
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove)

      }
    }, [])
    
  return (
    <>
    <h3>Usuario ya existe</h3>
    </>
  )
}
