import React from 'react';
import IkanMolamola from "./img-pantai/mola-mola0.jpg";
import "./ikan.css";
import bgikan from "./img-pantai/bgdiving.jpg";


function MolaMola() {
    const goBack = () => {
        window.history.back();
    };
    return (
        <div className="mx-auto py-8 px-4 bg-white bg-opacity-75 shadow-lg rounded-lg fadeIn"style={{ backgroundImage: `url(${bgikan})`}}>
            <div className='mb-4'>
            <button onClick={goBack} className="ml-10 mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <p className='text-white'>Kembali</p>
                </button>
            </div>
            <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-10 mt-2 text-white italic">Ikan Molamola</h1>
                <img src={IkanMolamola} alt="Mola-mola" className="rounded shadow-lg mb-4 image-slide-in w-5/6" />
                <div className='text-center ml-20 mr-20 mt-5'>
                    <p className="text-white">
                        Ikan mola-mola (disebut pula ikan matahari) adalah semua ikan yang termasuk dalam genus Mola (famili Molidae). Ikan ini memiliki bentuk yang tampak buntung dan berbentuk seperti peluru karena sirip belakangnya yang tidak pernah berkembang. Seiring bertambahnya usia ikan, sirip tersebut justru melipat dan membentuk bagian bulat bernama clavus. Mola dalam bahasa Latin berarti "batu kilangan", yang mendeskripsikan bentuk ikan ini. Ikan dalam genus ini berwarna perak dan memiliki tekstur kulit yang kasar.
                        Ikan mola-mola adalah ikan bertulang sejati terberat, dengan spesimen besarnya dapat berukuran hingga 14 ft (4,3 m) secara vertikal dan 10 ft (3,0 m) secara horizontal, serta memiliki massa sekitar 5.000 pon (2.300 kg). Hiu dan pari dapat memiliki massa yang lebih berat daripada ikan mola-mola, tetapi mereka tergolong sebagai ikan bertulang rawan.
                        Mola-mola dapat ditemukan di laut dengan hangat dan di wilayah tropis. Ia sering kali ditemukan berjemur di bawah sinar matahari dan sirip dorsalnya yang menyembul di atas permukaan air kerap disangka sebagai sirip hiu. Struktur giginya menyatu hingga membentuk struktur seperti paruh. Ikan mola-mola juga tidak dapat menutup mulut kecil mereka dengan baik.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MolaMola;