import axios from 'axios'
import React, {  useState } from 'react'

const Addproduct = () => {
    // declare our states here 
    const [product_name, setProductName] = useState("")
    const [product_description, setProductDescription] = useState("")
    const [product_cost, setProductCost] = useState("")
    const [product_photo, setProductPhoto] = useState("")
    // states for posting data 
    const [loading, setLoading] = useState("")
    const [success, setSucces] = useState("")
    const [error, setError] = useState("")

    // function to handle submit 
    const handlesubmit=async(e)=>{
        e.preventDefault()
        setLoading("please wait ...")
        // create an empty digital envelope 
        const formdata = new FormData ()
        formdata.append("product_name",product_name)
        formdata.append("product_description",product_description)
        formdata.append("product_cost",product_cost)
        formdata.append("product_photo",product_photo)

        try {
            const response =  await axios.post("http://mutheuhiggs.alwaysdata.net/api/addproduct",formdata )
            setSucces(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
            
        }
    }
    return (
        <div className='row justify-content-center mt-2'>
            <div className='col-md-8 card shadow p-4'>
                <h1 className='text-success'>Add product 😋</h1>
                {/* bind the states  */}

                <h3 className="text-warning">{loading}</h3>
                <h3 className="text-success"> {success}</h3>
                <h3 className="text-danger">{error}</h3>

                <form action="" onSubmit={handlesubmit}>
                    <input type="text" placeholder='Enter product name' className='form-control' onChange={(e) => setProductName(e.target.value)} /> <br />
                    <textarea name="" id="" className='form-control' placeholder='Enter product description' onChange={(e) => setProductDescription(e.target.value)}></textarea> <br />
                    <input type="number" placeholder='Enter product cost' className='form-control' onChange={(e) => setProductCost(e.target.value)} /> <br />
                    <input type="file" accept='image*/' className='form-control' onChange={(e) => setProductPhoto(e.target.files[0])} /> <br />
                    <button type='submit' className='btn btn-primary w-100'>Add product</button>
                </form>

            </div>

        </div>
    )
}

export default Addproduct