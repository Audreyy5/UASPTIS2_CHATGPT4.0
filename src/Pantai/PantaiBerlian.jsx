import React from 'react';
import './InfoPantai.css';
import PantaiBerlian1 from "./img-pantai/PantaiBerlian_1.jpeg";
import PantaiBerlian2 from "./img-pantai/PantaiBerlian_3.jpeg";

function PantaiBerlian() {
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
                    <h1 className='h1-infopantai'>Pantai Berlian</h1>
                </div>
                <div className='foto-infopantai'>
                    <img src={PantaiBerlian1} alt="Gambar 1" className='image-pantai' />
                    <img src={PantaiBerlian2} alt="Gambar 2" className='image-pantai' />
                </div>
                <div className='deskripsi-infopantai'>
                    <p className='p-infopantai'>Bali, sebagai salah satu destinasi wisata terpopuler di Indonesia, terkenal dengan pantainya yang eksotis dan keindahan alamnya yang menakjubkan. Salah satu permata tersembunyi di Bali adalah Diamond Beach, yang terletak di Pulau Nusa Penida. Diamond Beach menjadi tujuan yang sangat populer bagi para wisatawan yang ingin menikmati keindahan alam yang masih alami dan memukau.
                        Diamond Beach dikenal karena keindahan pasir putihnya yang halus seperti butiran berlian, yang memberinya nama yang sesuai. Pantai ini juga terkenal dengan tebing karang yang menjulang tinggi dan air laut yang jernih berwarna biru kehijauan. Pemandangan ini menciptakan kontras yang menakjubkan dan membuat Diamond Beach menjadi tempat yang sempurna untuk mengambil foto yang instagramable.
                        Diamond Beach terletak di sisi timur Pulau Nusa Penida, sekitar 2 jam perjalanan dengan kapal cepat dari Pelabuhan Sanur di Bali. Setelah tiba di Pulau Nusa Penida, Anda dapat menggunakan transportasi darat atau motor untuk mencapai Diamond Beach. Perjalanan menuju Diamond Beach mungkin sedikit menantang karena medan yang terjal dan jalan yang belum sepenuhnya diaspal, namun pemandangan yang menakjubkan sepanjang perjalanan akan membuat Anda melupakan segala kesusahan tersebut.
                        Diamond Beach menawarkan berbagai aktivitas menarik bagi para pengunjungnya. Salah satu aktivitas yang paling populer adalah berenang dan snorkeling di perairan yang jernih. Anda dapat menjelajahi keindahan bawah laut yang memukau dengan melihat terumbu karang yang indah dan ragam kehidupan laut yang beragam.
                        Selain itu, Anda juga dapat bersantai di pantai sambil menikmati panorama yang menakjubkan. Anda dapat berjemur di pasir putih yang lembut sambil mendengarkan suara deburan ombak atau berjalan-jalan di sepanjang pantai yang indah.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PantaiBerlian;