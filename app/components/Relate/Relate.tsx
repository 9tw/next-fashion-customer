"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { useSearchParams } from "next/navigation";
import { formatPrice } from "@/utils/format";
import Add from "../Navbars/Add/Add";

export default function Relate() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const [products, setProducts] = useState<any[]>([]);
  const [product, setProduct] = useState<any>();

  const getProductRelate = async () => {
    let { data } = await client
      .from("product")
      .select("*")
      .eq("id", productId)
      .single();

    let { data: product, error } = await client
      .from("product")
      .select(
        `*,
        photo (
          id, path
        )
        `
      )
      .eq("category_id", data?.category_id)
      .neq("id", productId)
      .limit(1, { foreignTable: "photo" })
      .limit(4);

    setProducts(product || []);
  };

  useEffect(() => {
    getProductRelate();
  }, []);

  return (
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
        </div>
      </div>
      <Add p={product} />
    </section>
  );
}
