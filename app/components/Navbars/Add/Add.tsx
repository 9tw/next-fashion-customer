"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { toast } from "react-hot-toast";
import { formatPrice } from "@/utils/format";

export default function Add({ p }: { p: any }) {
  const [sizes, setSizes] = useState<any[]>([]);
  const [qty, setQty] = useState(1);
  const [qtyMax, setMax] = useState(1);

  const getSizes = async () => {
    let { data: size, error } = await client
      .from("size")
      .select("*")
      .eq("product_id", p?.id);

    setSizes(size || []);
  };

  const changeSize = (productId: string, size: string) => {
    const product = sizes.find(
      (item) => item.product_id === productId && item.name === size
    );
    setQty(1);
    setMax(product.qty);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const size = formData.get("size");
    const quantity = qty;

    addToCart(p, size, quantity);
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

  //   useEffect(() => {
  //     getSizes();
  //   }, [p]);

  useEffect(() => {
    const offcanvasElement = document.getElementById("offcanvasSize");

    const handleOffcanvasShow = () => {
      console.log("OffcanvasSize opened - reloading cart");
      getSizes();
    };

    offcanvasElement?.addEventListener(
      "shown.bs.offcanvas",
      handleOffcanvasShow
    );

    return () => {
      offcanvasElement?.removeEventListener(
        "shown.bs.offcanvas",
        handleOffcanvasShow
      );
    };
  }, [p]);

  return (
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
            <span className="text-primary">{p?.name}</span>
            <span className="badge bg-primary rounded-pill">
              Rp. {formatPrice(p?.price)},-
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
              onChange={(e) => changeSize(p?.id, e.target.value)}
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
                onClick={() => setQty(Math.min(qtyMax, qty + 1))}
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
  );
}
