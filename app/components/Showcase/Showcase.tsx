"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { useSearchParams } from "next/navigation";
import { formatPrice } from "@/utils/format";
import Add from "../Navbars/Add/Add";

export default function Showcase() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("id");

  const [products, setProducts] = useState<any[]>([]);
  const [product, setProduct] = useState<any>();

  const getProducts = async () => {
    let { data: product, error } = await client
      .from("product")
      .select(
        `*,
        photo (
          id, path
        )
        `
      )
      .eq("category_id", categoryId)
      .limit(1, { foreignTable: "photo" });

    setProducts(product || []);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section
        id="new-arrival"
        className="new-arrival product-carousel py-5 position-relative overflow-hidden"
      >
        <div className="container" data-aos="fade-up" data-aos-delay={600}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
            }}
          >
            {products?.map((product: any, index: number) => (
              <div
                className="product-item image-zoom-effect link-effect"
                key={index}
              >
                <div className="image-holder position-relative">
                  <a href={"/details?id=" + product?.id}>
                    <img
                      src={product?.photo[0]?.path}
                      alt="categories"
                      className="product-image img-fluid"
                    />
                  </a>
                  <a href="#" className="btn-icon btn-wishlist">
                    <div style={{ width: 24, height: 24 }}>
                      <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                    </div>
                  </a>
                  <div className="product-content">
                    <h5 className="element-title text-uppercase fs-5 mt-3">
                      <a href="#">{product?.name}</a>
                    </h5>
                    <a
                      href="#"
                      className="text-decoration-none"
                      data-after="Add to cart"
                      onClick={() => setProduct(product)}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasSize"
                      aria-controls="offcanvasSize"
                    >
                      <span>Rp. {formatPrice(product?.price)},-</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="product-item image-zoom-effect link-effect">
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
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
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
                    <a href="index.html">Crop sweater</a>
                  </h5>
                  <a
                    href="#"
                    className="text-decoration-none"
                    data-after="Add to cart"
                  >
                    <span>$70.00</span>
                  </a>
                </div>
              </div>
            </div>
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
            </div> */}
          </div>
        </div>
        <Add p={product} />
      </section>
    </>
  );
}
