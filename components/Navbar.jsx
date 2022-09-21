import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed h-screen w-screen bg-black/50 z-20"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}
      <nav className="bg-white shadow-sm fixed top-0 w-full z-30">
        <div className="w-full z-10">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href="/" passHref>
                  <h1 className=" font-bold text-xl cursor-pointer">
                    Dare<span className="text-pink-600">2</span>Solve
                  </h1>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" passHref>
                    <h6 className="cursor-pointer text-black px-3 py-2 text-md hover:text-pink-600">
                      Home
                    </h6>
                  </Link>
                  <Link href="/about" passHref>
                    <h6 className="cursor-pointer text-black px-3 py-2 text-md hover:text-pink-600">
                      About
                    </h6>
                  </Link>
                  <Link href="/math" passHref>
                    <h6 className="cursor-pointer text-black px-3 py-2 text-md hover:text-pink-600">
                      Math
                    </h6>
                  </Link>

                  <Link href="/website" passHref>
                    <h6 className="cursor-pointer text-black px-3 py-2 text-md hover:text-pink-600">
                      Website
                    </h6>
                  </Link>

                  <Link href="#footer" passHref>
                    <h6 className="cursor-pointer bg-pink-600 text-white px-3 py-2 rounded-md text-sm hover:bg-black">
                      Contact
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-pink-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/"
                  passHref
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <h6 className="cursor-pointer hover:bg-pink-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </h6>
                </Link>
                <Link
                  href="/about"
                  passHref
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <h6 className="cursor-pointer hover:bg-pink-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    About
                  </h6>
                </Link>

                <Link
                  href="/math"
                  passHref
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <h6 className="cursor-pointer hover:bg-pink-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Math
                  </h6>
                </Link>
                <Link
                  href="/website"
                  passHref
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <h6 className="cursor-pointer hover:bg-pink-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Website
                  </h6>
                </Link>

                <Link
                  href="#footer"
                  passHref
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <h6 className="cursor-pointer hover:bg-pink-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Contact
                  </h6>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}

export default Navbar;
