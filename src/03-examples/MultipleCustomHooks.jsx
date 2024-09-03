// import { useCounter } from "../hooks/useCounter";
import { useCounter } from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";
import LoadingMessage from "./LoadingMessage";
import PokemonCard from "./PokemonCard";



const MultipleCustomHooks = () => {

	const {counter, increment, decrement} = useCounter(1);
	
	const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
	<>
		<h1>PokeAPI</h1>
		<hr />
		{
			isLoading ? <LoadingMessage/> : 	
			<PokemonCard
				id={data?.id}
				name={data?.name}
				sprites={[
					data.sprites.front_default,
					data.sprites.front_shiny,
					data.sprites.back_default,
					data.sprites.back_shiny
					
				]}
			/>
		}
		
	

		<button 
			className="btn btn-primary mt-4" 
			onClick={()=> counter > 1 && decrement()}
			disabled={isLoading}
		>Anterior</button>
		<button
			className="btn btn-primary mt-4"
			onClick={()=>increment()}
		>
			Siguiente
		</button>
		
	</>
  )
}

export default MultipleCustomHooks