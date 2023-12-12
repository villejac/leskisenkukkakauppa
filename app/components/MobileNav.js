"use client" 

import React from "react"
import { useState } from "react"
import  Link  from "next/link"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { usePathname } from "next/navigation"

const NAV_ITEMS = [
  {
    label: "Etusivu",
    page: "/",
  },
  {
    label: "Huolto",
    page: "/huolto/",
  },
  {
    label: "Vuokraus",
    page: "/vuokraus/",
  },
  {
    label: "Yhteys",
    page: "/yhteys/",
  },
]

export default function Navbar() {

  const [navbar, setNavbar] = useState(false)
  const pathname = usePathname();

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-slate-50">
      <div className="justify-between">
        <div>
          <div className="flex items-center justify-between py-3">
            <Link href="/" style={{cursor:"pointer"}}>
              <div className="container flex items-center space-x-2">
                {/* <h2 className="text-2xl font-bold">Konehuolto J. Filppula</h2> */}
                <h1 className="italic text-2xl lg:text-4xl font-extrabold leading-none tracking-tight text-gray-900">Konehuolto J. Filppula</h1>
              </div>
            </Link>
            <div>
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    style={{cursor:"pointer"}}
                    href={item.page}
                    className={
                      `block text-neutral-900 hover:text-neutral-500 ${pathname == item.page ? "text-orange-600" : ""} font-bold`
                    }
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
