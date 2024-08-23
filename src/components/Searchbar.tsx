
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AllPokemon, pokemonData  } from "../types/type";
//import useSerachData from "../hooks/useSerachData";


const api = `https://pokeapi.co/api/v2/pokemon?offset=40&limit=1200`

const Searchbar = () => {
  const [input , setInput] = useState<string>("")
const [AllData , setAllData] = useState<string[]>([])
const [searchedData , SetSearchedData] = useState<string[]>()

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
    e.preventDefault()
    setInput(e.target.value)
  }

//hook logic for get all pokemon names so that i can prevent unnecessary api call while searching
const GetAllNames = async()=>{
    try {
      const data = await axios.get(api)
    const names = data.data.results.map((item:AllPokemon)=>item.name)
    console.log(names)
    setAllData(names)  
    } catch (error) {
      console.log("error in fetch all name for search" , error)
    }
}

useEffect(()=>{
  GetAllNames()
},[])


//filter the search data
const handleSearch = async ()=>{
let data = AllData.filter((item:string)=> item.toUpperCase().includes(input.toUpperCase()))
 if(data.length>7) data = data.slice(0,7)
SetSearchedData(data)
 console.log(data)
}

//make the function call when i gave the input
useEffect(()=>{
 handleSearch()
},[input])


//fetch the data of select pokimon
const handleSelect = async(name:string)=>{
try {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const {abilities , species, stats,weight , id , forms ,height , sprites ,types ,moves } = res.data 
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
console.log(newobj)

} catch (error) {
  console.log("error in fetch select search" , error)
}
}

  return (
    <div className="relative w-full">
<input type="text" className="w-11/12 px-4 h-12 border-[1px] border-gray-800 rounded-2xl mx-auto text-xl font-semibold" 
  placeholder="Search Pokemon"
  onChange={handleChange}
  value={input}
  /> 
   <ul className="w-full flex flex-wrap justify-center min-h-24 bg-sky-100 absolute top-16 rounded-3xl">
{
  searchedData?.map((item ,i)=>(
<li key={i} className="text-xl w-11/12 text-center font-bold h-12 rounded-xl p-2 border-b-[1px]  border-gray-900 mb-2 cursor-pointer"
onClick={()=>handleSelect(item)}
>{item}</li>
  ))
}


  </ul>
</div>
  )
}

export default Searchbar