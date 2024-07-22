import { Search } from 'lucide-react';
import React from 'react';

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-blue-600 
    via-cyan-500 to-purple-800 flex justify-center items-center
    text-white flex-col'>
      <h2 className='text-3xl font-bold'>Browse all Templates</h2>
      <p>What would you like to create today?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border 
        rounded-md bg-white my-5 w-[50%]'>
          <Search className='text-primary' aria-label="Search Icon" />
          <input 
            type="text" 
            placeholder='Buscar...' 
            className='bg-transparent w-full outline-none text-black'
            aria-label="Search Input"
            onChange={(event)=>onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
