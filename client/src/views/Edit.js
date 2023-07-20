import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Edit = () => {

  const {id} = useParams()
  const [errors, setErrors] = useState([]);

  
  const navigator = useNavigate()


  const [formData, setFormData] = useState({
      Title:"",
      Price:"",
      Description:""
  })


  const handleChange = (e) =>{
      const {name, value} = e.target
      setFormData( currentData => ({...currentData, [name]:value}))
  }

  const handleSubmit = (e) => {
      e.preventDefault()

      axios.patch(`http://localhost:8000/api/products/${id}`, formData)
          .then(res=>{
              setFormData({
                  Title:"",
                  Price:"",
                  Description:"",
              })
              navigator('/products')
          })
          .catch(err=>{
            const errors = err.response.data.errors;

            const errorArr = [];

            for(const key of Object.keys(errors)) {
                errorArr.push(errors[key].message)
            }
            setErrors(errorArr);
        })
  }

  useEffect(()=>{
    axios.get("http://localhost:8000/api/products/"+id)
      .then(res=>{
        setFormData(res.data)
      })
      .catch(err=>console.log(err))
  }, [])

return (
  <div>
      <fieldset>
        <Link to={'/'}>Create a product |</Link>
        <Link to={'/products'}>List of our products</Link>
          <form onSubmit={handleSubmit}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
              <label>Title: </label>
              <input name='Title' onChange={handleChange} value={formData.Title} type="text"/>
              <br/>
              <label> Price: </label>
              <input name='Price' onChange={handleChange} value={formData.Price} type="number" step="0.01"/>
              <br/>
              <label> Description: </label>
              <input name='Description' onChange={handleChange} value={formData.Description} type="text"/>
              <br/>
              <input type='submit' value='Update' />
          </form>
      </fieldset>
  </div>
)
}

export default Edit