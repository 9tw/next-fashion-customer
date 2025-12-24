import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import CO from "../components/Checkout/Checkout";

export default function Checkout() {
  return (
    <>
      <Navbar />

      <section className="newsletter bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <CO />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
