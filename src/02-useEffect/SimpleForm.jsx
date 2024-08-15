import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

	const [formState, setFormState] = useState({
		username: 'Alan',
		email: 'correo@correo.com'
	});

	const {username, email} = formState;

	const onInputChange = ({target}) =>{
		const {name, value} = target;
		setFormState({
			...formState,
			[name]: value
		})
	}


	useEffect(() => {
	   
	}, [formState]);

	useEffect(()=>{

	}, [email]);
	


  return (
	<>
		<h1>Formulario Simple</h1>
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

		{
			username === 'Alan' && <Message/> 
		}
	</>
  )
}
