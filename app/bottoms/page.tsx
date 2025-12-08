import Navbar from "../components/Navbars/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Showcase from "../components/Showcase/Showcase";

export default function Bottom() {
  return (
    <>
      <Navbar />

      <section id="billboard" className="bg-light py-5">
        <div className="container">
          <Header title="Bottom Collections" />
          <Showcase />
        </div>
      </section>

      <Footer />
    </>
  );
}
