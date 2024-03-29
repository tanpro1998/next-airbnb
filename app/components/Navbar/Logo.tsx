"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      src={"/images/logo.png"}
      alt="Logo"
      className="hidden md:block cursor-pointer w-auto h-auto"
      height={100}
      width={100}
      priority
    />
  );
};

export default Logo;
