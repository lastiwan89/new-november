"use client";

import { useState } from "react";
import Image from "next/image";

export default function Burger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div onClick={() => setIsOpen((prev) => !prev)} className="lg:hidden">
      {!isOpen ? (
        <Image
          src="/icon-hamburger.svg"
          alt="menu icon"
          width={40}
          height={40}
        />
      ) : (
        <Image src="/icon-close.svg" alt="menu icon" width={40} height={40} />
      )}
    </div>
  );
}
