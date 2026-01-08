"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { toast } from "react-hot-toast";
import { formatPrice } from "@/utils/format";

export default function Checkout() {
  const [carts, setCarts] = useState<any[]>([]);
  const [totals, setTotals] = useState<number>();
  const [ongkir, setOngkir] = useState<number>();

  const [ship, setShip] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postal: "",
    courier: 0,
    company: "",
    service: "",
  });
  const [courier, setCourier] = useState<any[]>([]);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [postalError, setPostalError] = useState(false);
  const [shippingError, setShippingError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShip({
      ...ship,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckShipping = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      ship?.name &&
      ship?.email &&
      ship?.phone &&
      ship?.address &&
      ship?.postal
    ) {
      setNameError(ship?.name ? false : true);
      setEmailError(ship?.email ? false : true);
      setPhoneError(ship?.phone ? false : true);
      setAddressError(ship?.address ? false : true);
      setPostalError(ship?.postal ? false : true);
      setShippingError(ship?.postal ? false : true);

      const { data: userData, error } = await client
        .from("profile")
        .select("*")
        .eq("name", "Admin")
        .single();
      if (error) throw error;

      try {
        const cartItems = carts?.map((c) => ({
          name: c.name,
          description: c.size,
          value: c.price,
          quantity: c.quantity,
          length: 30,
          width: 25,
          height: 10,
          weight: 1000,
        }));

        const response = await fetch("/api/biteship/rates", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            origin_postal_code: userData?.postal,
            destination_postal_code: Number(ship?.postal),
            couriers: process.env.NEXT_PUBLIC_BITESHIP_COURIER_AVAILABLE,
            items: cartItems,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("Shipping rates:", data);
          setCourier(data.pricing || []);
        } else {
          console.error("Error:", data.error);
          toast.error("Failed to get shipping rates");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to calculate shipping");
      }
    } else {
      setNameError(ship?.name ? false : true);
      setEmailError(ship?.email ? false : true);
      setPhoneError(ship?.phone ? false : true);
      setAddressError(ship?.address ? false : true);
      setPostalError(ship?.postal ? false : true);

      toast.error("Field has to be filled");
    }
  };

  const changeCourier = async (id: number) => {
    const ids = id - 1;

    setShip({
      ...ship,
      courier: id,
      company: courier?.[ids]?.courier_code,
      service: courier?.[ids]?.courier_service_code,
    });

    setOngkir(totals + courier?.[ids]?.price);
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      ship?.name &&
      ship?.email &&
      ship?.phone &&
      ship?.address &&
      ship?.postal &&
      ship?.courier != 0
    ) {
      setNameError(ship?.name ? false : true);
      setEmailError(ship?.email ? false : true);
      setPhoneError(ship?.phone ? false : true);
      setAddressError(ship?.address ? false : true);
      setPostalError(ship?.postal ? false : true);
      setShippingError(ship?.courier != 0 ? false : true);

      const {
        data: { user },
      } = await client.auth.getUser();

      const shipping = JSON.parse(localStorage.getItem("shipping") || "[]");

      const newShipping = {
        name: ship?.name,
        phone: ship?.phone,
        address: ship?.address,
        postal: ship?.postal,
        company: ship?.company,
        service: ship?.service,
      };

      shipping.push(newShipping);
      localStorage.setItem("shipping", JSON.stringify(shipping));

      try {
        const { data, error } = await client
          .from("checkout")
          .insert({
            total: ongkir,
            user_id: user ? user?.id : null,
            status: false,
          })
          .select();

        if (error) throw error;

        const response = await fetch("/api/midtrans", {
          method: "POST",
          body: JSON.stringify({ id: data?.[0]?.id, total: ongkir }),
        });

        const requestData = await response.json();
        window.snap.pay(requestData.token);
      } catch (err: any) {
        toast.error(err.message || "An error occurred");
      }
    } else {
      setNameError(ship?.name ? false : true);
      setEmailError(ship?.email ? false : true);
      setPhoneError(ship?.phone ? false : true);
      setAddressError(ship?.address ? false : true);
      setPostalError(ship?.postal ? false : true);
      setShippingError(ship?.courier != 0 ? false : true);

      toast.error("Field has to be filled");
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
    <div className="py-5 my-5">
      <div className="subscribe-header text-center pb-3">
        <h3 className="section-title text-uppercase">Checkout</h3>
      </div>
      <form id="form">
        {/* <div className="mb-3"> */}
        <div className="collection-item d-flex my-5 gap-3">
          <div
            className="col-md-4 column-container bg-white"
            style={{ borderRadius: "20px" }}
          >
            <h4 className="text-center my-3">Products</h4>
            <div className="collection-content p-3 m-0 m-md-3">
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
                    <small className="text-body-secondary">
                      Size: {cart?.size}
                    </small>
                  </div>
                  <big className="text-body-secondary">
                    Rp. {formatPrice(cart?.quantity * cart?.price)},-
                  </big>
                </li>
              ))}
            </div>
          </div>

          <div className="col-md-8 column-container bg-white">
            <h4
              style={{
                marginLeft: "3%",
                marginTop: "2%",
                marginBottom: "2%",
              }}
            >
              Shipping
            </h4>
            <div
              className="collection-content"
              style={{
                marginLeft: "3%",
                marginRight: "3%",
                marginBottom: "3%",
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={
                  nameError
                    ? "form-control form-control-lg mb-2 is-invalid"
                    : "form-control form-control-lg mb-2"
                }
                value={ship?.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className={
                  phoneError
                    ? "form-control form-control-lg mb-2 is-invalid"
                    : "form-control form-control-lg mb-2"
                }
                value={ship?.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className={
                  emailError
                    ? "form-control form-control-lg mb-2 is-invalid"
                    : "form-control form-control-lg mb-2"
                }
                value={ship?.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className={
                  addressError
                    ? "form-control form-control-lg mb-2 is-invalid"
                    : "form-control form-control-lg mb-2"
                }
                value={ship?.address}
                onChange={handleChange}
              />
              <div className="list-group-item d-flex mb-2">
                <input
                  type="text"
                  name="postal"
                  placeholder="Postal Code"
                  className={
                    postalError
                      ? "form-control form-control-lg w-50 is-invalid"
                      : "form-control form-control-lg w-50"
                  }
                  value={ship?.postal}
                  onChange={handleChange}
                />

                <button className="btn" onClick={handleCheckShipping}>
                  check shipping price
                </button>
              </div>
              {/* <input
                type="text"
                name="courier"
                placeholder="Courier"
                className="form-control form-control-lg mb-3"
              /> */}
              <select
                name="size"
                className={
                  shippingError
                    ? "form-control form-control-lg w-100 mb-3 is-invalid"
                    : "form-control form-control-lg w-100 mb-3"
                }
                value={ship?.courier}
                onChange={(e) => changeCourier(Number(e.target.value))}
                required
              >
                <option key={0} value={0}>
                  Choose Shipping Type
                </option>
                {courier
                  // ?.filter((size: any) => size?.product_id === cart?.id)
                  ?.map((c: any, index: number) => (
                    <option key={index + 1} value={index + 1}>
                      {c?.courier_name} {c?.courier_service_name} Rp.{" "}
                      {formatPrice(c?.price)},- ({c?.duration})
                    </option>
                  ))}
              </select>
              <div className="list-group-item d-flex justify-content-between">
                <big>
                  <strong>Total</strong>{" "}
                  <strong>
                    {ongkir
                      ? `Rp. ${formatPrice(ongkir)},-`
                      : `Rp. ${formatPrice(totals)},-`}
                  </strong>
                </big>

                <button
                  className="btn btn-dark text-uppercase w-25"
                  onClick={handleCheckout}
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
}
