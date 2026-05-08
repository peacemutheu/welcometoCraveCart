import axios from "axios"
import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel"
import Footer from "./Footer"
import { CartContext } from '../CartContext'
const Getproducts = ()=>{
    const navigate = useNavigate()
  const { addToCart } = useContext(CartContext) // 🛒 CART
    // declare our states here 
    const[loading, setLoading]= useState("")
    const[products, setProduct]= useState([])
    const[error, setError]= useState("")
    const [search, setSearch]= useState("")
    const [visibleCount , setVisibleCount]= useState(8)
    // filter logic goes here 
    const filtered_products = products.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLocaleLowerCase()) ||
    item.product_description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
)

    // function to get products 
    const  getproducts = async()=>{
        setLoading("please wait ...")
        try {
            const response= await axios.get("https://mutheuhiggs.alwaysdata.net/api/getproducts")
            setProduct(response.data)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
            
        }
    }
    // call the function
    useEffect(()=>{
        getproducts()
    }, [])
    console.log(products);
    const imagepath = "https://mutheuhiggs.alwaysdata.net/static/images/"
    


    return(
       <div className="row">
         {/* carousel goes here  */}
        <Carousel/>
        {/* search bar goes here  */}
        <div className="row justify-content-center mt-3 mb-3">
            <input 
            className="form-control w-50"
            type="search"
            placeholder={search}
            onChange={(e) => setSearch(e.target.value)} />
            {/* bind error messages  */}
            <h2 className="text-info">{loading}</h2>
            <h2 className="text-danger">{error}</h2>

        </div>
        
        <h1 className="text-info" >Available products  </h1>
       
        {/* bind the states  */}
        <h2 className="text-warning" >{loading}</h2>
        <h2 className="text-danger" > {error} </h2>
        {/* map here   */}
        {filtered_products.slice(0,visibleCount).map(singleproduct =>(

            
            <div className="col-md-3 mb-4">
                <div className="card shadow  h-100 " > 
                    
            {/* images goes here  */}
            <img src= {imagepath + singleproduct.product_photo}  alt=""style={{height:"200px", objectFit:"cover"}} />
            <div className="card-body">
                <h3 className="text-primary" > {singleproduct.product_name} </h3>
                <p>  {singleproduct.product_description} </p>
                <b className="text-info">ksh {singleproduct.product_cost} </b> <br />
                <button className="btn btn-primary w-100" onClick={() =>navigate("/makepayment",{state:{singleproduct}})} >purchase now  </button>
                {/* 🛒 ADD TO CART BUTTON */}
                <button
                  className="btn mt-2 me-2 btn-cart"
                  style={{ border: "2px solid #39ff14", color: "#39ff14" }}
                  onClick={() => addToCart(singleproduct)}
                >
                  Add to Cart 🛒
                </button>

            </div>
                </div>
        </div>

        ))}
        <div className="text-center , mt-5"></div>
        {visibleCount <filtered_products.length && (
            <button 
            className="btn btn-primary" 
            onClick={() =>setVisibleCount(visibleCount+ 8)}
            >
                Load More
            </button>
                
           ) }
        
        <Footer/>
       </div>
    )
}
export default Getproducts