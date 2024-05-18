import React from 'react';
import IkanPariManta from "./img-pantai/pari-manta0.jpg";
import "./ikan.css";
import bgikan from "./img-pantai/bgdiving.jpg";

function PariManta() {
    const goBack = () => {
        window.history.back();
    };
    return (
        <div className="mx-auto py-8 px-4 bg-white bg-opacity-75 shadow-lg rounded-lg fadeIn"style={{ backgroundImage: `url(${bgikan})`}}>
            <div>
                <button onClick={goBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <p className='text-white'>Kembali</p>
                </button>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-10 mt-5 text-white italic">Pari Manta</h1>
                <img src={IkanPariManta} alt="Pari Manta" className="rounded shadow-lg mb-4 image-slide-in w-5/6" />
                <div className='text-center ml-20 mr-20'>
                    <p className="text-white">
                        Pari manta adalah ikan pari besar yang termasuk dalam genus Manta (terkadang dianggap sebagai sinonim dari genus Mobula). Spesies yang paling besar yakni Manta birostris (Pari manta raksasa, ikan pari terbesar di dunia) mencapai selebar 7 meter, sedangkan yang lebih kecil yakni spesies Manta alfredi mencapai selebar 5,5 m. Keduanya memiliki sirip dada berbentuk segitiga, sirip kepala berbentuk tanduk, dan mulut besar yang menghadap ke depan. Mereka diklasifikasikan dalam famili Myliobatidae. Mereka memiliki rasio otak dan tubuh terbesar dari semua jenis ikan, dan dapat lulus uji cermin.
                    </p>
                    <p className="mt-2 text-white">
                        Manta dapat ditemukan di lautan tropis di seluruh dunia - kurang lebih antara 35 derajat lintang utara hingga 35 derajat lintang selatan. Persebarannya yang luas dan penampilannya yang unik menyebabkan ikan ini memiliki banyak nama mulai dari "manta Pasifik", "manta Atlantik", "devil fish", hingga "sea devil". Di Indonesia sendiri, pari manta memiliki aneka nama lokal seperti cawang kalung, plampangan, serta pari kerbau.Mungkin karena bagian tubuh mirip (tanduk) di kepalanya sehingga ia dianggap mirip dengan (kerbau).
                    </p>
                    <p className="mt-2 text-white">
                        Pari manta belakangan dikategorikan sebagai "dekat dengan ancaman" (near threatened) oleh IUCN karena walaupun jumlahnya belum masuk kategori terancam punah, tetapi pada masa depan diperkirakan populasinya akan menyusut hingga akhirnya terancam punah. Populasi pari manta dianggap dekat dengan bahaya karena tingginya kegiatan perikanan dan kondisi laut yang semakin terpolusi, tetapi rasio kelahiran mereka rendah.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PariManta;