import React from 'react';

export const metadata = {
  title: "Yhteystiedot"
}

const page = () => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow mb-10">
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
    </div>
  )
}

export default page