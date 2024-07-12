import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

function HeroSection() {
  return (
    <div className={styles.minheight}>
      <div
        className="w-full h-full md:flex select-none sm:overflow-y-hidden overflow-x-hidden overflow-y-scroll heroSection"
        style={{
          background:
            "linear-gradient(110deg, rgba(226,232,240,1) 50%, rgba(233,236,238,1) 50%)",
        }}
      >
        <div className="md:w-1/2 flex m-16">
          <div className="m-auto lg:p-6 p-4 bg-white ease-in-out duration-200 shadow-lg rounded-2xl text-slate-800 cursor-default">
            <h1 className="lg:m-3 m-2 text-center lg:text-3xl text-2xl font-bold">
              Welcome to <span className="text-pink-600">Dare2Solve</span>
            </h1>
            <h6 className="lg:m-3 m-2 text-center lg:text-2xl text-xl font-semibold">
              Gateway to your Questions
              <br />
              and our Solutions
            </h6>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center lg:pb-0 pb-6">
          <div className={styles.heroSection1}>
            <Link href={`#dare2solve`} passHref>
              <div className="relative flex md:mx-6 lg:my-6 md:my-3 my-2 m-auto sm:w-96 w-80 bg-white rounded-xl overflow-hidden shadow-xl text-pink-600 cursor-pointer ease-in-out duration-200">
                <div
                  className="m-4 z-10 my-auto w-14"
                  style={{
                    filter:
                      "invert(28%) sepia(31%) saturate(4445%) hue-rotate(308deg) brightness(93%) contrast(102%)",
                  }}
                >
                  <Image
                    src="https://www.svgrepo.com/show/364655/math-operations-fill.svg"
                    alt="Math Logo"
                    width={56}
                    height={56}
                  />
                </div>
                <div className="m-4 ml-0 z-10">
                  <h1 className="text-xl font-bold">Connect with Dare2Solve</h1>
                  <h6 className="text-lg">
                    Providing Math Problems Since 2021
                  </h6>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.heroSection2}>
            <Link href={`#jaypokale`} passHref>
              <div className="relative flex md:mx-6 lg:my-6 md:my-3 my-2 m-auto sm:w-96 w-80 bg-white rounded-xl overflow-hidden shadow-xl text-blue-500 cursor-pointer ease-in-out duration-200">
                <div
                  className="m-4 z-10 my-auto"
                  style={{
                    filter:
                      "invert(46%) sepia(53%) saturate(4533%) hue-rotate(204deg) brightness(102%) contrast(93%)",
                  }}
                >
                  <Image
                    src="https://www.svgrepo.com/show/354884/code.svg"
                    alt="Coding Logo"
                    width={56}
                    height={56}
                  />
                </div>
                <div className="m-4 ml-0 z-10">
                  <h1 className="text-xl font-bold">Connect with me</h1>
                  <h6 className="text-lg">
										Jay Pokale - Founder of Dare2Solve
                  </h6>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.heroSection3}>
            <Link href="#footer" passHref>
              <div className="relative flex md:mx-6 lg:my-6 md:my-3 my-2 m-auto sm:w-96 w-80 bg-white rounded-xl overflow-hidden shadow-xl text-purple-600 cursor-pointer ease-in-out duration-200">
                <div
                  className="m-4 z-10 my-auto"
                  style={{
                    filter:
                      "invert(28%) sepia(85%) saturate(4175%) hue-rotate(253deg) brightness(93%) contrast(100%)",
                  }}
                >
                  <Image
                    src="https://www.svgrepo.com/show/15761/mail.svg"
                    alt="Contact Logo"
                    width={56}
                    height={56}
                  />
                </div>
                <div className="m-4 ml-0 z-10">
                  <h1 className="text-xl font-bold">Contact us</h1>
                  <h6 className="text-lg">
                    Contact via Email or DM on social media accounts
                  </h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
