import "../css/home.css";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Sale 20% Off</h1>
          <h2>On Everything</h2>
          <p>
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam.
          </p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* WHY SHOP */}
      <section className="why-shop">
        <h2>Why Shop With Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>Fast Delivery</h3>
            <p>Quick and safe product delivery</p>
          </div>
          <div className="why-card">
            <h3>Free Shipping</h3>
            <p>No shipping charges on orders</p>
          </div>
          <div className="why-card">
            <h3>Best Quality</h3>
            <p>Premium quality products</p>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="arrival">
        <div className="arrival-content">
          <h2>#NewArrivals</h2>
          <p>
            Discover our latest collection with amazing discounts.
          </p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="product-card" key={i}>
              <img
                src={`https://via.placeholder.com/300x300?text=Product+${i + 1}`}
                alt="product"
              />
              <h3>Product {i + 1}</h3>
              <p>₹ {999 + i * 100}</p>
              <button>Add To Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="subscribe">
        <h2>Subscribe To Get Discount Offers</h2>
        <p>Get updates about new products and offers</p>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>
    </>
  );
}
