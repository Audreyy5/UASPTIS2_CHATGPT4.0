import React from "react";
import "./pilihmakan1.css";
import ayambetutu1 from "./img-restaurant/ayambetutu1.jpg"
import ayambetutu2 from "./img-restaurant/ayambetutu2.jpg"

function Makanan2() {
    return (
        <div className="container-restoran">
            <br /><br /><br />
            <a href="listmakan">
                <button className="return-button mb-5 p-3 ml-1">&#8592; Kembali</button>
            </a>
            <h1 className="sambutan-restoran">Ayam Betutu</h1>
            <div className="image-container">
                <FoodImage image={ayambetutu1} alt="Ayam Betutu" />
                <FoodImage image={ayambetutu2} alt="Ayam Betutu" />
            </div>
            <p className="description">
                Ayam Betutu adalah hidangan khas Bali yang terkenal dengan cita rasa rempah-rempahnya yang khas dan proses memasaknya yang cukup unik. Hidangan ini terbuat dari ayam utuh yang direndam dalam campuran bumbu rempah-rempah khas Bali selama beberapa jam, kemudian dibungkus dengan daun pisang dan daun kelapa, lalu dipanggang atau dikukus dalam waktu yang cukup lama.
                Bumbu rempah-rempah yang digunakan untuk membuat ayam betutu biasanya terdiri dari bawang merah, bawang putih, cabai, jahe, kunyit, kemiri, serai, daun salam, daun jeruk, dan bumbu-bumbu lainnya. Proses merendam ayam dalam bumbu ini membuat daging ayam menjadi sangat meresap dan penuh dengan cita rasa rempah yang khas.
                Ayam Betutu biasanya disajikan dengan nasi putih, sayuran rebus, dan sambal matah. Hidangan ini sering disajikan pada acara-acara khusus seperti upacara adat, perayaan, atau acara keagamaan, tetapi juga dapat ditemui di restoran atau warung makan di Bali. Ayam Betutu juga telah menjadi salah satu ikon kuliner Bali yang populer dan menjadi daya tarik wisata kuliner bagi wisatawan yang berkunjung ke pulau ini.      </p>
            <div className="buttons">
                <a href="stopwatch">
                    <button className="button makan-button">Stop Watch</button>
                </a>
                <a href='ayam-betutu'>
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

export default Makanan2;