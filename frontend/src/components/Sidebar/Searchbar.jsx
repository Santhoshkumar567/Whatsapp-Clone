import React from 'react'
import {BiSearch} from 'react-icons/bi'
const Searchbar = () => {
  return (
    <div className='flex p-2 bg-slate-300'>
        <BiSearch size="24" className='mt-1 mr-2' />
        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
    </div>
  )
}

export default Searchbar