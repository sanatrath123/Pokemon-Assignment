import axios from "axios"
import { useEffect, useState } from "react"
import { pokemonData } from "../types/type"

const useSerachData = (name:string | undefined) => {
const api = `https://pokeapi.co/api/v2/pokemon/${name}`
const [data , setData] =useState<pokemonData>()

const GetData = async ()=>{
try {
  if(!name) return
  const res = await axios.get(api)
  const {abilities , species, stats,weight , id , forms ,height , sprites ,types ,moves}  = res.data
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
setData(newobj)

} catch (error) {
  console.log("errro while fetching the data for indiviual pokemon" ,error)
}
  
}

useEffect(()=>{
  GetData()
},[])

return data

}

export default useSerachData