import React from 'react';
import './InfoPantai.css';
import PantaiKelingking2 from "./img-pantai/PantaiKelingking_2.jpg";
import PantaiKelingking1 from "./img-pantai/PantaiKelingking_3.webp";

function PantaiKelingking() {
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
                    <h1 className='h1-infopantai'>Pantai Kelingking</h1>
                </div>
                <div className='foto-infopantai'>
                    <img src={PantaiKelingking2} alt="Gambar 2" className='image-pantai' />
                    <img src={PantaiKelingking1} alt="Gambar 3" className='image-pantai' />
                </div>
                <div className='deskripsi-infopantai'>
                    <p className='p-infopantai'>Pantai Kelingking adalah salah satu tempat wisata paling ikonik di Pulau Nusa Penida, yang terletak di sebelah tenggara Bali. Nama "Kelingking" berasal dari bentuk pantai yang menyerupai bentuk jari kelingking manusia. Pantai ini terkenal dengan pemandangannya yang spektakuler, dengan tebing-tebing curam yang menjulang tinggi di atas laut biru.
                        Untuk mencapai Pantai Kelingking, Anda perlu melakukan perjalanan dengan perahu cepat dari pelabuhan Sanur atau pelabuhan Padangbai di Bali ke Nusa Penida. Setelah tiba di Nusa Penida, Anda dapat menggunakan kendaraan darat atau menyewa sepeda motor untuk mencapai pantai tersebut. Perjalanan dari pelabuhan ke Pantai Kelingking bisa memakan waktu sekitar 1-2 jam, tergantung dari lokasi Anda berada di Nusa Penida.
                        Untuk mencapai area pantai dan pemandangan terbaik, Anda harus menuruni tangga-tangga curam yang terukir di tebing. Trekking ini membutuhkan sedikit kelincahan dan kehati-hatian, terutama saat turun. Namun, pemandangan yang menakjubkan di ujung perjalanan trekking akan membuat usaha Anda terbayar. Dari atas tebing juga, Anda bisa melihat ikan Pari Manta. Saat menjelajahi Pantai Kelingking, penting untuk berhati-hati dan mengikuti petunjuk keselamatan. Tebing-tebing di sekitar pantai ini curam dan tidak terlindungi, sehingga perlu dihindari untuk mendekatinya terlalu jauh atau memanjat tanpa peralatan yang sesuai.
                        Pemandangan terbaik di Pantai Kelingking biasanya bisa dinikmati saat pagi hari atau sore menjelang matahari terbenam. Saat ini, cahaya matahari akan memperindah warna air laut dan tebing-tebing yang mempesona. Di sekitar Pantai Kelingking, Anda akan menemukan beberapa warung makan kecil dan kios yang menjual minuman dan makanan ringan. Namun, fasilitas umum di pantai ini terbatas, jadi disarankan untuk membawa air minum dan perlengkapan lainnya sendiri.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PantaiKelingking;