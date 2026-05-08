
import React, { useEffect, useState, useContext } from 'react'
import {  Link  } from 'react-router-dom'
import { CartContext } from '../CartContext'
const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"))
    setUser(loggedUser);
  }, []);
  const logout= () =>{
    localStorage.removeItem("user");
    setUser(null);
  };
   const { cart } = useContext(CartContext)

  // count items
  const cartCount = cart.reduce((total, item) => total + item.qty, 0)

  return (
     <section class="row">
      <div class="col-md-12">
        {/* <!-- a nav with navbar content  -->  */}
         <nav class="navbar navbar-expand-md bg-light">
          <h1 className="navbar-brand text-danger">CraveCart</h1>
          <button class="navbar-toggler" data-bs-target="
          #navbarcollapse" data-bs-toggle="collapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <!-- a divison cotaining the links  -->  */}
           <div class="collapse navbar-collapse" id="navbarcollapse">
            <div class="navbar-nav">
              <a href="/" class="nav-link">Home</a>
              <a href="/Addproducts" class="nav-link">Add Product</a>
              {/* =================================  */}
              {user ?(
                <>
                <span className='nav-link'>Welcome {user.username} </span>
                <button onClick={logout} className='btn btn-danger'>Logout</button>
                </>
              ):(
                <>
              <a href="/signin" class="nav-link">Signin</a>
              <a href="signup" class="nav-link">Signup</a>
               </>
          )}
          {/* ==============================================  */}
          {/* 🛒 CART */}
          <Link to="/cart" style={{ position: "relative", fontSize: "22px", textDecoration: "none" }}>
            🛒

            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px"
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
            </div>
           </div>
         </nav>
      </div>
    </section>
  )
}

export default Navbar