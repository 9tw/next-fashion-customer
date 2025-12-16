"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/client";
import { useSearchParams } from "next/navigation";

export default function Header() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [categories, setCategories] = useState<any[]>([]);

  const getCategory = async () => {
    let { data: category, error } = await client
      .from("category")
      .select("*")
      .eq("id", id)
      .single();

    setCategories(category);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        <h1 className="section-title text-center mt-4" data-aos="fade-up">
          {categories?.name}
        </h1>
        <div
          className="col-md-6 text-center"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi
            voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus
            harum, quibusdam ex repellat eaque!
          </p>
        </div>
      </div>
    </>
  );
}
