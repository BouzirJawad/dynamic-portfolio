function Button(props) {

  const bgColor = props.color;
  const padbtn = props.pad

  const stl = ("bg-amber-200 px-" + padbtn + " py-2 rounded-xl hover:" + bgColor +" cursor-pointer");

  return (
    <button className={stl}>click me</button>
  );
}

export default Button;
