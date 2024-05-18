import React from 'react';
import IkanHiuKarang from "./img-pantai/hiu-karang0.jpeg"
import "./ikan.css";
import bgikan from "./img-pantai/bgdiving.jpg";

function HiuKarang() {
    const goBack = () => {
        window.history.back();
    };
    return (
        <div className="mx-auto py-8 px-4 bg-white bg-opacity-75 shadow-lg rounded-lg fadeIn"style={{ backgroundImage: `url(${bgikan})`}}>
            <div className="mb-4">
                <button onClick={goBack} className="ml-10 mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <p className='text-white'>Kembali</p>
                </button>
            </div>
            <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-10 mt-2 text-white italic">Hiu Karang</h1>
                <img src={IkanHiuKarang} alt="Hiu Karang" className="rounded shadow-lg mb-4 image-slide-in w-5/6" />
                <div className='text-center ml-20 mr-20'>
                    <p className='text-white'>
                        Ini adalah hiu berukuran sedang dengan panjang tubuh rata-rata sekitar 1,60 meter. Hiu karang ditandai dengan tubuh yang ramping dengan kepala yang luas, yang jelas dikembangkan dan juga kulit flap karakteristik samping lubang hidung, mata oval besar dengan murid vertikal, dan warna putih eponymous dari ujung sirip punggung dan sirip ekor. Ini adalah salah satu hiu yang paling umum di terumbu karang di Indo-Pasifik, dengan area sirkulasi ke barat Afrika dan timur ke pantai Amerika Tengah terakhir. Dia tinggal sebagian besar di air jernih di dekat dasar laut di kedalaman air dari 8 sampai 40 meter.
                    </p>
                    <p className="mt-2 text-white">
                        Distribusi karang ujung wilayah hiu ini mencakup area yang luas dari Indo-Pasifik. Hal ini berkisar mulai Samudra Hindia dari KwaZulu-Natal di Afrika Selatan hingga Laut Merah dan anak benua India, termasuk daerah di sekitar Madagaskar, Mauritius, Komoro, kepulauan Aldabra, kepulauan Seychelles, Sri Lanka, Maladewa dan kepulauan Chagos. Di barat dan tengah Pasifik, berkisar dari selatan Cina, Taiwan dan Kepulauan Ryukyu ke Asia Tenggara termasuk Filipina, Indonesia dan pantai utara Australia. Dia juga tinggal di pulau banyak kelompok Pasifik seperti Melanesia, Mikronesia dan Polinesia sejauh Hawaii di utara dan Kepulauan Pitcairn di tenggara. Di Pasifik timur, hiu ini juga berada di daerah pesisir Kosta Rika hingga Panama menyebar, dan hidup penduduk marginal di wilayah Kepulauan Galapagos.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default HiuKarang;