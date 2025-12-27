"use client";

import { useEffect } from "react";

export default function Thank() {
  useEffect(() => {
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
