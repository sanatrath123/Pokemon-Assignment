import { useEffect, useState } from 'react'
import useAllpokemone from './hooks/useAllpokemon'
import { PokemoneUrl } from './types/type'

const App = () => {
  useAllpokemone()
const {url , error} = useAllpokemone()

const [pokemoneUrl , setUrl] = useState<PokemoneUrl>()

useEffect(() => {
  if (url.length > 0) {
    setUrl(url);
  }
}, [url]);

useEffect(()=>{console.log(pokemoneUrl)}, [pokemoneUrl])

if(error){
  return  <div>Api Fetch Nehi Hua</div>
}

  return (
    <div>App</div>
  )
}

export default App
