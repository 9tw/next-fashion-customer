"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function New() {
  const [products, setProducts] = useState<any[]>([]);

  const getNewCollections = async () => {
    let { data } = await client
      .from("category")
      .select("*")
      .eq("name", "New Collections")
      .single();

    let { data: product, error } = await client
      .from("product")
      .select(
        `*,
        photo (
          id, path
        )`
      )
      .eq("category_id", data?.id)
      .limit(1, { foreignTable: "photo" })
      .limit(6);

    setProducts(product || []);
  };

  useEffect(() => {
    getNewCollections();
  }, []);

  return (
    <section id="billboard" className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="section-title text-center mt-4" data-aos="fade-up">
            New Collections
          </h1>
          <div
            className="col-md-6 text-center"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              voluptas ut dolorum consequuntur, adipisci repellat! Eveniet
              commodi voluptatem voluptate, eum minima, in suscipit explicabo
              voluptatibus harum, quibusdam ex repellat eaque!
            </p>
          </div>
        </div>
        <div className="row">
          {/* <div
        className="swiper main-swiper py-4"
        data-aos="fade-up"
        data-aos-delay={600}
      > */}
          {products?.map((product: any, index: number) => (
            <div
              key={index}
              className="swiper-wrapper d-flex border-animation-left"
            >
              <div className="swiper-slide">
                <div className="banner-item image-zoom-effect">
                  <div className="image-holder">
                    <a href={"/details?id=" + product?.id}>
                      <img
                        src={product?.photo[0]?.path}
                        alt="product"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                    </a>
                  </div>
                  <div className="banner-content py-4">
                    <h5 className="element-title text-uppercase">
                      <a href="#" className="item-anchor">
                        {product?.name}
                      </a>
                    </h5>
                    {/* <p>
                    Scelerisque duis aliquam qui lorem ipsum dolor amet,
                    consectetur adipiscing elit.
                  </p> */}
                    <div className="btn-left">
                      <a
                        href={"/details?id=" + product?.id}
                        className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="swiper-pagination" />
          {/* </div> */}
          <div className="icon-arrow icon-arrow-left">
            <div style={{ width: 24, height: "65%" }}>
              <FontAwesomeIcon icon={faArrowLeft} size="sm" />
            </div>
          </div>
          <div className="icon-arrow icon-arrow-right">
            <div style={{ width: 24, height: "65%" }}>
              <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
