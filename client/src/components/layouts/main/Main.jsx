import "./Main.css";

function Main(props) {
  const classes = "main " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Main;
