"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

export default function Cart() {
  const router = useRouter();

  const [carts, setCarts] = useState<any[]>([]);
  const [totals, setTotals] = useState<number>();
  const [trigger, setTrigger] = useState(true);

  const formatPrice = (price: number) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Increase quantity
  const increaseQuantity = (productId: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const itemIndex = cart.findIndex((item: any) => item.id === productId);

    if (itemIndex > -1) {
      cart[itemIndex].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    setTrigger(!trigger);
  };

  // Decrease quantity
  const decreaseQuantity = (productId: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const itemIndex = cart.findIndex((item: any) => item.id === productId);

    if (itemIndex > -1) {
      if (cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity -= 1;
      } else {
        // Remove item if quantity becomes 0
        cart.splice(itemIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    setTrigger(!trigger);
  };

  const removeFromCart = (productId: string) => {
    const newCart = carts.filter((item) => item.id !== productId);
    setCarts(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCarts(cart);

    let total = 0;
    cart?.map((c: any) => {
      total += c?.price;
    });
    setTotals(total);
  }, [trigger]);

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
                <h5 className="my-0">{cart?.name}</h5>
                <small className="text-body-secondary">
                  Size: {cart?.size}
                </small>
                <div className="d-flex align-items-center gap-2 mt-2 mb-3 w-50">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => decreaseQuantity(cart?.id)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="qty"
                    value={cart?.quantity}
                    readOnly
                    className="form-control form-control-sm text-center"
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => increaseQuantity(cart?.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-body-secondary">
                <span>Rp. {formatPrice(cart?.price)},-</span>
                <span
                  data-tooltip-id="tooltip"
                  data-tooltip-content="Delete"
                  style={{ marginLeft: "10px" }}
                  onClick={() => removeFromCart(cart?.id)}
                >
                  <FontAwesomeIcon icon={faTrash} size="sm" />
                </span>
              </div>
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

      <Tooltip
        id="tooltip"
        place="top"
        style={{ backgroundColor: "primary", borderRadius: "0.5rem" }}
      />
    </>
  );
}
