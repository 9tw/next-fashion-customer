"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/client";

export default function Menu() {
  const [categories, setCategories] = useState<any[]>([]);
  const [collection, setCollection] = useState<any>();
  const [prive, setPrive] = useState<any>();

  const getCategory = async () => {
    let { data: category, error } = await client.from("category").select("*");

    setCategories(category.filter((cat) => cat.created_by !== null));
    setCollection(category?.find((cat) => cat.name === "New"));
    setPrive(category?.find((cat) => cat.name === "Prive"));
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="col-auto">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 gap-1 gap-md-5 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  // id="dropdownHome"
                  // data-bs-toggle="dropdown"
                  // aria-haspopup="true"
                  // aria-expanded="false"
                >
                  Home
                </a>
                {/* <ul
                        className="dropdown-menu list-unstyled"
                        aria-labelledby="dropdownHome"
                      >
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Home Layout 1
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Home Layout 2{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Home Layout 3{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Home Layout 4{" "}
                          </a>
                        </li>
                      </ul> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/clothing?id=" + collection?.id}>
                  New Collections
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownShop"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Clothing
                </a>
                <ul
                  className="dropdown-menu list-unstyled"
                  aria-labelledby="dropdownShop"
                >
                  {categories?.map((category: any) => (
                    <li key={category?.id}>
                      <a
                        className="dropdown-item item-anchor"
                        href={"/clothing?id=" + category?.id}
                      >
                        {category?.name}
                      </a>
                    </li>
                  ))}
                  {/* <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Shop Four Column{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Shop Four Column Wide{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Shop Six Column{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Shop Six Column Wide{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Single Product{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Single Product V2{" "}
                          </a>
                        </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/clothing?id=" + prive?.id}>
                  Privé
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="dropdownBlog"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <ul
                        className="dropdown-menu list-unstyled"
                        aria-labelledby="dropdownBlog"
                      >
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Blog Classic{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Blog Grid with Sidebar{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Blog Grid Four Column{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Blog No Sidebar{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Blog Right Sidebar{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Single Post{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Single Post No Sidebar{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="dropdownPages"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul
                        className="dropdown-menu list-unstyled"
                        aria-labelledby="dropdownPages"
                      >
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            About{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Cart{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Checkout{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Coming Soon{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Contact{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Error Page{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            FAQs{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            My Account{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Order Tracking{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html"
                            className="dropdown-item item-anchor"
                          >
                            Wishlist{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
