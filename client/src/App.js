import './App.css';
import {Routes, Route} from 'react-router-dom'

import Dashboard from './views/Dashboard';
import ProductList from './views/ProductList';
import Product from './views/Product';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path='/' element= {<Dashboard />}></Route>
        <Route path='/products' element= {<ProductList />}></Route>
        <Route path='/products/:id' element= {<Product />}></Route>
        <Route path='/edit/:id' element= {<Edit />}></Route>
        </Routes>
    </div>
  );
}

export default App;
