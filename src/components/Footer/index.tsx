import Link from "next/link";

export type FooterProps = {
  id?: number;
  copyrightText: string;
  menu: {
    text: string;
    url: string;
  };
};

const Footer = (footer: FooterProps) => {
  const { copyrightText, menu } = footer;
  return (
    <div className="flex justify-between lg:justify-start text-blue-250 py-5 lg:py-10 font-mulish text-xxs lg:text-sm font-normal">
      <h1>{copyrightText}</h1>
      <span className="hidden lg:block px-3">/</span>

      <div className="capitalize">
        <Link href={menu.url}>{menu.text}</Link>
      </div>
    </div>
  );
};

export default Footer;
