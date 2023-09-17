import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <RotatingLines
      strokeColor="#233657"
      strokeWidth="5"
      animationDuration="0.75"
      width="50"
      visible={true}
    />
  );
}

export { Loader }