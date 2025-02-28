import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHook = () => {
  const { data, isLoading, hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/1');
  return (
    <>
    <h1>Info</h1>
    <hr/>
    { isLoading && <p>Cargando</p>}
    {/* <pre> {JSON.stringify(data, null, 2)}</pre> */}
    <h2>{data?.name}</h2>
    </>
  )
}
