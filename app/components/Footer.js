"use client"

import React from "react";

const Footer = () => {
  const openInfo = () => {
    return (
      alert("Tietosuoja ja evästeet. Tämä verkkosivusto ei käytä evästeitä ja täten ei kerää tietoa kävijöistään. Mikäli sinulla on kysyttävää tietosuojakäytännöstämme, ole hyvä ja ota meihin yhteyttä sähköpostitse.")
    )
  }
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mt-28">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500">
            <a href="https://www.jaakkomakinen.fi/" target="a_blank" className="hover:underline"> © 2023 Tmi Jaakko Mäkinen</a>
        </div>
        <div>
          <button className="text-neutral-500" onClick={openInfo}>Tietosuojaseloste</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
