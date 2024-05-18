import React from 'react';
import './InfoPantai.css';
import PantaiUluwatu1 from "./img-pantai/PantaiUluwatu_1.jpg";
import PantaiUluwatu2 from "./img-pantai/PantaiUluwatu2.jpeg";

function PantaiUluwatu() {
    const goBack = () => {
        window.history.back();
    };
    return (
        <div className='container-infopantai'>
            <div className='button-back-infopantai'>
                <button className='back-infopantai' onClick={goBack}><p className='p-infopantai'>Kembali</p></button>
            </div>
            <div className='box-infopantai'>
                <div className='NamaPantai'>
                    <h1 className='h1-infopantai'>Pantai Uluwatu</h1>
                </div>
                <div className='foto-infopantai'>
                        <img src={PantaiUluwatu1} alt="Gambar 3" className='image-pantai' />
                        <img src={PantaiUluwatu2} alt="Gambar 3" className='image-pantai' />
                </div>
                <div className='deskripsi-infopantai'>
                    <p className='p-infopantai'>
                        Pantai Uluwatu adalah salah satu destinasi pesisir paling terkenal dan spektakuler di Bali. Terletak di ujung selatan pulau ini, pantai ini terkenal dengan ombaknya yang besar dan menarik bagi para peselancar, serta pemandangan tebing-tebing kapur yang megah. Berikut adalah beberapa informasi yang perlu Anda ketahui tentang Pantai Uluwatu:
                        Pantai Uluwatu menawarkan pemandangan alam yang luar biasa, dengan tebing-tebing yang menjulang tinggi di atas laut biru yang luas. Ombak yang besar dan kuat menjadikan pantai ini sebagai surga bagi peselancar berpengalaman, tetapi juga membuatnya kurang cocok untuk renang bagi pemula.
                        Di atas tebing pantai terdapat Pura Uluwatu, sebuah pura Hindu yang kuno dan salah satu tempat suci terpenting di Bali. Pura ini menawarkan pemandangan spektakuler matahari terbenam dan tarian Kecak yang mengagumkan di sore hari. Selain keindahan alamnya, Pantai Uluwatu juga dikenal karena pertunjukan seni dan budaya yang mengagumkan. Setiap sore, pertunjukan tarian Kecak yang dramatis dan penuh energi diadakan di Pura Uluwatu, menambah pengalaman wisatawan yang mengunjungi pantai ini.
                        Pantai Uluwatu dilengkapi dengan berbagai fasilitas wisata seperti warung makan, kios suvenir, dan area parkir. Namun, fasilitas umum di pantai ini mungkin terbatas, jadi disarankan untuk membawa perlengkapan pribadi Anda.
                        Salah satu momen yang paling dinantikan oleh pengunjung Pantai Uluwatu adalah matahari terbenam. Pemandangan matahari terbenam dari atas tebing Pura Uluwatu adalah pengalaman yang memukau dan tak terlupakan.
                    </p>
                </div>
            </div>



        </div>
    )
}

export default PantaiUluwatu;