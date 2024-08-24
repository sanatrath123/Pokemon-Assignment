import { useEffect , useRef, useState } from 'react'
import axios from 'axios'
import { pokemonData , AllPokemonData ,AllPokemon, PokemoneUrl } from '../types/type'
const limit = 30
const api = `https://pokeapi.co/api/v2/pokemon?offset=40&limit=${limit}`
const infoApi = "https://pokeapi.co/api/v2/pokemon/"



const useAllpokemone = () => {
const [ error , setError ] = useState<boolean>(false)
const [url , setUrl] = useState<PokemoneUrl>([])
const [data , setData] = useState<AllPokemonData>([])
    const ApiCalled = useRef(false)
const GetUrl = async ()=>{
try {
    const urlData = await axios.get(api)
  setUrl(urlData.data.results)
} catch (error) {
    setError(true)
    console.log("error in fetch pokemon url and name api"  , error)
}
}

const GetData = async (name:string)=>{
   try {
    const pokemonInfo = await axios.get(`${infoApi+name}`) 
    const {abilities , species, stats,weight , id , forms ,height , sprites ,types ,moves } = pokemonInfo.data
    const imgDefalut = sprites.other.home.front_default
    const imgShinny = sprites.other.home.front_shiny
    const move = moves.map((item:any)=>item.move)
//assigning the value inside the new object
const newobj:pokemonData = {
    id: id,
    forms :forms ,
    abilities: abilities,
    species : species,
    stats: stats,
    weight: weight,
    height:height,
    types: types,
    imgShinny:imgShinny,
    imgDefalut:imgDefalut,
    moves:move
}
setData((prev)=>(
    [...prev , newobj]
))
   } catch (error) {
    console.log("error in fetching indivisual data pf pokemon" , error)
   }
}

//fetch all name and url 
    useEffect(()=>{
GetUrl()
    },[])

//call for each pokimon
useEffect(()=>{
    console.log(ApiCalled.current)
    if(url.length >=limit && !ApiCalled.current){
       url.forEach((item:AllPokemon):void=>{
        GetData(item.name)
       })
       ApiCalled.current= false
    }
},[url])

    return {url ,data, error}

}

export default useAllpokemone