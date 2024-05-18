import React from 'react';
import PenyuLautt from "./img-pantai/penyu-laut0.jpg";
import "./ikan.css";
import bgikan from "./img-pantai/bgdiving.jpg";

function PenyuLaut() {
    const goBack = () => {
        window.history.back();
    };
    return (
        <div className="mx-auto py-8 px-4 bg-white bg-opacity-75 shadow-lg rounded-lg fadeIn"style={{ backgroundImage: `url(${bgikan})`}}>
            <div>
                <button onClick={goBack} className="ml-10 mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <p className='text-white'>Kembali</p>
                </button>
            </div>
            <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-10 mt-2 text-white italic">Penyu Laut</h1>
                <img src={PenyuLautt} alt="Penyu Laut" className="rounded shadow-lg mb-4 image-slide-in w-5/6" />
                <div className='text-center ml-20 mr-20 mt-5'>
                    <p className="text-white">
                        Penyu atau katung adalah kura-kura laut yang ditemukan di semua samudra di dunia. Penyu sudah ada sejak akhir zaman Kapur atau seusia dengan dinosaurus. Fosil penyu tertua setidaknya berumur 120 juta tahun. Fosil itu menunjukkan semua ciri khas penyu modern. Archelon, yang berukuran panjang badan 4,5 meter, 75-65 juta tahun lalu telah berenang di laut purba seperti penyu masa kini.
                        Penyu memiliki sepasang tungkai depan yang berupa kaki pendayung yang memberinya ketangkasan berenang di dalam air. Pada umumnya, kaki depan hanya memiliki satu cakar. Cakar kedua biasanya tidak ada atau berukuran sangat kecil. Hewan jantan dapat dibedakan dari betina dengan melihat ukuran cakar kaki depan dan ekor yang relatif panjang.
                        Walaupun seumur hidupnya berkelana di dalam air, penyu tetap harus naik ke permukaan air untuk mengambil napas. Hal itu disebabkan sistem pernapasan penyu yang menggunakan paru-paru. Untuk memudahkannya mengambil udara dari permukaan air, penyu memiliki lubang hidung yang dekat dengan permukaan atas tengkorak. Tidak diketahui seberapa jauh penyu bisa berenang tanpa istirahat. Beberapa penyu telah menempuh jarak 3.000 km dalam waktu sekitar 3 bulan.
                        Penyu mengalami siklus bertelur yang beragam, dari 2 - 8 tahun sekali. Sementara penyu jantan menghabiskan seluruh hidupnya di laut, betina sesekali mampir ke daratan untuk bertelur. Penyu betina menyukai pantai berpasir yang sepi dari manusia dan sumber bising dan cahaya sebagai tempat bertelur yang berjumlah ratusan itu, dalam lubang yang digali dengan sepasang tungkai belakangnya. Pada saat mendarat untuk bertelur, gangguan berupa cahaya ataupun suara dapat membuat penyu mengurungkan niatnya dan kembali ke laut, juga penyu menggunakan magnetism bumi sebagai bantuan untuk kembali ke kampung halamannya ketika saat masih menjadi tukik, dan kembali saat sudah dewasa untuk bertelur.
                        Penyu yang menetas di perairan pantai Indonesia ada yang ditemukan di sekitar kepulauan Hawaii. Penyu diketahui tidak setia pada tempat kelahirannya. Tidak banyak regenerasi yang dihasilkan seekor penyu. Dari ratusan butir telur yang dikeluarkan oleh seekor penyu betina, paling banyak hanya belasan tukik (bayi penyu) yang berhasil sampai ke laut kembali dan tumbuh dewasa. Itu pun tidak memperhitungkan faktor perburuan oleh manusia dan pemangsa alaminya seperti kepiting, burung dan tikus di pantai, serta ikan-ikan besar begitu tukik tersebut menyentuh perairan dalam.
                    </p><br />
                </div>
            </div>
        </div>
    )
}

export default PenyuLaut;