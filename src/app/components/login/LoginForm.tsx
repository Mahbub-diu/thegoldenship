"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export const LoginForm = () => {
  let router = useRouter();
  let [loading, setLoading] = React.useState(false);
  let [signInData, setSignInData] = React.useState({
    email: "",
    password: "",
  });
  let signInGoogle = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    let data = await signIn("google", {
      callbackUrl: "http://localhost:3000/dashboard",

      redirect: true,
    });
    console.log(data);
  };
  let loginNow = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // return false;
    if (signInData.email == "" || signInData.password == "") {
      toast.error("Please fill all the fields");
      return false;
    }
    setLoading(true);
    let data = await signIn("credentials", {
      redirect: false,
      email: signInData.email,
      password: signInData.password,
      callbackUrl: "http://localhost:3000/",
    });
    setLoading(false);
    console.log(data);
    if (data?.error) {
      toast.error("Invalid Credentials");
      return false;
    }

    router.push("/dashboard");
  };
  return (
    <>
      <form action="" className="needs-validation" onSubmit={loginNow}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Addresss
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="ex. yourmail@email.com"
            value={signInData.email}
            onChange={(e) =>
              setSignInData({ ...signInData, email: e.target.value })
            }
            required
          />
          <div className="invalid-feedback">
            Please enter your email address
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            {" "}
            password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="*********"
            onChange={(e) =>
              setSignInData({ ...signInData, password: e.target.value })
            }
            required
            value={signInData.password}
          />
          <div className="invalid-feedback">Enter correct password</div>
        </div>
        <a href="#" className="forget-pass">
          Forgotten Password?
        </a>
        <button type="submit" className="btn login-btn" disabled={loading}>
          create account
        </button>
        <div className="reg-divider">or</div>
        <a href="#" className="btn google-login-btn" onClick={signInGoogle}>
          <span className="icon">
            <img src="assets/images/icon/logos_google-icon.png" alt="" />
          </span>
          Continue with Google
        </a>
        <h5>Dont have a vision flow account?</h5>
        <div className="text-center">
          <Link href="/signup" className="sign-link">
            Create An Account
          </Link>
        </div>
      </form>
    </>
  );
};
