import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

import Hero from "../sections/hero/Hero.jsx";
import Works from "../sections/works/Works.jsx";
import Playground from "../sections/playground/Playground.jsx";
import About from "../sections/about/About.jsx";

import Main from "../layouts/main/Main.jsx";
import Footer from "../layouts/footer/Footer.jsx";

function PagesHome() {
  const [loading, setLoading] = useState(true);
  const [works, setWorks] = useState([]);
  const [playground, setPlayground] = useState([]);
  const [about, setAbout] = useState([]);
  /*
  const apiUrls = [
    "http://localhost:5500/api/works",
    "http://localhost:5500/api/playground",
    "http://localhost:5500/api/about",
  ];
  */
  const apiUrls = ["/api/works", "/api/playground", "/api/about"];

  const checkStatus = (response) => {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  const parseJSON = (response) => {
    return response.json();
  };

  const showContent = () => {
    setLoading(false);
  };

  const fetchData = async () => {
    Promise.all(
      apiUrls.map((url) =>
        fetch(url)
          .then(checkStatus) // check the response of our APIs
          .then(parseJSON) // parse it to Json
          .catch((error) => console.log("There was a problem!", error))
      )
    )
      .then((data) => {
        setWorks(data[0].data.works);
        setPlayground(data[1].data.playground.data);
        setAbout(data[2].data.about);
      })
      .then(showContent);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Hero />
      <Main>
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
            <Works data={works} />
            <Playground data={playground} />
            <About data={about} />
          </div>
        )}
      </Main>
      <Footer displayY={3} />
    </div>
  );
}
export default PagesHome;
