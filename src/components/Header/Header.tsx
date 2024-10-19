import Image from "next/image";
import cmaLogo from "./CMALogo.jpg";

export const Header = () => {
  return (
    <div className="flex flex-row items-center border-b-2 p-2 mb-5 gap-10">
      <div>
        <Image
          src={cmaLogo}
          alt="CMA Logo"
          style={{ cursor: "pointer" }}
          onClick={() => window.open("http://crystalmeth.org")}
        />
      </div>
      <h1 className="text-red-500 font-bold text-xl align-middle">
        CMA Fellowship Survey 2024
      </h1>
    </div>
  );
};
