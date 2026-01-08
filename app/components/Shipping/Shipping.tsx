"use client";

import { useState } from "react";

export default function Shipping() {
  const [wayBill, setWayBill] = useState("");
  const [track, setTrack] = useState(false);

  return (
    <section className="newsletter bg-light">
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-4">
            <div className="subscribe-header text-center pb-3">
              <h3 className="section-title text-uppercase">Track Shipping</h3>
            </div>
            <form id="form" className="d-flex flex-wrap gap-2">
              <>
                <input
                  type="text"
                  name="waybill"
                  placeholder="Tracking Id"
                  className="form-control form-control-lg"
                  value={wayBill}
                  onChange={(e) => setWayBill(e.target.value)}
                />
              </>
              <button
                type="button"
                className="btn btn-dark btn-lg text-uppercase w-100"
                onClick={() => setTrack(true)}
              >
                Submit
              </button>
            </form>
          </div>

          {track ? (
            <iframe
              className="my-5"
              src={`https://track.biteship.com/${wayBill}`}
              style={{
                width: "100%",
                height: "600px",
                border: "none",
                borderRadius: "8px",
              }}
              title="Track Shipping"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
