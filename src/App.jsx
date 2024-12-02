
import { useState } from 'react';
import './App.css'
import Form from './components/Form'
import ProductTable from './components/ProductTable'
import Sort from './components/Sort';



function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ category: '', search: '' });


  const addProduct = (product) => {
   
      setProducts([...products, { ...product, id: Date.now() }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter(
    (product) =>
      (filter.category === '' || product.category === filter.category) &&
      (filter.search === '' || product.name.toLowerCase().includes(filter.search.toLowerCase()))
  );

  return (
    <>
    <div className='bg-danger p-5'>
      <h1 className='text-center'>PRODUCT INVENTORY SYSTEM</h1>
    </div>
    <Form onAdd={addProduct}/>
    <Sort filter={filter} setFilter={setFilter}/>
    <ProductTable 
    products={filteredProducts}
    onUpdate={updateProduct}
    onDelete={deleteProduct}
     />
      
    </>
  )
}

export default App
