import Link from "next/link";
import Image from "next/image";

export const Logo = ({ url, text }: { url: string; text: string }) => (
  <Link href={url} className=" flex items-center gap-4">
    <Image src={url} alt="logo" height={56} width={56} />
    <span className="capitalize font-comfortaa text-blue-150 text-base w-20 hidden lg:block">
      {text}
    </span>
  </Link>
);
