import { useState } from "react";


const useform = (initialForm = {}) => {


	const [formState, setFormState] = useState(initialForm);

	const onInputChange = ({target}) =>{
		const {name, value} = target;
		setFormState({
			...formState,
			[name]: value
		})
	}

	const onResetForm = () =>{
		setFormState(initialForm)
	}
 

	return{
		...formState,
		formState,
		onInputChange,
		onResetForm
	}
}

export default useform