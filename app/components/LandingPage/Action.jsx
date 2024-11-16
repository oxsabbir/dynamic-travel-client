export default function Action(props) {
  return (
    <>
      <a
        className="bg-actionBlue text-white px-7 py4 text-center flex items-center rounded-3xl duration-200 hover:bg-black"
        {...props}
      >
        {props.children}
      </a>
    </>
  );
}
