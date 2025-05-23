import { FooterData } from "@/types/SiteConfigApi";
import Link from "next/link";

const Footer = (footer: FooterData) => {
  const { copyright, imprint, imprintUrl } = footer;
  return (
    <div className="flex justify-between lg:justify-start text-blue-250 py-5 lg:py-10 font-mulish text-xxs lg:text-sm font-normal leading-4.3925">
      <h1>{copyright}</h1>
      <span className="hidden lg:block px-3">/</span>

      <div className="capitalize">
        <Link href={imprintUrl}>{imprint}</Link>
      </div>
    </div>
  );
};

export default Footer;
