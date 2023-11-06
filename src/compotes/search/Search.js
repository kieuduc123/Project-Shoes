import React, { useState } from 'react';

const Search = () => {
    const [search,setSearch] = useState("")
    return (
        <input className="border-0 p-2 text-black" type="search" value={search}
            onChange={(e) => {setSearch(e.target.value)}}
            placeholder="Search" />
    );
};

export default Search;