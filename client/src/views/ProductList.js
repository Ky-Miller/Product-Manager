import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res=>{setProducts(res.data)})
            
            .catch(err=>console.log(err))
    }

    useEffect(fetchProducts, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=>{fetchProducts()})
            .catch(err=>console.log(err))
    }

  return (
    <div>
        <Link to={'/'}>| Create a product |</Link>
            {
                products.length > 0 ?

                products.map((product,key)=>{
                    return(
                        <div key={key}>
                                <Link to={`/products/${product._id}`}>
                                    <h2>{product.Title}</h2>
                                    {/*  Data base keys should be lowercase! */}
                                </Link>
                            <button onClick={()=>handleDelete(product._id)}>Delete</button>
                            <br/>
                            <Link to={`/edit/${product._id}`}><button>Edit</button></Link>
                        </div>
                )})
            :
            <h2>no entries yet...</h2>
            }
    </div>
  )
}

export default ProductList