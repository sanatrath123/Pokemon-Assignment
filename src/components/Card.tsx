import { pokemonData } from "../types/type"

const Card = ({data}:{data:pokemonData}) => {
  console.log(data)
  return (
    <div key={data.id} className='w-[350px] h-[460px] bg-[rgb(163,248,240)] mt-5 rounded-3xl p-2 relative shadow-2xl hover:scale-105'>
      <img src={data.imgDefalut} className="w-full h-1/2 rounded-3xl" alt="" />

      <h1 className='text-3xl font-bold mt-3 w-full text-center'>{data.forms[0].name}</h1>

      <div className='text-xl font-semibold flex flex-col gap-2'>
        <div className='flex justify-between'>
          <span className='bg-green-200 p-1'>species:{data.species.name}</span>
        <span className='bg-yellow-200 font-semibold p-1'>move:{data.moves[0].name.slice(0,6)}</span></div>
        <div className='w-full flex gap-3 justify-between my-2 '>
          <span>physical:</span>
        <span className='bg-blue-200'>Height:{data.height}</span>
        <span className='bg-orange-300'>Weight:{data.weight}</span>
        </div>
       <div className='flex gap-3 items-center'>
        <span className='text-green-900'>Type</span>
       <span className='w-5/12 h-6 border-[1px] rounded-2xl border-gray-800 p-1 flex items-center justify-center bg-indigo-200'>{data.types[0].type.name}</span>
       <span className='w-5/12 h-6 border-[1px] rounded-2xl border-gray-800 p-1 flex items-center justify-center bg-indigo-200'>{data.types[1].type.name}</span>
       </div>
      </div>

      <button className='bg-violet-500 text-gray-100 font-semibold py-2 px-3 rounded-2xl absolute left-1/2 -translate-x-1/2 bottom-1'>Know More</button>
    </div>
  )
}

export default Card