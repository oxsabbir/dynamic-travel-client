import logo from "@/public/logo.svg";
import SocialLinks from "../Extras/SocialLinks";
import { footerData } from "../../constant/constant";
import Image from "next/image";
import Link from "next/link";
import Container from "../Extras/Container";

export default function Footer() {
  return (
    <>
      <footer className=" bg-offWhite pt-10 ">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-0 lg:grid-cols-4">
            <div className=" flex flex-col gap-4 py-5">
              <Image src={logo} height={70} width={145} alt="Brand logo" />
              <h2 className=" text-textBlack font-medium text-lg">
                Discover the world one adventure at a time life is short, book a
                trip now
              </h2>
              <SocialLinks rounded={true} />
            </div>

            {footerData.map((item) => (
              <div key={item.title} className="py-4 px-2 ">
                <h3 className=" font-bold text-2xl pb-3">{item.title}</h3>
                <ul>
                  {item.links.map((link) => (
                    <li
                      key={link.id}
                      className=" font-medium pb-1 text-base  text-textBlack"
                    >
                      <Link href={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className=" border-t-[1px] border-gray-300 py-5 flex justify-center">
            <h4 className=" text-textBlack text-sm font-thin">
              &copy; Copyright 2024 Dynamics Travel | All Right Reserved
            </h4>
          </div>
        </Container>
      </footer>
    </>
  );
}
