import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export default function Detail() {
  return (
    <>
      <Navbar />

      <section className="collection bg-light position-relative py-5">
        <div className="container">
          <div className="row">
            <div className="title-xlarge text-uppercase txt-fx domino">
              Collection
            </div>
            <div className="collection-item d-flex flex-wrap my-5">
              <div className="col-md-6 column-container">
                <div className="image-holder">
                  <img
                    src="images/single-image-2.jpg"
                    alt="collection"
                    className="product-image img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6 column-container bg-white">
                <div className="collection-content p-5 m-0 m-md-5">
                  <h3 className="element-title text-uppercase">
                    Classic winter collection
                  </h3>
                  <p>
                    Dignissim lacus, turpis ut suspendisse vel tellus. Turpis
                    purus, gravida orci, fringilla a. Ac sed eu fringilla odio
                    mi. Consequat pharetra at magna imperdiet cursus ac faucibus
                    sit libero. Ultricies quam nunc, lorem sit lorem urna,
                    pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar
                    commodo mollis diam sed facilisis at cursus imperdiet cursus
                    ac faucibus sit faucibus sit libero.
                  </p>
                  <a href="#" className="btn btn-dark text-uppercase mt-3">
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
