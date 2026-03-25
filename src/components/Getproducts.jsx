import axios from "axios"
import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel"
const Getproducts = ()=>{
    let navigate = useNavigate()
    // declare our states here 
    const[loading, setLoading]= useState("")
    const[products, setProduct]= useState([])
    const[error, setError]= useState("")
    // function to get products 
    const  getproducts = async()=>{
        setLoading("please wait ...")
        try {
            const response= await axios.get("http://mutheuhiggs.alwaysdata.net/api/getproducts")
            setProduct(response.data)
            setLoading("")
        } catch (error) {
            
        }
    }
    // call the function
    useEffect(()=>{
        getproducts()
    }, [])
    console.log(products);
    const imagepath = "http://mutheuhiggs.alwaysdata.net/static/images/"
    


    return(
       <div className="row">
        {/* carousel goes here  */}
        <Carousel/>
        <h1 className="text-info" >Available products  </h1>
        {/* bind the states  */}
        <h2 className="text-warning" >{loading}</h2>
        <h2 className="text-danger" > {error} </h2>
        {/* map here   */}
        {products.map(singleproduct =>(

            
            <div className="col-md-3 mb-4">
                <div className="card shadow  h-100 " > 
                    
            {/* images goes here  */}
            <img src= {imagepath + singleproduct.product_photo}  alt=""style={{height:"200px", objectFit:"cover"}} />
            <div className="card-body">
                <h3 className="text-primary" > {singleproduct.product_name} </h3>
                <p>  {singleproduct.product_description} </p>
                <b className="text-info">ksh {singleproduct.product_cost} </b> <br />
                <button className="btn btn-primary w-100" onClick={() =>navigate("/makepayment",{state:{singleproduct}})} >purchase now  </button>
            </div>
                </div>
        </div>
        ))}
       </div>
    )
}
export default Getproducts