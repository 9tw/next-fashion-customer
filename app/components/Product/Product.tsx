"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { formatPrice } from "@/utils/format";
import Add from "../Navbars/Add/Add";

export default function Product() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const [product, setProduct] = useState<any[]>([]);

  const getProduct = async () => {
    let { data, error } = await client
      .from("product")
      .select("*")
      .eq("id", productId)
      .single();

    setProduct(data || []);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
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
                  {product?.name}
                </h3>
                <p>{product?.description}</p>
                <a
                  href="#"
                  className="btn btn-dark text-uppercase mt-3"
                  data-after="Add to cart"
                  onClick={() => setProduct(product)}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSize"
                  aria-controls="offcanvasSize"
                >
                  add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Add p={product} />
    </section>
  );
}
