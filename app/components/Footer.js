"use client";

import React from "react";
import { FaFacebook, FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

const Footer = () => {
  const openInfo = () => {
    return alert(
      "Tietosuoja ja evästeet. Tämä verkkosivusto ei käytä evästeitä ja täten ei kerää tietoa kävijöistään. Mikäli sinulla on kysyttävää tietosuojakäytännöstämme, ole hyvä ja ota meihin yhteyttä sähköpostitse."
    );
  };
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mt-28 bg-white border border-gray-200 rounded-lg shadow mb-10">
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-col items-center justify-center space-x-1 text-neutral-500">
          <p className="font-bold mb-2">
            Leskisen kukkakauppa ja hautaustoimisto
          </p>
          <div className="flex gap-2 items-center">
            <FaMapMarker size={20} />
            <p>Päämajantie 3,</p>
            <p>62375 Kauhava</p>
          </div>
          <div className="flex gap-2 items-center mt-1">
            <FaEnvelope size={20} />
            <p>leskisenkukkakauppa@netikka.fi</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <FaPhone size={20} />
            <div className="flex flex-col">
              <a
                className="font-medium text-blue-600 dark:text-blue-500 mt-1"
                href="tel:0500266466"
              >
                0500266466
              </a>
              <a
                className="font-medium text-blue-600 dark:text-blue-500 mt-1"
                href="tel:064846299"
              >
                06-4846299
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-x-1 mt-2">
            <a
              href="https://www.facebook.com/Syynimaa"
              target="a_blank"
              className="hover:text-blue-600 text-blue-500"
            >
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img
              className="object-scale-down h-auto w-36 mt-5"
              src="/hautaustoimistojenliitonlogo.png"
              alt="Hautaustoimistojen liitto"
            />
          </div>
        </div>
      </div>
      <hr className="w-full h-0.5 mx-auto bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500">
          <a
            href="https://www.jaakkomakinen.fi/"
            target="a_blank"
            className="hover:underline"
          >
            {" "}
            © 2024 Tmi Jaakko Mäkinen
          </a>
        </div>
        <div>
          <button className="text-neutral-500" onClick={openInfo}>
            Tietosuojaseloste
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
