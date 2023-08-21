import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { LoginForm } from "./components/login/LoginForm";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);
  if(session) {
    redirect("/dashboard");
  }
  return (
    <>
      <main>
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
                      <h3>Sign in to Vision Flow</h3>
                    </div>
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
