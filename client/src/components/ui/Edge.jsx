import "./Edge.css";

function Edge(props) {
  const classes = "edge " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Edge;
