import React from 'react'

const page = () => {
  return (
    <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Vuokraus</h3>
        <p className="font-bold text-gray-700">Meiltä vuokralle myös vesijetit</p>
        <p className="text-gray-700 mb-3">Saatavilla kaksi kappaletta Sea-Doo Spark Trixx jettiä. Vuokraan sisältyy traileri, joko yhdelle tai kahdelle jetille. Molemmat trailerit ovat jarruttomia, joten ne kulkevat kivasti henkilöautonkin perässä.</p>
        <p className="text-gray-700 mb-3">Arkipäivisin 150€/vuorokausi/jetti. Viikonloppuisin 180€/vuorokausi/jetti.</p>
        <p className="text-gray-700 mb-3">Ota yhteyttä ja kysy lisää!</p>
        <img className="h-auto max-w-full mb-10" src="/jetti_front.jpg" alt="vesijetti"/>
        <img className="h-auto max-w-full" src="/jetti_back.jpg" alt="vesijetti"/>
    </div>
  )
}

export default page