import React from 'react';

export const metadata = {
  title: "Palvelut"
}


const page = () => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Yhteys</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
              <img className="h-auto max-w-full rounded-lg" src="/kuva1.jpg" alt="kukkakimppu" />
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="/kuva2.jpg" alt="kukkakimppu" />
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="/kuva3.jpg" alt="kukkakimppu" />
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="/kuva4.jpg" alt="kukkakimppu" />
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="/kuva5.jpg" alt="kukkakimppu" />
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="/kuva6.jpg" alt="kukkakimppu" />
          </div>
      </div>
    </div>
  )
}

export default page