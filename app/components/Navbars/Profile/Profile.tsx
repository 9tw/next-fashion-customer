"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const [user, setUser] = useState<any>();

  const getUser = async () => {
    const {
      data: { user },
    } = await client.auth.getUser();

    const { data: profile, error } = await client
      .from("profile")
      .select("*")
      .eq("id", user?.id)
      .single();

    setUser(profile);
  };

  const handleLogOut = async () => {
    let { error } = await client.auth.signOut();
    if (error) throw error;

    toast.success("Sign Out Success");
    router.push("/");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="col-3 col-lg-auto">
        <ul className="list-unstyled d-flex m-0">
          {/* <li className="d-none d-lg-block">
                  <a href="index.html" className="text-uppercase mx-3">
                    Wishlist <span className="wishlist-count">(0)</span>
                  </a>
                </li> */}
          {/* <li className="d-lg-none">
                  <a href="#" className="mx-2">
                    <div style={{ width: 24, height: 24 }}>
                      <FontAwesomeIcon icon={faHeartRegular} size="sm" />
                    </div>
                  </a>
                </li> */}
          <li className="d-none d-lg-block">
            <a
              href="index.html"
              className="text-uppercase mx-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
              Cart {/* <span className="cart-count">(0)</span> */}
            </a>
          </li>
          <li className="d-lg-none">
            <a
              href="#"
              className="mx-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
              <div style={{ width: 24, height: 24 }}>
                <FontAwesomeIcon icon={faCartShopping} size="sm" />
              </div>
            </a>
          </li>
          {user ? (
            <li className="search-box">
              <a
                href="#"
                className="text-uppercase mx-3"
                onClick={handleLogOut}
              >
                Logout
              </a>
            </li>
          ) : (
            <li className="search-box">
              <a href="/login" className="text-uppercase mx-3">
                Login
              </a>
            </li>
          )}
          <li className="search-box">
            <a href="#search" className="search-button">
              <div style={{ width: 24, height: 24 }}>
                <FontAwesomeIcon icon={faSearch} size="sm" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
