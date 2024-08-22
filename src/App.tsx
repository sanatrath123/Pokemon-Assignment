import React, { useEffect, useState } from 'react'
import useAllpokemone from './hooks/useAllpokemon'
import { PokemoneUrl } from './types/type'

const App = () => {
  useAllpokemone()
// const {data , error} = useAllpokemone()

// const [pokemoneUrl , setUrl] = useState<PokemoneUrl>()

// useEffect(() => {
//   if (data.length > 0) {
//     setUrl(data);
//   }
// }, [data]);

// useEffect(()=>{console.log(pokemoneUrl)}, [pokemoneUrl])

// if(error){
//   return  <div>Api Fetch Nehi Hua</div>
// }

  return (
    <div>App</div>
  )
}

export default App
