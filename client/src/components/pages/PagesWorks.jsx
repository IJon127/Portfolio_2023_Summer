import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import "./Pages.css";
import WorksList from "../sections/works/worksList/WorksList.jsx";
import Main from "../layouts/main/Main.jsx";
import Footer from "../layouts/footer/Footer.jsx";
import Top from "../ui/Top.jsx";

function PagesWorks() {
  const [loading, setLoading] = useState(true);
  const [works, setWorks] = useState([]);

  const fetchWorks = async () => {
    // fetch("http://localhost:5500/api/works")
    fetch("/api/works")
      .then((res) => res.json())
      .then((resData) => {
        setWorks(resData.data.works);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <div>
      <Top className="pages__title">Works</Top>
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
        {!loading && (
          <div>
            <WorksList data={works} />
            <div className="pages-works__bottom" />
          </div>
        )}
      </Main>
      <Footer />
    </div>
  );
}
export default PagesWorks;
