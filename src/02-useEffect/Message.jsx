import { useEffect, useState } from "react"


export const Message = () => {

	const [coords, setCoords] = useState({x:0, y:0})

	useEffect(() => {

		const onMouseMove = ({x,y}) =>{
			// const coords = {x, y}
			setCoords({x, y});
		}

		window.addEventListener('mousemove', onMouseMove)

	  return () => {
		window.removeEventListener('mouse', onMouseMove);
	  }
	}, [])
	


  return (
	<>
		<span className="badge text-bg-danger">El usuario ya existe</span>
		{JSON.stringify(coords)}
	</>
  )
}
