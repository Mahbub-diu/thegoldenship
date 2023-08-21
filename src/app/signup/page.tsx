"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { toast } from "react-toastify";
//   const bcrypt = require("bcrypt");

const SignUp = () => {
  let [loading, setLoading] = React.useState(false);
  let [signInData, setSignInData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  let router = useRouter();
  let signInGoogle = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    let data = await signIn("google", {
      callbackUrl: "http://localhost:3000/dashboard",

      redirect: true,
    });
    console.log(data);
  };
  let loginNow = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(signInData);
    e.preventDefault();
    if (
      signInData.name == "" ||
      signInData.email == "" ||
      signInData.password == ""
    ) {
      toast.error("Please fill all the fields");
      return false;
    }

    setLoading(true);
    axios
      .post("/api/signup", signInData)
      .then(async (res) => {
        console.log(res);
        if (res.data.status == 422) {
          toast.error(res.data.error || "Something went wrong");
          return false;
        }
        let data = await signIn("credentials", {
          redirect: false,
          email: signInData.email,
          password: signInData.password,
          callbackUrl: "http://localhost:3000/",
        });
        if (data?.error) {
          return false;
        }
        router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err?.response?.data?.error || "Something went wrong");

        return false;
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {" "}
      <section className="login-main">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="login-parent">
                <div className="login-box">
                  <div className="logo-box">
                    <img src="assets/images/logo.png" alt="logo" />
                  </div>
                  <div className="title-box">
                    <h3>Create Your Account</h3>
                  </div>
                  <form
                    action=""
                    className="needs-validation"
                    onSubmit={(e) => loginNow(e)}
                  >
                    <div className="form-group">
                      <label htmlFor="full name" className="form-label">
                        full name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ex. istie iftear"
                        id=""
                        value={signInData.name}
                        onChange={(e) => {
                          setSignInData({
                            ...signInData,
                            name: e.target.value,
                          });
                        }}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter full name
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Addresss
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="ex. yourmail@email.com"
                        id=""
                        value={signInData.email}
                        onChange={(e) => {
                          setSignInData({
                            ...signInData,
                            email: e.target.value,
                          });
                        }}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your email address
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="form-label">
                        Create a password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="*********"
                        id=""
                        value={signInData.password}
                        onChange={(e) => {
                          setSignInData({
                            ...signInData,
                            password: e.target.value,
                          });
                        }}
                        required
                      />
                      <div className="invalid-feedback">
                        Password at least 8 characters.
                      </div>
                    </div>
                    {loading ? (
                      <button type="button" className="btn login-btn disabled">
                        Creating Account
                      </button>
                    ) : (
                      <button type="submit" className="btn login-btn">
                        create account
                      </button>
                    )}

                    <div className="reg-divider">or</div>
                    <a
                      href="#"
                      className="btn google-login-btn"
                      onClick={signInGoogle}
                    >
                      <span className="icon">
                        <img
                          src="assets/images/icon/logos_google-icon.png"
                          alt=""
                        />
                      </span>
                      Continue with Google
                    </a>
                    <h5>Already have a vision flow account?</h5>
                    <div className="text-center">
                      <Link href="/" className="sign-link">
                        Sign in
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
