import "./PlaygroundHoles.css";

function PlaygroundHoles({ playground }) {
  //   const [activeTag, setActiveTag] = useState("Show All");
  //   const [filteredExercises, setFilteredExercises] = useState([]);

  //   useEffect(() => {
  //     setFilteredExercises(allExercises);
  //   }, [allExercises]);

  return (
    <div className="playground-holes">
      {Array(60)
        .fill(null)
        .map((item, index) => (
          <div className="playground-holes__single-hole" key={index}></div>
        ))}
    </div>
  );
}

export default PlaygroundHoles;
