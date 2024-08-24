
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AllPokemon  } from "../types/type";
import { useNavigate } from "react-router-dom";
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


//handle click on search recomended pokemon
const naviagte = useNavigate()
const handleSearchClick = (name:string)=>{
naviagte(`/indipage/${name}`)
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
onClick={()=>handleSearchClick(item)}

>{item}</li>
  ))
}


  </ul>
</div>
  )
}

export default Searchbar