
export default function Home() {
  return (
    <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-2 text-gray-900">Leskisen kukkakauppa</h3>
      <p className="mb-3 text-gray-700"> Arja ja Pasi Syynimaan Leskisen kukkakauppa ja Hautaustoimisto tarjoaa lämmintä ja asiantuntevaa palvelua Ylihärmän keskustassa. Yrityksellä on perinteikäs ja pitkä historia.</p>
      <p className="mb-3 text-gray-700">Vuonna 1963 perustettu yritys on palvellut asiakkaitaan jo yli 60 vuoden ajan. Kukkakauppa tarjoaa runsaan kukkakimppujen, kukka-asetelmien ja ruukkukukkien valikoiman. Lisäksi myymme lahjatavaroita, maljakoita, enkeleitä, kynttilöitä ja muita koriste-esineitä.</p>
      <p className="mb-3 text-gray-700">Myymme enimmäkseen kotimaassa ja Hollannissa eettisesi tuotettuja leikko- ja ruukkukukkia. Toimitamme hautalaitteet perille kirkkoihin lähialueella. Kuulumme <a href="https://shop.interflora.fi/" target="a_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Interflora</a> ja <a href="https://ekukka.fi/" target="a_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">e-kukka</a> kukkavälityksiin, tilauksenne toimitamme huolella perille.</p>
      <p className="mb-3 text-gray-700">Hautaustoimisto tarjoaa kokonaisvaltaista hautauspalvelua. Hoidamme hautauskuljetukset sekä kotimaassa että ulkomailta Suomeen. Käytämme kotimaisia <a href="https://www.sht-tukku.fi/" target="a_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">SHT-tukun</a> arkkuja, uurnia ja hautaustarvikkeita, jotka valmistetaan Punkalaitumella.</p>
      <div className="mt-10">        
        <img className="h-auto max-w-full md:max-w-md" src="/kukkahylly.jpg" alt="Kukkahylly" />
      </div>
      <p className="mb-3 text-gray-700 mt-2">Tervetuloa tutustumaan valikoimaamme paikan päälle!</p>
    </div>
  )
}
