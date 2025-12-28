import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import Thank from "../components/Thank/Thank";

export default function Purchase() {
  return (
    <>
      <Navbar />

      <section className="newsletter bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <Thank />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
