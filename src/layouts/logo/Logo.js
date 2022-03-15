import LogoDark from "../../../public/icon.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src={LogoDark} height={440} alt="logo" />
        <span className="font-semibold text-md sm:text-4xl md:text-5xl text-white ">
          <span>Fanfund</span>
        </span>
      </a>
    </Link>
  );
};

export default Logo;
