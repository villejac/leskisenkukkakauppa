"use client" 

import React from 'react';
import {
  AiOutlineInstagram,
} from "react-icons/ai"

const ContactBox = () => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Yhteystiedot</h5>
        <p className="font-bold text-gray-700 mb-1">Konehuolto J. Filppula</p>
        <p className="font-normal text-gray-700">Puhelin: 040 7584030</p>
        <p className="font-normal text-gray-700 md:break-all">konehuoltoj.filppula@hotmail.fi</p>
        <p className="font-normal text-gray-700">Pesolantie 304</p>
        <p className="font-normal text-gray-700">62300 HÄRMÄ</p>
        <a href="https://www.instagram.com/konehuolto_filppula/" rel="noreferrer" target="_blank" className='inline-block mt-2'>
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-800"
              size={30}
            />
        </a>
    </div>
  )
}

export default ContactBox