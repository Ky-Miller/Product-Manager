import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Product = () => {
  
  const [product, setProduct] = useState([])
  const {id} = useParams()
      const navigator = useNavigate()

  const fetchProduct = () => {
      axios.get(`http://localhost:8000/api/products/${id}`)
          .then(res=>{
            setProduct(res.data)
            navigator('/products')
          })
          .catch(err=>console.log(err))
  }
  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res=>{fetchProduct()})
        .catch(err=>console.log(err))
}


  useEffect(fetchProduct, [])

  return (
    <div>
      <Link to={'/'}>| Create a product |</Link>
      <h2>{product.Title}</h2>
      <h3>{product.Price}</h3>
      <h3>{product.Description}</h3>
      <button onClick={()=>handleDelete(product._id)}>Delete</button>
    </div>
  )
}

export default Product