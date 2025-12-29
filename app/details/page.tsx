import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import Product from "../components/Product/Product";

export default function Detail() {
  return (
    <>
      <Navbar />

      <Product />

      <section
        id="new-arrival"
        className="new-arrival product-carousel py-5 position-relative overflow-hidden"
      >
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
            <h4 className="text-uppercase">you may also like</h4>
            {/* <a href="index.html" className="btn-link">
              View All Products
            </a> */}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
            }}
          >
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img
                    src="images/product-item-1.jpg"
                    alt="categories"
                    className="product-image img-fluid"
                  />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <div style={{ width: 24, height: 24 }}>
                    <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                  </div>
                </a>
                <div className="product-content">
                  <h5 className="element-title text-uppercase fs-5 mt-3">
                    <a href="index.html">Dark florish onepiece</a>
                  </h5>
                  <a
                    href="#"
                    className="text-decoration-none"
                    data-after="Add to cart"
                  >
                    <span>$95.00</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img
                    src="images/product-item-2.jpg"
                    alt="categories"
                    className="product-image img-fluid"
                  />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <div style={{ width: 24, height: 24 }}>
                    <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                  </div>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Baggy Shirt</a>
                  </h5>
                  <a
                    href="#"
                    className="text-decoration-none"
                    data-after="Add to cart"
                  >
                    <span>$55.00</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img
                    src="images/product-item-3.jpg"
                    alt="categories"
                    className="product-image img-fluid"
                  />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <div style={{ width: 24, height: 24 }}>
                    <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                  </div>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Cotton off-white shirt</a>
                  </h5>
                  <a
                    href="#"
                    className="text-decoration-none"
                    data-after="Add to cart"
                  >
                    <span>$65.00</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img
                    src="images/product-item-4.jpg"
                    alt="categories"
                    className="product-image img-fluid"
                  />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <div style={{ width: 24, height: 24 }}>
                    <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                  </div>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Crop sweater</a>
                  </h5>
                  <a
                    href="#"
                    className="text-decoration-none"
                    data-after="Add to cart"
                  >
                    <span>$50.00</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
