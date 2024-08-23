
import { IoHomeSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import  { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Searchbar from "./Searchbar";

const Header = () => {
  const [ searchBar , setSearchBar] = useState<boolean>(false)

  return (
    <div className='fixed md:w-[720px] md:h-[6rem] w-11/12 top-5  bg-gray-100 rounded-full left-1/2 -translate-x-1/2 flex items-center justify-between md:pl-8 px-3 z-30'>

{
  searchBar ?
  <div className="w-full relative">
  <Searchbar/>
 <RxCross2 size={50} color="red" className="absolute right-[-16px] top-4"
 onClick={()=>setSearchBar(false)}
 />
  </div>
   :<><img src="public/logo.jpg" className='h-16 w-16 rounded-full' alt="" />

  <div className='flex w-4/12 justify-center md:gap-16 gap-4 items-center'>
  <li><IoHomeSharp size={45}/></li>
  <li ><BsSearch onClick={()=>setSearchBar(true)}
   size={45}/></li>
  </div></>
}

    </div>
  )
}

export default Header