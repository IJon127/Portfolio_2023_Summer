import "./Pages.css";
import Contact from "../sections/contact/Contact.jsx";
import Main from "../layouts/main/Main.jsx";
import Footer from "../layouts/footer/Footer.jsx";
import Top from "../ui/Top.jsx";

function PagesContact() {
  return (
    <div className="">
      <Top className="pages__title">Contact</Top>
      <Main className="pages__content">
        <Contact />
      </Main>
      <Footer />
    </div>
  );
}
export default PagesContact;
