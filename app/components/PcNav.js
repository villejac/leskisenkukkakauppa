"use client" 

import React from "react"
import  Link  from "next/link"
import { usePathname } from "next/navigation"

export const NAV_ITEMS = [
  {
    label: "Etusivu",
    page: "/",
  },
  {
    label: "Galleria",
    page: "/galleria/",
  },
  {
    label: "Yhteystiedot",
    page: "/yhteystiedot/",
  },
]

export default function Navbar() {

  const pathname = usePathname();

  return (
    <header className="w-full mx-auto px-4 sm:px-20 bg-slate-50 shadow">
      <div className="justify-between items-center flex">
          <div className="flex items-center justify-between py-5">
            <Link href="/" style={{cursor:"pointer"}}>
              <div className="container flex items-center space-x-2">
                <h1 className="font-culpa text-2xl lg:text-4xl font-bold text-purple-500">Leskisen kukkakauppa</h1>
              </div>
            </Link>
        </div>
        <div>
          <div className={`flex-1 justify-self-center`}>
            <div className="items-center justify-center flex space-x-6 space-y-0 flex-wrap">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    style={{cursor:"pointer"}}
                    href={item.page}
                    className={
                      `block lg:inline-block text-neutral-900  hover:text-neutral-500 ${pathname == item.page ? "text-orange-600" : ""} font-bold`
                    }
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
