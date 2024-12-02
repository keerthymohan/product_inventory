import React from 'react'

function Sort({ filter, setFilter }) {
    const handleCategoryChange = (e) => {
        setFilter({ ...filter, category: e.target.value });
      };
    
      const handleSearchChange = (e) => {
        setFilter({ ...filter, search: e.target.value });
      };
  return (
    <div className='mt-5 ms-3 text-center'>
        <input type="text" placeholder="Search by Name" value={filter.search} onChange={handleSearchChange}/>
      <select value={filter.category} onChange={handleCategoryChange} className='ms-3'>
        <option value="">All Categories</option>
        <option value="Foods">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Groceries</option>
      </select>

    </div>
  )
}

export default Sort