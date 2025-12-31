"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export default function Best() {
  const [products, setProducts] = useState<any[]>([]);

  const getBestSeller = async () => {
    const { data: product, error } = await client
      .from("top_products_view")
      .select("*")
      .limit(6);

    setProducts(product || []);
  };

  useEffect(() => {
    getBestSeller();
  }, []);

  return (
    <section
      id="best-sellers"
      className="best-sellers bg-light product-carousel py-5 position-relative overflow-hidden"
    >
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
          <h4 className="text-uppercase">Best Selling Items</h4>
          {/* <a href="index.html" className="btn-link">
              View All Products
            </a> */}
        </div>
        <div className="swiper product-swiper open-up" data-aos="zoom-out">
          <div className="swiper-wrapper d-flex">
            <div className="swiper-slide">
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
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
                      <a href="index.html">Dark florish onepiece</a>
                    </h5>
                    <a
                      href="index.html"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$95.00</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <a href="index.html">
                    <img
                      src="images/product-item-3.jpg"
                      alt="product"
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
                      href="index.html"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$55.00</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <a href="index.html">
                    <img
                      src="images/product-item-5.jpg"
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
                      href="index.html"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$65.00</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <a href="index.html">
                    <img
                      src="images/product-item-6.jpg"
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
                      <a href="index.html">Handmade crop sweater</a>
                    </h5>
                    <a
                      href="index.html"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$50.00</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <a href="index.html">
                    <img
                      src="images/product-item-9.jpg"
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
                      <a href="index.html">Dark florish onepiece</a>
                    </h5>
                    <a
                      href="index.html"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$70.00</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <a href="index.html">
                    <img
                      src="images/product-item-10.jpg"
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
                      href="index.html"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$70.00</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
        <div className="icon-arrow icon-arrow-left">
          <div style={{ width: 24, height: "65%" }}>
            <FontAwesomeIcon icon={faArrowLeft} size="sm" />
          </div>
        </div>
        <div className="icon-arrow icon-arrow-right">
          <div style={{ width: 24, height: "65%" }}>
            <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
