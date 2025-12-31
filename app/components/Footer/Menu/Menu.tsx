"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";

export default function Menu() {
  const [categories, setCategories] = useState<any[]>([]);
  const [collection, setCollection] = useState<any>();
  const [prive, setPrive] = useState<any>();

  const getCategory = async () => {
    let { data: category, error } = await client.from("category").select("*");

    setCategories(category.filter((cat) => cat.created_by !== null));
    setCollection(category?.find((cat) => cat.name === "New Collections"));
    setPrive(category?.find((cat) => cat.name === "Prive"));
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="col-md-3 col-sm-6">
      <div className="footer-menu footer-menu-002">
        <h5 className="widget-title text-uppercase mb-4">Quick Links</h5>
        <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
          <li className="menu-item">
            <a href="/" className="item-anchor">
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href={"/clothing?id=" + collection?.id} className="item-anchor">
              New Collections
            </a>
          </li>
          {categories?.map((category: any, index: number) => (
            <li key={index} className="menu-item">
              <a href={"/clothing?id=" + category?.id} className="item-anchor">
                {category?.name}
              </a>
            </li>
          ))}
          <li className="menu-item">
            <a href={"/clothing?id=" + prive?.id} className="item-anchor">
              Privé
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
