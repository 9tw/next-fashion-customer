"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import client from "@/app/api/supabase/client";

export default function Thank() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");

  const updateProductData = async () => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    for (const item of cart) {
      const { error } = await client.rpc("reduce_stock", {
        p_product_id: item.id,
        p_size: item.size,
        p_quantity: item.quantity,
      });

      if (error) throw error;
    }

    const carts = cart.map((item: any) => ({
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
  };

  useEffect(() => {
    updateProductData();
    localStorage.removeItem("cart");
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
