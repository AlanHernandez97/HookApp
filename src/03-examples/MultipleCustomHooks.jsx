// import { useCounter } from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";



const MultipleCustomHooks = () => {

	// const {counter, increment} = useCounter(1);
	
	const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/2`);


	
  return (
	<>
		<h1>PokeAPI</h1>
		<hr />
		{
			isLoading && <span>Cargando...</span>
		}
		<h2>{data?.name}</h2>
		
		{/* <button 
			className="btn btn-primary" 
			onClick={()=>increment()}
			disabled={isLoading}
		>Siguiente Frase</button> */}
		
	</>
  )
}

export default MultipleCustomHooks