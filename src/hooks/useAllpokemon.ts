import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { PokemoneUrl } from '../types/type'
import { AllPokemonData } from '../types/type'
import { pokemonData } from '../types/type'

const api = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20"
const infoApi = "https://pokeapi.co/api/v2/pokemon/"


const useAllpokemone = () => {
const [ error , setError ] = useState<boolean>(false)
const [url , setUrl] = useState<PokemoneUrl>([])
const [data , setData] = useState<AllPokemonData>([])
    
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
    const pokemonInfo = await axios.get(`${infoApi+name}`) 
    const {abilities , species, stats,weight , id , forms ,height , sprites ,types } = pokemonInfo.data
    const imgDefalut = sprites.other.home.front_default
    const imgShinny = sprites.other.home.front_shiny
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
    imgDefalut:imgDefalut
}
setData((prev)=>(
    [...prev , newobj]
))
}

    useEffect(()=>{
// GetUrl()
GetData("bulbasaur")
    },[])



    return {data , error}

}

export default useAllpokemone