import React, { useState } from 'react'

function ProductTable({ products, onUpdate, onDelete }) {
    const [editingProductId, setEditingProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProductId(product.id);
    setEditedProduct(product);
  };

  const handleUpdate = () => {
    onUpdate(editedProduct);
    setEditingProductId(null);
  };
  return (
    <div className='bg-info p-5 mt-5'>
    <h2 className='mt-4 mx-3'>PRODUCT DETAILS:</h2>
    <table className='w-100 ' style={{margin:'20px 0px'}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            {editingProductId === product.id ? (
              <>
                <td>
                  <input type="text" value={editedProduct.name} onChange={(e) =>setEditedProduct({ ...editedProduct, name: e.target.value })}/>
                </td>

                <td>
                  <input type="text" value={editedProduct.category} onChange={(e) =>setEditedProduct({ ...editedProduct,category: e.target.value })}/>
                </td>

                <td>
                  <input type="number" value={editedProduct.price} onChange={(e) =>setEditedProduct({ ...editedProduct, price: e.target.value })} />
                </td>

                <td>
                  <input type="number" value={editedProduct.stock} onChange={(e) =>setEditedProduct({ ...editedProduct, stock: e.target.value })}/>
                </td>

                <td>
                  <input type="text" value={editedProduct.description} onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}/>
                </td>

                <td>
                  <button className='btn btn-success' onClick={handleUpdate}>Save</button>
                  <button className='btn btn-success ms-3' onClick={() => setEditingProductId(null)}>Cancel</button>
                </td>
              </>
            ) : (
              <>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.description}</td>
                <td>
                  <button className='btn btn-success' onClick={() => handleEdit(product)}>Edit</button>
                  <button className='btn btn-success ms-3' onClick={() => onDelete(product.id)}>Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
    
    </div>
  )
}

export default ProductTable