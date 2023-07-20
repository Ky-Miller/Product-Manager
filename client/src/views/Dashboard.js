import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {

    const navigator = useNavigate()

    const [formData, setFormData] = useState({
        Title:"",
        Price:"",
        Description:""
    });

    const [errors, setErrors] = useState([]);


    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData( currentData => ({...currentData, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/products/new", formData)
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

  return (
    <div>
        <fieldset>
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
                <input type='submit' value='Create' />
            </form>
        </fieldset>
    </div>
  )
}

export default Dashboard