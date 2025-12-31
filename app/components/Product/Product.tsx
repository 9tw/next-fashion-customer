"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { useSearchParams } from "next/navigation";
import Add from "../Navbars/Add/Add";
import { SafeHTML } from "@/utils/format";

export default function Product() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const [product, setProduct] = useState<any[]>([]);
  const [photos, setPhotos] = useState<any[]>([]);

  const getProduct = async () => {
    let { data: productData } = await client
      .from("product")
      .select("*")
      .eq("id", productId)
      .single();

    let { data: photoData } = await client
      .from("photo")
      .select("*")
      .eq("product_id", productId);

    setProduct(productData || []);
    setPhotos(photoData || []);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Sample product images - replace with your actual images
  //   const images = [
  //     "images/product-item-1.jpg",
  //     "images/product-item-2.jpg",
  //     "images/product-item-3.jpg",
  //     "images/product-item-4.jpg",
  //   ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos?.length - 1 : prev - 1));
    setIsZoomed(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos?.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <section className="collection bg-light position-relative py-5">
      <div className="container">
        <div className="row">
          {/* <div className="title-xlarge text-uppercase txt-fx domino">
            Collection
          </div> */}
          <div className="collection-item d-flex flex-wrap my-5">
            <div className="col-md-6 column-container">
              {/* <div className="image-holder">
                <img
                  src="images/single-image-2.jpg"
                  alt="collection"
                  className="product-image img-fluid"
                />
              </div> */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "20px",
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                {/* Thumbnail Column - Small */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    width: "100px",
                    flexShrink: 0,
                  }}
                >
                  {photos?.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => selectImage(index)}
                      style={{
                        cursor: "pointer",
                        border:
                          currentIndex === index
                            ? "3px solid #dc3545"
                            : "2px solid #e0e0e0",
                        borderRadius: "8px",
                        overflow: "hidden",
                        aspectRatio: "3/4",
                        position: "relative",
                        transition: "all 0.2s",
                        opacity: currentIndex === index ? 1 : 0.6,
                      }}
                    >
                      <img
                        src={image?.path}
                        alt={`Thumbnail ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Main Image Column - Large with Zoom */}
                <div style={{ flex: 1, position: "relative" }}>
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "12px",
                      overflow: "hidden",
                      aspectRatio: "3/4",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Main Image with Zoom */}
                    <div
                      onMouseMove={handleMouseMove}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        cursor: "zoom-in",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={photos[currentIndex]?.path}
                        alt={`Product ${currentIndex + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: isZoomed ? "none" : "transform 0.3s ease",
                          transform: isZoomed ? "scale(2)" : "scale(1)",
                          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                        }}
                      />
                    </div>

                    {/* Previous Arrow */}
                    <button
                      onClick={goToPrevious}
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "48px",
                        height: "48px",
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                        transition: "all 0.2s",
                        opacity: 0.2,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.4")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "0.2")
                      }
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>

                    {/* Next Arrow */}
                    <button
                      onClick={goToNext}
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "48px",
                        height: "48px",
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                        transition: "all 0.2s",
                        opacity: 0.2,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.4")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "0.2")
                      }
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>

                    {/* Image Counter */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        color: "white",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "500",
                        zIndex: 10,
                      }}
                    >
                      {currentIndex + 1} / {photos?.length}
                    </div>

                    {/* Zoom Indicator */}
                    {/* {isZoomed && (
                      <div
                        style={{
                          position: "absolute",
                          top: "16px",
                          right: "16px",
                          backgroundColor: "rgba(0,0,0,0.6)",
                          color: "white",
                          padding: "8px 12px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "500",
                          zIndex: 10,
                        }}
                      >
                        🔍 Zoomed
                      </div>
                    )} */}
                  </div>

                  {/* Zoom Instruction Text */}
                  {/* <p
                    style={{
                      textAlign: "center",
                      marginTop: "12px",
                      color: "#666",
                      fontSize: "14px",
                      fontStyle: "italic",
                    }}
                  >
                    Hover over image to zoom
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 column-container bg-white">
              <div className="collection-content p-5 m-0 m-md-5">
                <h3 className="element-title text-uppercase">
                  {product?.name}
                </h3>
                {/* <p>{product?.description}</p> */}
                <div>
                  <SafeHTML
                    html={product?.description}
                    className="product-description"
                  />
                </div>
                <a
                  href="#"
                  className="btn btn-dark text-uppercase mt-3"
                  data-after="Add to cart"
                  onClick={() => setProduct(product)}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSize"
                  aria-controls="offcanvasSize"
                >
                  add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Add p={product} />
    </section>
  );
}
