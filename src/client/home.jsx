// import "../css/home.css";

// export default function Home() {
//   return (
//     <>
//       {/* HERO SECTION */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Sale 20% Off</h1>
//           <h2>On Everything</h2>
//           <p>
//             Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam.
//           </p>
//           <button>Shop Now</button>
//         </div>
//       </section>

//       {/* WHY SHOP */}
//       <section className="why-shop">
//         <h2>Why Shop With Us</h2>
//         <div className="why-grid">
//           <div className="why-card">
//             <h3>Fast Delivery</h3>
//             <p>Quick and safe product delivery</p>
//           </div>
//           <div className="why-card">
//             <h3>Free Shipping</h3>
//             <p>No shipping charges on orders</p>
//           </div>
//           <div className="why-card">
//             <h3>Best Quality</h3>
//             <p>Premium quality products</p>
//           </div>
//         </div>
//       </section>

//       {/* NEW ARRIVALS */}
//       <section className="arrival">
//         <div className="arrival-content">
//           <h2>#NewArrivals</h2>
//           <p>
//             Discover our latest collection with amazing discounts.
//           </p>
//           <button>Shop Now</button>
//         </div>
//       </section>

//       {/* PRODUCTS */}
//       <section className="products">
//         <h2>Our Products</h2>
//         <div className="product-grid">
//           {Array.from({ length: 8 }).map((_, i) => (
//             <div className="product-card" key={i}>
//               <img
//                 src={`https://via.placeholder.com/300x300?text=Product+${i + 1}`}
//                 alt="product"
//               />
//               <h3>Product {i + 1}</h3>
//               <p>₹ {999 + i * 100}</p>
//               <button>Add To Cart</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SUBSCRIBE */}
//       <section className="subscribe">
//         <h2>Subscribe To Get Discount Offers</h2>
//         <p>Get updates about new products and offers</p>
//         <div className="subscribe-box">
//           <input type="email" placeholder="Enter your email" />
//           <button>Subscribe</button>
//         </div>
//       </section>
//     </>
//   );
// }


import { useEffect, useState } from "react";
import "../css/home.css";

import slide1 from "../assets/slidebar1.webp";
import slide2 from "../assets/slidebar2.webp";
import slide3 from "../assets/slidebar3.jpg";

import p1 from "../assets/menShirt.webp";
import p2 from "../assets/womenDress.webp";
import p3 from "../assets/jacket.jpg";
import p4 from "../assets/shoes.webp";
import p5 from "../assets/watch.avif";
import p6 from "../assets/bag.jpg";

export default function Home() {
  const slides = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const products = [
    { img: p1, name: "Men Shirt", price: 999 },
    { img: p2, name: "Women Dress", price: 1299 },
    { img: p3, name: "Jacket", price: 1999 },
    { img: p4, name: "Shoes", price: 2499 },
    { img: p5, name: "Watch", price: 1599 },
    { img: p6, name: "Hand Bag", price: 1899 },
  ];
  

  return (
    <>
      {/* SLIDER */}
      <div className="slider">
        <div
          className="slide"
          style={{ backgroundImage: `url(${slides[current]})` }}
        >
          <div className="slide-content">
            <h1>Sale 20% Off</h1>
            <p>On All Products</p>
            <button>
              Shop Now <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCTS (rest same rahega) */}
    



      {/* WHY SHOP */}
      <section className="why-shop">
        <h2>Why Shop With Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <i className="fa fa-truck"></i>
            <h3>Fast Delivery</h3>
            <p>Quick & safe delivery</p>
          </div>
          <div className="why-card">
            <i className="fa fa-shipping-fast"></i>
            <h3>Free Shipping</h3>
            <p>No extra charges</p>
          </div>
          <div className="why-card">
            <i className="fa fa-star"></i>
            <h3>Best Quality</h3>
            <p>Premium products</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((p, i) => (
            <div className="product-card" key={i}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>₹ {p.price}</p>
              <button>
                <i className="fa fa-cart-shopping"></i> Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="subscribe">
        <h2>
          <i className="fa fa-envelope"></i> Subscribe For Offers
        </h2>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>
    </>
  );
}
