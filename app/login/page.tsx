import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";

export default function Login() {
  return (
    <>
      <Navbar />
      <Form type={"login"} />
      <Footer />
    </>
  );
}
