"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";

export default function Category() {
  const [categories, setCategories] = useState<any[]>([]);

  const getCategory = async () => {
    let { data: category, error } = await client
      .from("category")
      .select("*")
      .neq("created_by", null);

    setCategories(category || []);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <section className="categories overflow-hidden">
        <div className="container">
          <div className="open-up" data-aos="zoom-out">
            <div className="row">
              {categories?.map((category: any, index: number) => (
                <div className="col-md-4" key={index}>
                  <div className="cat-item image-zoom-effect">
                    <div className="image-holder">
                      <a href={"/clothing?id=" + category?.id}>
                        <img
                          src="images/product-item-10.jpg"
                          alt="categories"
                          className="product-image img-fluid"
                        />
                      </a>
                    </div>
                    <div className="category-content">
                      <div className="product-button">
                        {/* <a
                        href="index.html"
                        className="btn btn-common text-uppercase"
                      > */}
                        {category?.name}
                        {/* </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="col-md-4">
                <div className="cat-item image-zoom-effect">
                  <div className="image-holder">
                    <a href="/bottoms">
                      <img
                        src="images/product-item-3.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                  </div>
                  <div className="category-content">
                    <div className="product-button">
                      <a
                        href="index.html"
                        className="btn btn-common text-uppercase"
                      >
                      Bottoms
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cat-item image-zoom-effect">
                  <div className="image-holder">
                    <a href="/dresses">
                      <img
                        src="images/product-item-5.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                  </div>
                  <div className="category-content">
                    <div className="product-button">
                      <a
                        href="index.html"
                        className="btn btn-common text-uppercase"
                      >
                      Dress
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
