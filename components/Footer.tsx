import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image

const Footer = () => {
  return (
    <footer
      className="w-full h-screen relative flex flex-col justify-center items-center pt-20 pb-10"
      id="contact"
    >
      {/* Background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          layout="fill" // Use layout fill to cover the entire parent
          objectFit="cover" // This helps in covering the entire area
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:sumitgupta27x@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center w-full">
        {/* Copyright text */}
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Sumit Gupta
        </p>

        {/* Social media icons */}
        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <Link
              href={info.link || "#"}
              key={info.id}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={info.img}
                alt="icons"
                width={20}
                height={20}
                layout="intrinsic" // Use intrinsic layout for fixed dimensions
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
