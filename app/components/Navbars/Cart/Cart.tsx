"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
import client from "@/app/api/supabase/client";
import { formatPrice } from "@/utils/format";

export default function Cart() {
  const router = useRouter();

  const [carts, setCarts] = useState<any[]>([]);
  const [totals, setTotals] = useState<number>();
  const [trigger, setTrigger] = useState(true);
  const [sizes, setSizes] = useState<any[]>([]);

  const getSizes = async () => {
    let { data: size, error } = await client.from("size").select("*");
    setSizes(size || []);
  };

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCarts(cart);

    let total = 0;
    cart?.map((c: any) => {
      total += c?.quantity * c?.price;
    });
    setTotals(total);
  };

  const increaseQuantity = (productId: string, size: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const itemIndex = cart.findIndex(
      (item: any) => item.id === productId && item.size === size
    );

    const product = sizes.find(
      (item) => item.product_id === productId && item.name === size
    );

    if (itemIndex > -1 && cart[itemIndex].quantity < product.qty) {
      cart[itemIndex].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    setTrigger(!trigger);
  };

  const decreaseQuantity = (productId: string, size: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const itemIndex = cart.findIndex(
      (item: any) => item.id === productId && item.size === size
    );

    if (itemIndex > -1 && cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    setTrigger(!trigger);
  };

  const changeSize = (productId: string, size: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const itemIndex = cart.findIndex((item: any) => item.id === productId);
    cart[itemIndex].size = size;
    cart[itemIndex].quantity = 1;
    localStorage.setItem("cart", JSON.stringify(cart));

    setTrigger(!trigger);
  };

  const removeFromCart = (productId: string, size: string) => {
    const newCart = carts.filter(
      (item) => item.id !== productId || item.size !== size
    );
    setCarts(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    setTrigger(!trigger);
  };

  useEffect(() => {
    loadCart();
  }, [trigger]);

  useEffect(() => {
    const offcanvasElement = document.getElementById("offcanvasCart");

    const handleOffcanvasShow = () => {
      console.log("OffcanvasCart opened - reloading cart");
      loadCart();
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
  }, []);

  useEffect(() => {
    getSizes();
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
                <h5 className="my-0">{cart?.name}</h5>
                <div className="d-flex">
                  <small
                    className="text-body-secondary mt-2"
                    style={{ marginRight: "5%" }}
                  >
                    Size:
                  </small>
                  <select
                    name="size"
                    className="form-control form-control-md w-50"
                    value={cart?.size}
                    onChange={(e) => changeSize(cart?.id, e.target.value)}
                    required
                  >
                    {/* <option key={cart?.size} value={cart?.size}>
                      {cart?.size}
                    </option> */}
                    {sizes
                      ?.filter((size: any) => size?.product_id === cart?.id)
                      .map((size: any) => (
                        <option key={size?.name} value={size?.name}>
                          {size?.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2 mb-3 w-50">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => decreaseQuantity(cart?.id, cart?.size)}
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
                    onClick={() => increaseQuantity(cart?.id, cart?.size)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-body-secondary">
                <span>Rp. {formatPrice(cart?.quantity * cart?.price)},-</span>
                <span
                  data-tooltip-id="tooltip"
                  data-tooltip-content="Delete"
                  style={{ marginLeft: "10px" }}
                  onClick={() => removeFromCart(cart?.id, cart?.size)}
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
