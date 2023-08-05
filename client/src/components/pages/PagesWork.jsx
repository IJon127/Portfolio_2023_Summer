import "./Pages.css";
import Work from "../sections/work/Work.jsx";
import Main from "../layouts/main/Main.jsx";
import Footer from "../layouts/footer/Footer.jsx";

function PagesWork() {
  return (
    <div>
      <Main className="pages__content">
        <Work />
      </Main>
      <Footer displayY={0.8} />
    </div>
  );
}
export default PagesWork;
