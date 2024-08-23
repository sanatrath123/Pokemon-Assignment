
import AllCard from "./components/AllCard"
import Header from "./components/Header"

const Demo = () => {

  return (
    <>
    <div className='w-full min-h-screen flex justify-center' style={{ backgroundImage: "url('public/BgImg.jpg')", backgroundRepeat:"no-repeat" ,backgroundSize: "cover",backgroundPosition: "center" }}>
<Header/>

<h1  className='md:text-7xl text-3xl font-extrabold md:w-9/12 xl:w-7/12 w-11/12   text-violet-900 absolute top-1/2 -translate-y-2/3 text-center '>Welcome To PokemoneHub Explore New Pokemones Gather Some New Info</h1>
    </div>
    <AllCard/>
    </>
  )
}

export default Demo