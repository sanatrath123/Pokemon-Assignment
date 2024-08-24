
import { RxCross1 } from 'react-icons/rx'
import { useParams } from 'react-router-dom'
import useSerachData from '../hooks/useSerachData'
import React ,{ useEffect, useRef, useState } from 'react'
import { pokemonData } from '../types/type'
import { useNavigate } from 'react-router-dom'
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Loader from './Loading'

const IndivisualSection = () => {

    const {name} = useParams()

  const data =  useSerachData(name)
  const [img, setImg] = useState<string[]>([]);
  const [imgactive , setActive] = useState<number>(0)
  const [indiData , setIndiData] = useState<pokemonData>()
  const [loading , setLoading] = useState<boolean>(true)
  const [ showall , setShowAll] = useState({
    StatsSection: false, MovesSection:false
  })



  useEffect(()=>{
    if(data?.id){
      setImg([data.imgDefalut , data.imgShinny])
        setIndiData(data)
        setLoading(false)
    }
  },[data])


  //useEffect(()=>{console.log(indiData)},[indiData])

  const divref = useRef(null)
  const navigate = useNavigate()
const handleOutsideClick = (e:React.MouseEvent<HTMLElement | string>)=>{
if(e.target != divref.current) return
navigate("/")
}

if(loading){
  return(
      <Loader/>
  )
}
  
  return (
   <div ref={divref}
   onClick={handleOutsideClick}
    className='w-full fixed inset-0 bg-gray-950 bg-opacity-20 backdrop-blur-sm flex items-center'>
{ !loading &&
<div className='md:w-[700px] w-11/12 min-h-[500px] m-auto bg-[rgb(163,248,240)] flex flex-wrap rounded-3xl items-center relative'>
<RxCross1 size={50} color="red" className="absolute right-[-1rem] top-[-3rem]"
onClick={()=>navigate("/")}
 />

<div className='w-full flex  min-h-[50%] overflow-hidden flex-wrap'>
    {/* img section */}
<div className='md:w-6/12 w-11/12 md:mx-2 mt-2 mx-auto h-60 border-[2px] border-gray-100 rounded-2xl relative'>
<IoMdArrowDropleftCircle className='absolute top-1/2 left-0 cursor-pointer' color='black' size={40} 
onClick={()=>setActive(0)}
/>
{/* TODO: Make IT DYNAMIC LATER */}
<img src={`${img[imgactive]}`} className='w-full h-full rounded-2xl' alt="" />
<IoMdArrowDroprightCircle
onClick={()=>setActive(1)}
className='absolute top-1/2 right-0 cursor-pointer' color='black' size={40} />
</div>
{/* name info section */}
<div className='text-gray-900 text-xl font-semibold md:w-5/12 w-11/12'>
<h1 className='md:text-4xl md:font-bold text-2xl font-semibold w-full text-center '><span className='text-3xl text-gray-800 mr-2'>name:</span>{indiData?.forms[0].name}</h1>

<h2 className='tetx-2xl font-bold my-2 bg-green-400 text-center rounded-2xl'>Species: {data?.species.name}</h2>

<h2 className='w-full flex items-center justify-between mt-3'>
    <span className='text-2xl font-semibold bg-blue-400 rounded-xl p-2'>Height:{data?.height}</span>
    <span className='text-2xl font-semibold bg-blue-400 rounded-xl p-2'>Weight:{data?.weight}</span>
</h2>

<h2 className='w-full flex items-center justify-evenly mt-5 text-xl font-semibold '>
    <span className='text-gray-600'>Types:</span>
    <span className=' bg-blue-400 rounded-xl p-2'>{data?.types[0]?.type.name}</span>
    <span className=' bg-blue-400 rounded-xl p-2'>{data?.types[1]?.type.name}</span>
</h2>
</div>
</div>

<div className='w-full min-h-60'>
  <ul className='flex w-full flex-wrap gap-3 bg-gray-200 relative items-center flex-col'>
    <h1 className='text-2xl font-bold border-b-2 border-gray-800'>Stats Section</h1>
  {data?.stats.map((item,i)=>{
    if(!showall.StatsSection && i>=2) return
   return <li key={item.stat.name} className='md:text-xl text-md md:font-semibold  flex md:gap-3 gap-1 border-blue-700 border-2 p-1 rounded-2xl'><span>base-stat: {item.base_stat}</span>
    <span>effort: {item.effort}</span>
    <span>name: {item.stat?.name}</span>
    </li>
  })}
  <button className='p-1 bg-sky-400 rounded-2xl text-md absolute right-3 bottom-3'
  onClick={()=>setShowAll((prev)=>(
    {...prev , StatsSection:!prev.StatsSection}
  ))}
  >{showall.StatsSection ? "Show less" : "Show More"}</button>
</ul> 

<div className='bg-yellow-200 min-h-28 w-full'>
<ul className='flex w-full flex-wrap gap-3 relative justify-center'>
    <h1 className='w-full text-center text-2xl font-bold border-b-2 border-gray-800'>Moves Section</h1>
{
  data?.moves.map((item,i)=>{
    if(!showall.MovesSection && i >=2) return
    if(i>20) return
    return <li key={i} className='md:text-xl md:font-semibold border-2 border-green-800 rounded-2xl p-1' >
{item.name}
    </li>
  })
}
<button className='bg-sky-400 p-1 rounded-2xl absolute right-2 -bottom-4'
onClick={()=>setShowAll((prev)=>(
  {...prev , MovesSection: !prev.MovesSection}
))}
>{showall.MovesSection ? "show less" : "show all"}</button>
</ul>
</div>
</div>

</div>
}
    </div>
  )
}

export default IndivisualSection