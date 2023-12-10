import React from 'react'

const ContactBox = () => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Yhteystiedot</h5>
        <p className="font-bold text-gray-700 mb-1">Konehuolto J. Filppula</p>
        <p className="font-normal text-gray-700">Puhelin: 040 7584030</p>
        <p className="font-normal text-gray-700 md:break-all">konehuoltoj.filppula@hotmail.fi</p>
        <p className="font-normal text-gray-700">Pesolantie 304</p>
        <p className="font-normal text-gray-700">62300 HÄRMÄ</p>
    </div>
  )
}

export default ContactBox