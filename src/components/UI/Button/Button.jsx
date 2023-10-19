
export default function Button(props) {
  const classes = "butt " + props.className;
  return <button type={props.type} onClick={props.onClick} className={classes}>{props.children}</button>;
}
