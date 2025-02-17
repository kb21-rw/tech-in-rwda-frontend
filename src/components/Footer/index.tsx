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
    <div>
      <h1>{copyrightText}</h1>

      <div>
        <Link href={menu.url}>{menu.text}</Link>
      </div>
    </div>
  );
};

export default Footer;
