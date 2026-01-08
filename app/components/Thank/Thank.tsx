"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import client from "@/app/api/supabase/client";

export default function Thank() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");

  const updateProductData = async () => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    try {
      for (const item of cart) {
        const { error } = await client.rpc("reduce_stock", {
          p_product_id: item.id,
          p_size: item.size,
          p_quantity: item.quantity,
        });

        if (error) throw error;
      }

      const carts = cart?.map((item: any) => ({
        checkout_id: orderId,
        product_id: item.id,
        size: item.size,
        qty: item.quantity,
      }));

      const { error } = await client.from("cart").insert(carts).select();

      if (error) throw error;

      const { error: errorCheckout } = await client
        .from("checkout")
        .update({
          status: true,
          updated_at: new Date(),
        })
        .eq("id", orderId)
        .select();

      if (errorCheckout) throw errorCheckout;
    } catch (error) {
      console.error("Error:", error);
    } finally {
    }
  };

  const createOrder = async () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const shipping = JSON.parse(localStorage.getItem("shipping"));

    const { data: userData, error } = await client
      .from("profile")
      .select("*")
      .eq("name", "Admin")
      .single();
    if (error) throw error;

    try {
      const cartItems = cart?.map((c: any) => ({
        name: c.name,
        description: c.size,
        value: c.price,
        quantity: c.quantity,
        length: 30,
        width: 25,
        height: 10,
        weight: 1000,
      }));

      const response = await fetch("/api/biteship/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin_contact_name: userData?.name,
          origin_contact_phone: userData?.phone,
          origin_address: userData?.address,
          origin_postal_code: userData?.postal,
          destination_contact_name: shipping?.[0]?.name,
          destination_contact_phone: shipping?.[0]?.phone,
          destination_address: shipping?.[0]?.address,
          destination_postal_code: Number(shipping?.[0]?.postal),
          courier_company: shipping?.[0]?.company,
          courier_type: shipping?.[0]?.service,
          delivery_type: "now",
          items: cartItems,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Order Success:", data);
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    updateProductData();
    createOrder();

    localStorage.removeItem("cart");
    localStorage.removeItem("shipping");
  }, []);

  return (
    <>
      <h1 className="section-title text-center mt-4" data-aos="fade-up">
        Thank You
      </h1>
      <div
        className="col-md-6 text-center mb-5"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi
          voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus
          harum, quibusdam ex repellat eaque!
        </p>
        <a href="/" className="btn btn-dark btn-lg text-uppercase w-50">
          Home
        </a>
      </div>
    </>
  );
}
