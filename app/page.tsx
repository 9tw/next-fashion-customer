import Image from "next/image";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbars/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faSolidRegular,
  faArrowLeft,
  faArrowRight,
  faCalendar,
  faShoppingBag,
  faGift,
  faSync,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
    <>
      <Navbar />

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
            <div
              className="swiper main-swiper py-4"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="swiper-wrapper d-flex border-animation-left">
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src="images/banner-image-6.jpg"
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Soft leather jackets
                        </a>
                      </h5>
                      <p>
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src="images/banner-image-1.jpg"
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Soft leather jackets
                        </a>
                      </h5>
                      <p>
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src="images/banner-image-2.jpg"
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Soft leather jackets
                        </a>
                      </h5>
                      <p>
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src="images/banner-image-3.jpg"
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Soft leather jackets
                        </a>
                      </h5>
                      <p>
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src="images/banner-image-4.jpg"
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Out crop sweater
                        </a>
                      </h5>
                      <p>
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src="images/banner-image-5.jpg"
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Soft leather jackets
                        </a>
                      </h5>
                      <p>
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
            <div className="icon-arrow icon-arrow-left">
              <div style={{ width: 24, height: "65%" }}>
                <FontAwesomeIcon icon={faArrowLeft} size="10x" />
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
      <section className="features py-5">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-aos-delay={0}
            >
              <div className="py-5">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: 38, height: 38 }}>
                    <FontAwesomeIcon icon={faCalendar} size="sm" />
                  </div>
                </div>
                <h4 className="element-title text-capitalize my-3">
                  Book An Appointment
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies
                  quis.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-aos-delay={300}
            >
              <div className="py-5">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: 38, height: 38 }}>
                    <FontAwesomeIcon icon={faShoppingBag} size="sm" />
                  </div>
                </div>
                <h4 className="element-title text-capitalize my-3">
                  Pick up in store
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies
                  quis.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-aos-delay={600}
            >
              <div className="py-5">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: 38, height: 38 }}>
                    <FontAwesomeIcon icon={faGift} size="sm" />
                  </div>
                </div>
                <h4 className="element-title text-capitalize my-3">
                  Special packaging
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies
                  quis.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-aos-delay={900}
            >
              <div className="py-5">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: 38, height: 38 }}>
                    <FontAwesomeIcon icon={faSync} size="sm" />
                  </div>
                </div>
                <h4 className="element-title text-capitalize my-3">
                  free global returns
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies
                  quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="categories overflow-hidden">
        <div className="container">
          <div className="open-up" data-aos="zoom-out">
            <div className="row">
              <div className="col-md-4">
                <div className="cat-item image-zoom-effect">
                  <div className="image-holder">
                    <a href="/tops">
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
                      Tops
                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
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
                      {/* <a
                        href="index.html"
                        className="btn btn-common text-uppercase"
                      > */}
                      Bottoms
                      {/* </a> */}
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
                      {/* <a
                        href="index.html"
                        className="btn btn-common text-uppercase"
                      > */}
                      Dress
                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        id="new-arrival"
        className="new-arrival product-carousel py-5 position-relative overflow-hidden"
      >
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
            <h4 className="text-uppercase">Our New Arrivals</h4>
            <a href="index.html" className="btn-link">
              View All Products
            </a>
          </div>
          <div className="swiper product-swiper open-up" data-aos="zoom-out">
            <div className="swiper-wrapper d-flex">
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder position-relative">
                    <a href="index.html">
                      <img
                        src="images/product-item-1.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="element-title text-uppercase fs-5 mt-3">
                        <a href="index.html">Dark florish onepiece</a>
                      </h5>
                      <a
                        href="#"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$95.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder position-relative">
                    <a href="index.html">
                      <img
                        src="images/product-item-2.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Baggy Shirt</a>
                      </h5>
                      <a
                        href="#"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$55.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder position-relative">
                    <a href="index.html">
                      <img
                        src="images/product-item-3.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Cotton off-white shirt</a>
                      </h5>
                      <a
                        href="#"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$65.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder position-relative">
                    <a href="index.html">
                      <img
                        src="images/product-item-4.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Crop sweater</a>
                      </h5>
                      <a
                        href="#"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$50.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder position-relative">
                    <a href="index.html">
                      <img
                        src="images/product-item-10.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Crop sweater</a>
                      </h5>
                      <a
                        href="#"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$70.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
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
      </section>
      <section className="collection bg-light position-relative py-5">
        <div className="container">
          <div className="row">
            <div className="title-xlarge text-uppercase txt-fx domino">
              Collection
            </div>
            <div className="collection-item d-flex flex-wrap my-5">
              <div className="col-md-6 column-container">
                <div className="image-holder">
                  <img
                    src="images/single-image-2.jpg"
                    alt="collection"
                    className="product-image img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6 column-container bg-white">
                <div className="collection-content p-5 m-0 m-md-5">
                  <h3 className="element-title text-uppercase">
                    Classic winter collection
                  </h3>
                  <p>
                    Dignissim lacus, turpis ut suspendisse vel tellus. Turpis
                    purus, gravida orci, fringilla a. Ac sed eu fringilla odio
                    mi. Consequat pharetra at magna imperdiet cursus ac faucibus
                    sit libero. Ultricies quam nunc, lorem sit lorem urna,
                    pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar
                    commodo mollis diam sed facilisis at cursus imperdiet cursus
                    ac faucibus sit faucibus sit libero.
                  </p>
                  <a href="#" className="btn btn-dark text-uppercase mt-3">
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        id="best-sellers"
        className="best-sellers bg-light product-carousel py-5 position-relative overflow-hidden"
      >
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
            <h4 className="text-uppercase">Best Selling Items</h4>
            <a href="index.html" className="btn-link">
              View All Products
            </a>
          </div>
          <div className="swiper product-swiper open-up" data-aos="zoom-out">
            <div className="swiper-wrapper d-flex">
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src="images/product-item-4.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Dark florish onepiece</a>
                      </h5>
                      <a
                        href="index.html"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$95.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src="images/product-item-3.jpg"
                        alt="product"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Baggy Shirt</a>
                      </h5>
                      <a
                        href="index.html"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$55.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src="images/product-item-5.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Cotton off-white shirt</a>
                      </h5>
                      <a
                        href="index.html"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$65.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src="images/product-item-6.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Handmade crop sweater</a>
                      </h5>
                      <a
                        href="index.html"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$50.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src="images/product-item-9.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Dark florish onepiece</a>
                      </h5>
                      <a
                        href="index.html"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$70.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src="images/product-item-10.jpg"
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Cotton off-white shirt</a>
                      </h5>
                      <a
                        href="index.html"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$70.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
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
      </section>
      <section className="video py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="video-content open-up" data-aos="zoom-out">
              <div className="video-bg">
                <img
                  src="images/video-image.jpg"
                  alt="video"
                  className="video-image img-fluid"
                />
              </div>
              <div className="video-player">
                <a
                  className="youtube"
                  href="https://www.youtube.com/embed/pjtsGzQjFM4"
                >
                  <FontAwesomeIcon icon={faPlay} style={{ width: "10%" }} />
                  <img
                    src="images/text-pattern.png"
                    alt="pattern"
                    className="text-rotate"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials py-5 bg-light">
        <div className="section-header text-center mt-5">
          <h3 className="section-title">WE LOVE GOOD COMPLIMENT</h3>
        </div>
        <div className="swiper testimonial-swiper overflow-hidden my-5">
          <div className="swiper-wrapper d-flex">
            <div className="swiper-slide">
              <div className="testimonial-item text-center">
                <blockquote>
                  <p>
                    “More than expected crazy soft, flexible and best fitted
                    white simple denim shirt.”
                  </p>
                  <div className="review-title text-uppercase">casual way</div>
                </blockquote>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item text-center">
                <blockquote>
                  <p>
                    “Best fitted white denim shirt more than expected crazy
                    soft, flexible
                  </p>
                  <div className="review-title text-uppercase">uptop</div>
                </blockquote>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item text-center">
                <blockquote>
                  <p>
                    “Best fitted white denim shirt more white denim than
                    expected flexible crazy soft.”
                  </p>
                  <div className="review-title text-uppercase">Denim craze</div>
                </blockquote>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item text-center">
                <blockquote>
                  <p>
                    “Best fitted white denim shirt more than expected crazy
                    soft, flexible
                  </p>
                  <div className="review-title text-uppercase">uptop</div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-swiper-pagination d-flex justify-content-center mb-5" />
      </section>

      {/* <section
        id="related-products"
        className="related-products product-carousel py-5 position-relative overflow-hidden"
      >
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
            <h4 className="text-uppercase">You May Also Like</h4>
            <a href="index.html" className="btn-link">
              View All Products
            </a>
          </div>
          <div className="swiper product-swiper open-up" data-aos="zoom-out">
            <div className="swiper-wrapper d-flex">
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src="images/product-item-5.jpg"
                        alt="product"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Dark florish onepiece</a>
                      </h5>
                      <a
                        href="index.html"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$95.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src="images/product-item-6.jpg"
                        alt="product"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Baggy Shirt</a>
                      </h5>
                      <a
                        href="index.html"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$55.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src="images/product-item-7.jpg"
                        alt="product"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Cotton off-white shirt</a>
                      </h5>
                      <a
                        href="index.html"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$65.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src="images/product-item-8.jpg"
                        alt="product"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Handmade crop sweater</a>
                      </h5>
                      <a
                        href="index.html"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$50.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src="images/product-item-1.jpg"
                        alt="product"
                        className="product-image img-fluid"
                      />
                    </a>
                    <a href="index.html" className="btn-icon btn-wishlist">
                      <div style={{ width: 24, height: 24 }}>
                        <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                      </div>
                    </a>
                    <div className="product-content">
                      <h5 className="text-uppercase fs-5 mt-3">
                        <a href="index.html">Handmade crop sweater</a>
                      </h5>
                      <a
                        href="index.html"
                        className="text-decoration-none"
                        data-after="Add to cart"
                      >
                        <span>$70.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
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
      </section>
      <section className="blog py-5">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
            <h4 className="text-uppercase">Read Blog Posts</h4>
            <a href="index.html" className="btn-link">
              View All
            </a>
          </div>
          <div className="row">
            <div className="col-md-4">
              <article className="post-item">
                <div className="post-image">
                  <a href="index.html">
                    <img
                      src="images/post-image1.jpg"
                      alt="image"
                      className="post-grid-image img-fluid"
                    />
                  </a>
                </div>
                <div className="post-content d-flex flex-wrap gap-2 my-3">
                  <div className="post-meta text-uppercase fs-6 text-secondary">
                    <span className="post-category">Fashion /</span>
                    <span className="meta-day"> jul 11, 2022</span>
                  </div>
                  <h5 className="post-title text-uppercase">
                    <a href="index.html">How to look outstanding in pastel</a>
                  </h5>
                  <p>
                    Dignissim lacus,turpis ut suspendisse vel tellus.Turpis
                    purus,gravida orci,fringilla...
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item">
                <div className="post-image">
                  <a href="index.html">
                    <img
                      src="images/post-image2.jpg"
                      alt="image"
                      className="post-grid-image img-fluid"
                    />
                  </a>
                </div>
                <div className="post-content d-flex flex-wrap gap-2 my-3">
                  <div className="post-meta text-uppercase fs-6 text-secondary">
                    <span className="post-category">Fashion /</span>
                    <span className="meta-day"> jul 11, 2022</span>
                  </div>
                  <h5 className="post-title text-uppercase">
                    <a href="index.html">Top 10 fashion trend for summer</a>
                  </h5>
                  <p>
                    Turpis purus, gravida orci, fringilla dignissim lacus,
                    turpis ut suspendisse vel tellus...
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item">
                <div className="post-image">
                  <a href="index.html">
                    <img
                      src="images/post-image3.jpg"
                      alt="image"
                      className="post-grid-image img-fluid"
                    />
                  </a>
                </div>
                <div className="post-content d-flex flex-wrap gap-2 my-3">
                  <div className="post-meta text-uppercase fs-6 text-secondary">
                    <span className="post-category">Fashion /</span>
                    <span className="meta-day"> jul 11, 2022</span>
                  </div>
                  <h5 className="post-title text-uppercase">
                    <a href="index.html">Crazy fashion with unique moment</a>
                  </h5>
                  <p>
                    Turpis purus, gravida orci, fringilla dignissim lacus,
                    turpis ut suspendisse vel tellus...
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section> */}

      <section className="logo-bar py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="logo-content d-flex flex-wrap justify-content-between">
              <img
                src="images/logo1.png"
                alt="logo"
                className="logo-image img-fluid"
              />
              <img
                src="images/logo2.png"
                alt="logo"
                className="logo-image img-fluid"
              />
              <img
                src="images/logo3.png"
                alt="logo"
                className="logo-image img-fluid"
              />
              <img
                src="images/logo4.png"
                alt="logo"
                className="logo-image img-fluid"
              />
              <img
                src="images/logo5.png"
                alt="logo"
                className="logo-image img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="newsletter bg-light"
        style={{ background: "url(images/pattern-bg.png) no-repeat" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 py-5 my-5">
              <div className="subscribe-header text-center pb-3">
                <h3 className="section-title text-uppercase">
                  Sign Up for our newsletter
                </h3>
              </div>
              <form id="form" className="d-flex flex-wrap gap-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email Addresss"
                  className="form-control form-control-lg"
                />
                <button className="btn btn-dark btn-lg text-uppercase w-100">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="instagram position-relative">
        <div className="d-flex justify-content-center w-100 position-absolute bottom-0 z-1">
          <a
            href="https://www.instagram.com/templatesjungle/"
            className="btn btn-dark px-5"
          >
            Follow us on Instagram
          </a>
        </div>
        <div className="row g-0">
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/templatesjungle/"
                target="_blank"
              >
                <img
                  src="images/insta-item1.jpg"
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/templatesjungle/"
                target="_blank"
              >
                <img
                  src="images/insta-item2.jpg"
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/templatesjungle/"
                target="_blank"
              >
                <img
                  src="images/insta-item3.jpg"
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/templatesjungle/"
                target="_blank"
              >
                <img
                  src="images/insta-item4.jpg"
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/templatesjungle/"
                target="_blank"
              >
                <img
                  src="images/insta-item5.jpg"
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/templatesjungle/"
                target="_blank"
              >
                <img
                  src="images/insta-item6.jpg"
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
