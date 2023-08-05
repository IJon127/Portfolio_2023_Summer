import "./WorkGallery.css";

function WorkGallery({ work, gallery }) {
  const randomVar = (start, end, unit) => {
    const num = ~~(Math.random() * (end - start));
    return String(num + start + unit);
  };
  return (
    <div className="work-gallery">
      {gallery.map((pic, index) => (
        <div key={index} className="work-gallery__img-box">
          <img
            src={`/images/projects/${work}/${pic}`}
            alt={work}
            className="work-gallery__img"
            style={{
              top: `${randomVar(40, 60, "%")}`,
              left: `${randomVar(30, 70, "%")}`,
              rotate: `${randomVar(-15, 15, "deg")}`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
export default WorkGallery;
