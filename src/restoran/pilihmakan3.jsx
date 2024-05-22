import React from "react";
import "./pilihmakan1.css";
import satelilit1 from "./img-restaurant/satelilit1.jpg"
import satelilit2 from "./img-restaurant/satelilit2.webp"

function Makanan3() {
    return (
        <div className="container-restoran">
            <br /><br /><br />
            <a href="listmakan">
                <button className="return-button mb-5 p-3 ml-1">&#8592; Kembali</button>
            </a>
            <h1 className="sambutan-restoran">Sate Lilit</h1>
            <div className="image-container">
                <FoodImage image={satelilit1} alt="Sate Lilit" />
                <FoodImage image={satelilit2} alt="Sate Lilit" />
            </div>
            <p className="description">
                Sate Lilit adalah hidangan sate yang merupakan salah satu makanan khas Bali yang terkenal. Perbedaan utama sate lilit dengan sate pada umumnya adalah cara pembuatannya. Sate lilit tidak menggunakan tusuk sate seperti sate pada umumnya, melainkan daging yang dicincang halus dan dibalutkan pada batang serai atau bambu yang kemudian dipanggang.
                Daging yang digunakan untuk sate lilit bisa berupa daging ayam, daging sapi, atau daging babi yang dicincang halus dan dicampur dengan bumbu-bumbu rempah khas Bali seperti bawang merah, bawang putih, terasi, ketumbar, kemiri, jahe, lengkuas, serai, daun jeruk, dan garam. Campuran daging dan bumbu ini kemudian dibalutkan pada batang serai atau bambu yang telah diolesi minyak, lalu dipanggang di atas bara api hingga matang dan berwarna kecokelatan.
                Sate lilit biasanya disajikan dengan nasi putih, sambal matah, dan irisan mentimun atau tomat sebagai pelengkapnya. Hidangan ini sangat populer di Bali dan sering disajikan dalam berbagai acara, mulai dari acara keluarga hingga acara besar seperti upacara adat dan perayaan. Kesegaran bumbu rempah dan keunikan cara penyajian sate lilit menjadikannya salah satu hidangan yang wajib dicoba bagi wisatawan yang berkunjung ke Bali.            </p>
            <div className="buttons">
                <a href="stopwatch">
                    <button className="button makan-button">Stop Watch</button>
                </a>
                <a href='sate-lilit'>
                    <button className="button lihat-resep-button">Lihat Resep</button>
                </a>
            </div>
        </div>
    );
}

function FoodImage({ image, alt }) {
    return (
        <div className="food-image">
            <img src={image} alt={alt} />
            <div className="image-overlay">
                <span>{alt}</span>
            </div>
        </div>
    );
}

export default Makanan3;