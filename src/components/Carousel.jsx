import React from 'react'

const Carousel = () => {
  return (
     <section class="row">
     <div class="col-md-12">
      {/* <!-- a division containing carousel content   -->  */}
       <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
        {/* <!-- division containing images  -->  */}
         <div class="carousel-inner">
          {/* <!-- div with image one  -->  */}
           <div class="carousel-item active">
            <img src="images/c1.png" alt="c1"  width={600} height={600} />
           </div>
           {/* <!-- div with image 2  -->  */}
            <div class="carousel-item">
              <img src="images/c3.jpg " alt="c3" width={600} height={600}/>
            </div>
            {/* <!-- div with image 3  -->  */}
             <div class="carousel-item">
              <img src="images/c11.webp" alt="c11" width={600} height={600} />
             </div>
             {/* <!-- div with image 4  -->  */}
              <div class="carousel-item">
                <img src="images/c7.webp" alt="c7"/>
              </div>
          {/* <!-- previous control  --> */}
           <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-warning"></span>
           </a>
           {/* <!-- next control  -->  */}
            <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
              <span class="carousel-control-next-icon bg-warning"></span>
            </a>
         
       </div>
     </div>
     </div>
     </section>
  )
}

export default Carousel