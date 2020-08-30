import React from 'react';
import './style.css'

const Search = () => {
    return (
<div className='search'>
<h1 className='title'>Search</h1>
          <form className="form">
          <input
            value={''}
            name="search"
            onChange= {''}
            type="text"
            placeholder="enter search term"
          />
         
          </form>
</div>
    
    )}

 export default Search;