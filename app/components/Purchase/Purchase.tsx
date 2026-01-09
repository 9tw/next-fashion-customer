"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import client from "@/app/api/supabase/client";
import { formatPrice, formatDate } from "@/utils/format";

export default function Purchase() {
  const [orders, setOrders] = useState([]);

  const getPurchase = async () => {
    const {
      data: { user },
    } = await client.auth.getUser();

    const { data: history, error } = await client
      .from("checkout")
      .select("*")
      .eq("user_id", user?.id);

    let orderItem = [];

    for (const item of history) {
      try {
        const response = await fetch(
          `/api/biteship/order?id=${item.shipping_id}`,
          {
            method: "GET",
          }
        );

        const data = await response.json();

        if (response.ok) {
          console.log("Successfully get your orders");
          orderItem.push({
            id: item?.shipping_id,
            name: data?.destination?.contact_name,
            phone: data?.destination?.contact_phone,
            address: data?.destination?.address,
            date: item?.created_at,
            total: item?.total,
            status: data?.status,
          });
        } else {
          console.error("Error:", data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    setOrders((prev) => [...prev, ...orderItem]);
  };

  useEffect(() => {
    getPurchase();
  }, []);

  const getStatusBadge = (status: string) => {
    const statusConfig: any = {
      confirmed: { text: "Confirm", bg: "#8b5cf6", color: "white" },
      allocated: { text: "Picked Up", bg: "#4A90E2", color: "white" },
      pickingUp: { text: "Picked Up", bg: "#4A90E2", color: "white" },
      picked: { text: "Picked Up", bg: "#4A90E2", color: "white" },
      droppingOff: { text: "Shipping", bg: "#F5A623", color: "white" },
      returnInTransit: { text: "Return", bg: "#ef4444", color: "white" },
      onHold: { text: "On Hold", bg: "#475569", color: "white" },
      delivered: { text: "Delivered", bg: "#10b981", color: "white" },
      rejected: { text: "Reject", bg: "#ef4444", color: "white" },
      courierNotFound: { text: "Reject", bg: "#ef4444", color: "white" },
      returned: { text: "Return", bg: "#ef4444", color: "white" },
      cancelled: { text: "Cancel", bg: "#ef4444", color: "white" },
      disposed: { text: "Dispose", bg: "#ef4444", color: "white" },
    };

    const config = statusConfig[status] || statusConfig.ordered;

    return (
      <span
        style={{
          backgroundColor: config ? config.bg : null,
          color: config ? config.color : null,
          padding: "8px 20px",
          borderRadius: "20px",
          fontSize: "14px",
          fontWeight: "500",
          display: "inline-block",
        }}
      >
        {config ? config.text : null}
      </span>
    );
  };

  return (
    <section className="newsletter bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="section-title text-center mt-4" data-aos="fade-up">
            Purchase History
          </h1>
          <div className="my-5 mb-5" data-aos="fade-up" data-aos-delay={300}>
            {/* Table Container */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              {/* Table Header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "200px 150px 150px 200px 125px 125px 200px",
                  gap: "20px",
                  padding: "20px 30px",
                  backgroundColor: "#f9fafb",
                  borderBottom: "1px solid #e5e7eb",
                  fontWeight: "500",
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                <div>Order No.</div>
                <div>Name</div>
                <div>Phone</div>
                <div>Address</div>
                <div>Order Date</div>
                <div>Status</div>
                <div>Total</div>
              </div>

              {/* Table Rows */}
              {orders.map((order, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "200px 150px 150px 200px 125px 125px 200px",
                    gap: "20px",
                    padding: "25px 30px",
                    borderBottom:
                      index < orders.length - 1 ? "1px solid #f3f4f6" : "none",
                    backgroundColor: index % 2 === 0 ? "#fafaf8" : "#f5f5f0",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {order?.id}
                  </div>
                  <div style={{ color: "#374151" }}>{order?.name}</div>
                  <div style={{ color: "#374151" }}>{order?.phone}</div>
                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {order?.address}
                  </div>
                  <div style={{ color: "#374151", fontSize: "14px" }}>
                    {formatDate(order?.date)}
                  </div>
                  <div>{getStatusBadge(order?.status)}</div>
                  <div style={{ fontWeight: "600", color: "#374151" }}>
                    Rp. {formatPrice(order?.total)},-
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
