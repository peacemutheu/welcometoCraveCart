import axios from "axios"
import React, {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
const Signin =()=>{
    let navigate = useNavigate()
    // declare the two states here 
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    // 3 states of posting data 
    const [loading, setLoading]= useState("")
    const[success,setSuccess]= useState("")
    const[error, setError]= useState("")
    // function to handle submit
    const handlesbmit = async (e) =>{
        e.preventDefault()
        setLoading("please wait...")
        // create an empty digital envelope to store user inputts 
        const formdata= new FormData ()
        // append/add 
        formdata.append("email", email)
        formdata.append("password", password)
        try {
            const response = await axios.post ("http://mutheuhiggs.alwaysdata.net/api/signin" , formdata)
            setSuccess(response.data.message)
            setLoading("")
            // if login /signin is successful we save user to localstorage 
            // NB: redirect user to homepage(getproducts )
            navigate("/")
            if (response.data.user){
                // login success 
                setSuccess(response.data.message)
                localStorage.setItem("user",JSON.stringify(response.data.user) )
                // redirect user to homepage 
            }
                else{
                    // login failed 
                }
            
        } catch (error) {
            
        }
    }
    return(
        <div className="row mt-4 justify-content-center"   >
            <div className="col-md-6 card shadow p-4"  >
            <h1>Signin 🔓 </h1>
            {/* bind the states  */}
            <h2 className="text-warning"   >  {loading} </h2>
               <h2   className="text-success" >  {success}  </h2>
               <h2 className="text-danger"  > {error}  </h2>
            <form action="" onSubmit={handlesbmit} >
                <input type="email"   className="form-control" placeholder="email" onChange={(e) =>setEmail (e.target.value)} /><br />
                <input type="password" className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)}/><br />
                <button   type="submit" className="btn btn-primary w-100"  >Signin</button>
                <p>Dont have an account?<Link to = "/signup">Siginup</Link> </p>


            </form>
        </div>
        </div>
    )
}
export default Signin