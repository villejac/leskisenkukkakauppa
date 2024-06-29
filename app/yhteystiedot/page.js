import React from 'react';
import  Link  from "next/link"


export const metadata = {
  title: "Yhteystiedot"
}

const page = () => {
  return (
 <div className="w-full mx-auto grid md:grid-cols-2 items-start justify-center gap-6  p-6 bg-white border border-gray-200 rounded-lg shadow mb-10m">
         <div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">Yhteys</h3>
          <p className="font-bold text-gray-700">AUKIOLOAJAT</p>
          <p className="font-normal text-gray-700">Maanantai-Perjantai 9.00–17.00</p>
          <p className="font-normal text-gray-700">Lauantai-Sunnuntai 8.00–16.00</p>
          <br></br>
          <p className="font-bold text-gray-700">Leskisen kukkakauppa ja hautaustoimisto</p>
          <p className="font-semibold text-gray-700">Arja ja Pasi Syynimaa</p>
          <p className="font-normal text-gray-700">Päämajantie 3</p>
          <p className="font-normal text-gray-700">62375 Kauhava</p>
          <p className="font-normal text-gray-700">puh: 0500266466</p>
          <p className="font-normal text-gray-700">puh: 06-4846299</p>
          <p className="font-normal text-gray-700">leskisenkukkakauppa@netikka.fi</p>
          <br></br>
          <div className='flex gap-x-5 flex-wrap'>
            <a href="https://www.sht-tukku.fi/" target="a_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">SHT-tukku</a>
            <a href="https://hyvathautajaiset.fi/" target="a_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Hyvät hautajaiset</a>
            <a href="https://shop.interflora.fi/" target="a_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Interflora</a>
            <a href="https://ekukka.fi/" target="a_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">eKukka</a>
          </div>
      </div>  
      <div className="flex items-center justify-center">
        <img
          alt="Contact image"
          className="rounded-lg object-cover"
          height="300"
          src="/liiketilat.jpg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
    </div>
  )
}

export default page
function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}