import React from 'react';

const SearchIn = ({searchChange}) => {
    return (
    <div className="ma3">
        <input
        area-aria-label='Search Robots'
        onChange={searchChange}
        className="pa2 ba b--black bg-light-blue grow br2 shadow-5"
        type='seach' 
        placeholder='Search'  
        />
</div>
    )
}

export default SearchIn;