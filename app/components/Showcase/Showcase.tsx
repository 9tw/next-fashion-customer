"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Showcase() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("id");

  const [products, setProducts] = useState<any[]>([]);
  const [product, setProduct] = useState<any>();
  const [sizes, setSizes] = useState<any[]>([]);
  const [qty, setQty] = useState(1);

  const formatPrice = (price: number) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const getProducts = async () => {
    let { data: product, error } = await client
      .from("product")
      .select("*")
      .eq("category_id", categoryId);

    setProducts(product || []);
  };

  const getSizes = async () => {
    let { data: size, error } = await client
      .from("size")
      .select("*")
      .eq("product_id", product?.id);

    setSizes(size || []);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const size = formData.get("size");
    const quantity = qty;

    addToCart(product, size, quantity);
  };

  const addToCart = (product: any, size: string, qty: number) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const newProduct = {
      ...product,
      size: size,
      quantity: qty,
    };

    cart.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success(`${product?.name} Dress added to your cart`);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getSizes();
  }, [product]);

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
                  <a href="#">
                    <img
                      src="images/product-item-1.jpg"
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
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasSize"
          aria-labelledby="My Size"
        >
          <div className="offcanvas-header justify-content-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">{product?.name}</span>
                <span className="badge bg-primary rounded-pill">
                  Rp. {formatPrice(product?.price)},-
                </span>
              </h4>
              {/* <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Growers cider</h6>
                    <small className="text-body-secondary">
                      Brief description
                    </small>
                  </div>
                  <span className="text-body-secondary">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Fresh grapes</h6>
                    <small className="text-body-secondary">
                      Brief description
                    </small>
                  </div>
                  <span className="text-body-secondary">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Heinz tomato ketchup</h6>
                    <small className="text-body-secondary">
                      Brief description
                    </small>
                  </div>
                  <span className="text-body-secondary">$5</span>
                </li>
              </ul> */}
              <form
                id="form"
                className="d-flex flex-wrap gap-2"
                onSubmit={handleSubmit}
              >
                <h6 className="my-0 w-100">Size</h6>
                <select
                  name="size"
                  className="form-control form-control-md"
                  required
                >
                  <option value="">select size</option>
                  {sizes?.map((size: any) => (
                    <option key={size?.id} value={size?.name}>
                      {size?.name}
                    </option>
                  ))}
                </select>

                <h6 className="my-0 w-100">Qty</h6>
                <div className="d-flex align-items-center gap-2 mb-3 w-100">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-md"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="qty"
                    value={qty}
                    readOnly
                    className="form-control form-control-md text-center"
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-md"
                    onClick={() => setQty(Math.min(5, qty + 1))}
                  >
                    +
                  </button>
                </div>

                <button className="w-100 btn btn-primary btn-lg" type="submit">
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
