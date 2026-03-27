import React from 'react'

const Footer = () => {
  return (
    <div>
        <section class="row bg-warning  p-3">
            {/* <!-- child 1  --> */}
             <div class="col-md-4">
              <h2 class="text-center text-white">About us</h2>
              <p class="text-white">We are a comapny that prioritizes our customer needs. our work is to ensure that you get all the products you need and make them delivered at your place to avoid being tired. we have mnay services and we have long warranty. all our oproducts come with a documetation so you do nothave to get confused on how to use our products</p>
             </div>
             {/* <!-- child 2  --> */}
              <div class="col-md-4">
                <h2 class="text-center text-white">Contact Us</h2>
                <form action="">
                  <input type="email" placeholder="enter your email" class="form-control"/> <br/><br/>
                  <textarea name="" id="" class="form-control" placeholder="leave a comment"></textarea> <br/><br/>
                  <input type="submit" value="Send Message" class=" btn btn-outline-danger"/>
                </form>

              </div>
              {/* <!-- child 3  --> */}
               <div class="col-md-4">
                <h2 class="text-center text-white">Stay Connected</h2>
                <a href="http://Facebook.com">
                  <img src="images (copy)/fb.png" alt="Facebook"/>
                </a>
                <a href="https://Instagram.com">
                  <img src="images (copy)/in.png" alt="Instagram"/>
                  <a href="https://Twitter.co">
                    <img src="images (copy)/x.png" alt="Twitter"/>
                  </a>
                </a>
                <p>our social media accounts helps you to teach us from wherever you are. your messages will be replied instantly.</p><br /><br />
                 <footer class="bg-dark text-white text-center p-4 ">
        <b >Developed by Mutheu &copy;2026. All rights Reserved.</b>
      </footer>

                
               </div>
          </section>
    </div>
  )
}

export default Footer