import { useEffect } from "react";
import { useState } from "react"
import useform from "../hooks/useform";


export const FormWithCustomHook = () => {

	const {formState, onInputChange, onResetForm,username, email, password} = useform({
		username: '',
		email: '',
		password: ''
	})
	const [error, setError] = useState(false)
	// const {username, email, password} = formState;

	const validationForm = () =>{
		if(!username || !email || !password){
			setError(true)
		}
		
	}
  return (
	<>
		<h1>Formulario con Custom Hook</h1>
		<hr />
		<input 
			type="text" 
			className="form-control" 
			placeholder="Username" 
			name="username"
			value={username}
			onChange={onInputChange}
		/>
		<input 
			type="email" 
			className="form-control mt-3" 
			placeholder="alan@gmail.com" 
			name="email"
			value={email}
			onChange={onInputChange}
		/>
		<input 
			type="password" 
			className="form-control mt-3" 
			placeholder="Contraseña" 
			name="password"
			value={password}
			onChange={onInputChange}
		/>
		{(error) && <div className="bg-danger text-white p-3 m-3 rounded-3">Uno o más campos están vacíos</div>}
		
		<button className="btn btn-primary mt-2" onClick={validationForm}>Enviar</button>
		<button className="btn btn-danger mt-2" onClick={onResetForm}>Borrar</button>
	</>
  )
}
