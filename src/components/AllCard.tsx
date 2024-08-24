import { useEffect, useState } from 'react'
import useAllpokemone from '../hooks/useAllpokemon'
import { AllPokemonData, pokemonData } from '../types/type'

import Card from './Card'
import Loader from './Loading'

const AllCard = () => {

  const {url ,data , error} = useAllpokemone()
const [AllpokemonData , setAllpokemonData] = useState<AllPokemonData>([])

useEffect(() => {
 // console.log(data)
  if ( data.length >0 ) {
    // setUrl(url);
    setAllpokemonData(data)  
  }
}, [url ,data,AllpokemonData]);

//lading state
if(data.length <=0) return <Loader/>

if(error){
   return  ( <div className='w-full h-96 mt-9 flex items-center flex-col text-xl font-bold'>
     <h1 className='text-3xl text-red-500 w-full text-center'>404 Server Error </h1>
     <h2 className=' text-red-300 w-8/12 text-center mt-6'>We apologize for the inconvenience. It seems there is an issue with the API call. Please try again later. If the problem persists, feel free to contact me .</h2>

     <button className='w-32 h-16 mt-5 rounded-2xl bg-violet-500 text-gray-100 '><a href="https://www.linkedin.com/in/sanat-kumar-rath-433144248/" target="_blank"> Linkdin</a></button>
   </div>)
 }

  return (
    <div className='w-full min-h-screen bg-[rgb(245,246,246)] flex flex-wrap justify-evenly gap-4'>
      {
        AllpokemonData.map((item:pokemonData)=>(
          <Card data={{...item}} key={item.id} />
        ))
      }
    </div>
  )
}

export default AllCard