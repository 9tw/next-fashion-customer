import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <section className="newsletter bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 py-5 my-5">
              <div className="subscribe-header text-center pb-3">
                <h3 className="section-title text-uppercase">Login</h3>
              </div>
              <form id="form" className="d-flex flex-wrap gap-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="form-control form-control-lg"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control form-control-lg"
                />
                <button className="btn btn-dark btn-lg text-uppercase w-100">
                  Log In
                </button>
              </form>
              <div style={{ marginTop: 10 }}>
                <p>
                  Don't have an account? <a href="/register">Register</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
