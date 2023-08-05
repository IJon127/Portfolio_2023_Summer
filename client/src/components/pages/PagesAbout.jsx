import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import "./Pages.css";
import About from "../sections/about/About.jsx";
import Main from "../layouts/main/Main.jsx";
import Footer from "../layouts/footer/Footer.jsx";
import Top from "../ui/Top.jsx";

function PagesAbout() {
  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState([]);

  const fetchAbout = async () => {
    // fetch("http://localhost:5500/api/about")
    fetch("/api/about")
      .then((res) => res.json())
      .then((resData) => {
        setAbout(resData.data.about);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <div>
      <Top className="pages__title">About</Top>

      <Main className="pages__content">
        {loading && (
          <div className="loader">
            <PuffLoader
              loading={loading}
              size={220}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        {!loading && <About data={about} />}
      </Main>
      <Footer />
    </div>
  );
}
export default PagesAbout;
