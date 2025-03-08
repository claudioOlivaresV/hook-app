import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHook = () => {
  const { counter, decrement, increment } = useCounter(1)
  const { data, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  return (
    <>
    <h1>Info</h1>
    <hr/>
    { isLoading
      ? <p>Cargando</p>
      : <PokemonCard 
         id={data.id}
         name={data.name}
         sprites={[
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny
        ]
        }
        />
    }
    {/* <pre> {JSON.stringify(data, null, 2)}</pre> */}
    <h2>{data?.name}</h2>
    <button onClick={() => decrement()}>Anterior</button>
    <button onClick={() => increment()}>Siguiente</button>


    </>
  )
}
