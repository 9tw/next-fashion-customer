"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { toast } from "react-hot-toast";
import { formatPrice } from "@/utils/format";

export default function Checkout() {
  const [carts, setCarts] = useState<any[]>([]);
  const [totals, setTotals] = useState<number>();

  const handleCheckout = async () => {
    try {
      const { data, error } = await client
        .from("checkout")
        .insert({ total: totals, status: false })
        .select();

      if (error) throw error;

      const response = await fetch("/api/midtrans", {
        method: "POST",
        body: JSON.stringify({ id: data?.id, total: totals }),
      });

      const requestData = await response.json();
      window.snap.pay(requestData.token);
    } catch (err: any) {
      toast.error(err.message || "An error occurred");
    }
  };

  useEffect(() => {
    const snapScript = process.env.NEXT_PUBLIC_API;
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;

    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCarts(cart);

    let total = 0;
    cart?.map((c: any) => {
      total += c?.quantity * c?.price;
    });
    setTotals(total);
  }, []);

  return (
    <div className="col-md-6 py-5 my-5">
      <div className="subscribe-header text-center pb-3">
        <h3 className="section-title text-uppercase">Checkout</h3>
      </div>
      {/* <form id="form" className="d-flex flex-wrap gap-2">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="form-control form-control-lg"
        />
        <input
          type="text"
          name="no"
          placeholder="Phone Number"
          className="form-control form-control-lg"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="form-control form-control-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control form-control-lg"
        />
        <input
          type="password"
          name="verifyPassword"
          placeholder="Re-enter Password"
          className="form-control form-control-lg"
        /> */}
      <div className="mb-3">
        {carts?.map((cart: any, index: number) => (
          <li
            className="list-group-item d-flex justify-content-between lh-sm"
            key={index}
            style={{ marginBottom: "15px" }}
          >
            <div>
              <h5 className="my-0">
                {cart?.name} {cart?.quantity}X
              </h5>
              <small className="text-body-secondary">Size: {cart?.size}</small>
            </div>
            <big className="text-body-secondary">
              Rp. {formatPrice(cart?.quantity * cart?.price)},-
            </big>
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between">
          <big>
            <strong>Total</strong>
          </big>
          <big>
            <strong>Rp. {formatPrice(totals)},-</strong>
          </big>
        </li>
      </div>
      <button
        className="btn btn-dark btn-lg text-uppercase w-100"
        onClick={() => handleCheckout()}
      >
        Pay
      </button>
      {/* </form> */}
    </div>
  );
}
