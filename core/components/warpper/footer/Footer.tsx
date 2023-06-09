import Link from "next/link";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import tiktok from "../../../../public/static/images/icons/tiktok-icon.svg";
import Image from "next/image";

const Footer = () => {
  const links = [
    { name: "IMPRINT", href: "/imprint" },
    { name: "PRIVACY POLICY", href: "/privacy-policy" },
    { name: "DISCLAIMER", href: "/disclaimer" },
  ];
  return (
    <footer className="relative bottom-0 w-screen flex md:flex-row flex-col-reverse md:h-64 outline">
      <div className="flex flex-col justify-start  items-center md:w-[61vw] w-screen md:h-64 outline">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="md:text-xl text-balck hover:text-gray-700 grow outline w-full  flex items-center text-4xl p-6"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex  items-center md:w-[39vw] md:h-full h-32 w-screen justify-evenly outline self-center justify-self-center">
        <Link href="https://www.instagram.com/warofmind_/" target="_blank">
          <InstagramIcon fontSize="large" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCVyxWlMFCWjOpe_I05B0kqg"
          target="_blank"
        >
          <YouTubeIcon fontSize="large" />
        </Link>
        <Link href="https://www.tiktok.com/@__war_of_mind__" target="_blank">
          <Image src={tiktok} alt="tiktok" width={25} height={25} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
