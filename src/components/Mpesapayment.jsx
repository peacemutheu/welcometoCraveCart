import axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"
const Mpesapayment = ()=>{
    const {singleproduct} = useLocation().state || {}
    const imagepath = "http://mutheuhiggs.alwaysdata.net/static/images/"
    // declare states here 
    const [loading, setLoading] = useState("")
        const [success, setSucces] = useState("")
        const [error, setError] = useState("")
        const[phone, setPhone]= useState("")
        // function to make payment 
        const handlesubmit = async(e)=>{
           e.preventDefault ()
           setLoading("please wait...")
        //    create an empty digital envelope 
        const formdata = new FormData ()
        formdata.append("phone", phone)
        formdata.append("amount", singleproduct.product_cost)
        
            try {
                const response = await axios.post("http://mutheuhiggs.alwaysdata.net/api/mpesa_payment", formdata)
                setSucces(response.data.message)
                setLoading("")
            } catch (error) {
                setError("something went wrong..")
                
            }
        
        }
    return(
        <div className="row justify-content-center">
            <h1 className="text-primary text-center">Make payment-Lipa na Mpesa</h1>
            <div className="col-md-8 card shadow p-4">
            <img src= {imagepath + singleproduct.product_photo}  alt=""style={{height:"500px", objectFit:"cover"}} />

                
                <div className="card-body">
                    <h1 className="text-info ">{singleproduct.product_name} </h1>
                    <p>{singleproduct.product_description} </p>
                    <b className="text-danger">ksh{singleproduct.product_cost} </b> <br /> <br />
                    {/* bind the states  */}
                    <h3 className="text-warning">{loading}</h3>
                <h3 className="text-success"> {success}</h3>
                <h3 className="text-danger">{error}</h3>

                    <form action="" onSubmit={handlesubmit}>
                        <input type="number" className="form-control" placeholder="Enter phone 254xxxxxxxxx" onChange={(e) => setPhone(e.target.value)}/> 
                        <br /> 
                        <button type="submit" className="btn btn-primary w-100">Make payment</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Mpesapayment