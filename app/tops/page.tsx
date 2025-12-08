import Navbar from "../components/Navbars/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Showcase from "../components/Showcase/Showcase";

export default function Top() {
  return (
    <>
      <Navbar />

      <section id="billboard" className="bg-light py-5">
        <div className="container">
          <Header title="Top Collections" />
          <Showcase />
        </div>
      </section>

      <Footer />
    </>
  );
}
