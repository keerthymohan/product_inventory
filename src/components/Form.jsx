import React, { useState } from 'react'

function Form({ onAdd }) {
    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: '',
        stock: '',
        description: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
      };
    
      const handleSubmit = (e) => {
       

        e.preventDefault();
        onAdd(product);
        setProduct({ name: '', category: '', price: '', stock: '', description: '' });
      };

  return (
    <>
    <div className='bg-info p-5 mt-5'>
      <h2 className='mt-4 ms-3'>ADD NEW PRODUCTS:</h2>
      <form onSubmit={handleSubmit} className='d-flex mt-4 ms-3' style={{gap:'15px'}}>
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required/>
  
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required/>
  
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required/>
  
        <input type="number" name="stock" placeholder="Stock Quantity" value={product.stock} onChange={handleChange} required/>
        <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} required/>
        <button type="submit" className='btn btn-success'>Add Product</button>
      </form>
    </div>

    </>
  )
}

export default Form