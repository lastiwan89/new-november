import Link from "next/link";
import Image from "next/image";
import { NAVBAR } from "@/constant";
import Button from "./Button";
import Burger from "./Hamburger";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-start gap-x-20 bg-primgreen py-10 px-12">
      <Link href="/">
        <Image src={"./logo.svg"} width={160} height={40} alt="logo" />
      </Link>
      <ul className="semi-bold-18 flex items-center gap-x-14">
        {NAVBAR.map((nav) => (
          <Link className="text-primwhite" key={nav.label} href={`${nav.href}`}>
            {nav.label}
          </Link>
        ))}
        <Button type="btn-mobile" />
      </ul>
      <Button type="btn-nav" />
      <Burger />
    </nav>
  );
}
