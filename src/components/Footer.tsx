import { FOOTER_ADDRESS, FOOTER_SOCIAL, NAVBAR } from "@/constant";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <section className="px-[150px] py-[50px] flex justify-around items-center bg-primcoral">
        <h3 className="bold-48 text-secsacramgreen">Ready to get started?</h3>
        <Button type="btn-footer" />
      </section>
      <section className="bg-secsacramgreen px-[150px] py-12 flex gap-14">
        <div className="flex flex-col gap-6">
          <Link href="/">
            <Image src={"./logo.svg"} width={160} height={40} alt="logo" />
          </Link>
          <ul className="flex gap-8">
            {NAVBAR.map((nav) => (
              <Link
                className="text-primwhite"
                key={nav.label}
                href={`${nav.href}`}
              >
                {nav.label}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          {FOOTER_ADDRESS.map((address) => (
            <li
              className="list-none text-primwhite semi-bold-15"
              key={address.id}
            >
              {address.label}
            </li>
          ))}
        </div>
        <div className="flex flex-col items-end justify-between ml-auto">
          <div className="flex gap-6">
            {FOOTER_SOCIAL.map((social) => (
              <Image
                key={social.id}
                src={`${social.url}`}
                width={24}
                height={24}
                alt={`${social.label}`}
              />
            ))}
          </div>
          <small className="text-primwhite">
            Copyright 2020. All Rights Reserved
          </small>
        </div>
      </section>
    </footer>
  );
}
