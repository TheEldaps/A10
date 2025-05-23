import image from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <Link
        to="/"
        className="flex  text-[#fff] justify-center items-center no-underline min-w-[200px]"
      >
        <img
          className="inline w-[50px] h-[50px] mr-[10px]"
          src={image}
          alt="App logo"
        />
        <span className=" text-[2.5rem] font-[Arial] font-[900] inline">
          A10
        </span>
      </Link>
    </>
  );
}
