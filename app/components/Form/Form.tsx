"use client";

import { useEffect, useState } from "react";
import client from "@/app/api/supabase/client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Form({ type }: any) {
  const router = useRouter();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "register") {
      if (password === verifyPassword) {
        try {
          let { data, error } = await client.auth.signUp({
            email: profile?.email,
            password: password,
          });

          if (error) throw error;

          const { data: profileData, error: profileError } = await client
            .from("profile")
            .insert([
              {
                id: data?.user?.id,
                name: profile?.name,
                phone: profile?.phone,
                is_admin: false,
                email: profile?.email,
              },
            ])
            .select();

          if (profileError) throw profileError;

          toast.success(
            `Registration success. Check your email for verification.`
          );
        } catch (err: any) {
          toast.error(err.message || "An error occurred");
        } finally {
          setProfile({
            name: "",
            email: "",
            phone: "",
          });
          setPassword("");
          setVerifyPassword("");
          router.push("/login");
        }
      } else {
        toast.error("Password did not same.");
      }
    } else {
      try {
        const { data, error } = await client.auth.signInWithPassword({
          email: profile?.email,
          password: password,
        });

        if (error) throw error;

        toast.success(`Sign In Success`);
      } catch (err: any) {
        toast.error(err.message || "An error occurred");
      } finally {
        setProfile({
          name: "",
          email: "",
          phone: "",
        });
        setPassword("");
        setVerifyPassword("");
        router.push("/");
        router.refresh();
      }
    }
  };

  return (
    <section className="newsletter bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 py-5 my-5">
            <div className="subscribe-header text-center pb-3">
              <h3 className="section-title text-uppercase">
                {type === "register" ? "Register" : "Login"}
              </h3>
            </div>
            <form
              id="form"
              className="d-flex flex-wrap gap-2"
              onSubmit={handleSubmit}
            >
              {type === "register" ? (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="form-control form-control-lg"
                    value={profile?.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="form-control form-control-lg"
                    value={profile?.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control form-control-lg"
                    value={profile?.email}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    name="verifyPassword"
                    placeholder="Re-enter Password"
                    className="form-control form-control-lg"
                    value={verifyPassword}
                    onChange={(e) => setVerifyPassword(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control form-control-lg"
                    value={profile?.email}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              )}
              <button
                type="submit"
                className="btn btn-dark btn-lg text-uppercase w-100"
              >
                {type === "register" ? "Submit" : "Log In"}
              </button>
            </form>
            {type === "login" ? (
              <div style={{ marginTop: 10 }}>
                <p>
                  Don't have an account? <a href="/register">Register</a>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
