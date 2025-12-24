"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Cart() {
  const router = useRouter();

  const [carts, setCarts] = useState<any[]>([]);
  const [totals, setTotals] = useState<number>();

  const formatPrice = (price: number) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCarts(cart);

    let total = 0;
    cart?.map((c: any) => {
      total += c?.price;
    });
    setTotals(total);
  }, []);

  return (
    <>
      <div className="order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your Cart</span>
          {/* <span className="badge bg-primary rounded-pill">{carts.length}</span> */}
        </h4>
        <ul className="list-group mb-3">
          {carts?.map((cart: any, index: number) => (
            <li
              className="list-group-item d-flex justify-content-between lh-sm"
              key={index}
            >
              <div>
                <h6 className="my-0">
                  {cart?.name} {cart?.quantity}X
                </h6>
                <small className="text-body-secondary">
                  Size: {cart?.size}
                </small>
              </div>
              <span className="text-body-secondary">
                Rp. {formatPrice(cart?.price)},-
              </span>
            </li>
          ))}
          {/* <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Growers cider</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Fresh grapes</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Heinz tomato ketchup</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$5</span>
          </li> */}
          <li className="list-group-item d-flex justify-content-between">
            <span>Total</span>
            <strong> Rp. {formatPrice(totals)},-</strong>
          </li>
        </ul>
        <button
          className="w-100 btn btn-primary btn-lg"
          onClick={() => router.push("/checkout")}
        >
          Checkout
        </button>
      </div>
    </>
  );
}
