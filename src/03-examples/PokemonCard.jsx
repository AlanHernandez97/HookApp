

const PokemonCard = ({id, name, sprites = []}) => {

	

  return (
	<section style={{height:200}} className="border border-dark text-center rounded">
		<div>
			{
				sprites.map(sprite => (
					<img key={sprite} src={sprite} alt={name} />
				))
			}
		</div>
		<h2 className="text-capitalize">#{id} - {name}</h2>
	</section>
  )
}

export default PokemonCard