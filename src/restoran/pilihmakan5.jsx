import React from "react";
import "./pilihmakan1.css";
import nasicampur1 from "./img-restaurant/nasicampur1.jpg"
import nasicampur2 from "./img-restaurant/nasicampur2.webp"

function Makanan5() {
    return (
        <div className="container-restoran">
            <br /><br /><br /><br /><br /><br />
            <h1 className="sambutan-restoran">Nasi Campur Bali</h1>
            <div className="image-container">
                <FoodImage image={nasicampur1} alt="Nasi Campur" />
                <FoodImage image={nasicampur2} alt="Nasi Campur" />
            </div>
            <p className="description">
                Nasi Campur Bali adalah hidangan nasi yang disajikan dengan berbagai macam lauk dan sayuran khas Bali. Hidangan ini biasanya terdiri dari nasi putih sebagai basisnya, kemudian dilengkapi dengan lauk seperti ayam betutu, sate lilit, lawar, telur bumbu Bali, serta irisan mentimun, tomat, dan kacang panjang sebagai pelengkapnya. Nasi campur Bali juga sering disajikan dengan sambal matah yang pedas dan segar.
                Keunikan dari nasi campur Bali terletak pada variasi lauk dan sayuran yang disajikan, serta penggunaan bumbu dan rempah-rempah khas Bali yang memberikan cita rasa yang khas dan lezat. Hidangan ini merupakan salah satu menu favorit di warung-warung makan dan restoran di Bali, serta sering disajikan dalam acara-acara khusus dan perayaan di pulau ini.            </p>
            <div className="buttons">
                <a href="stopwatch">
                    <button className="button makan-button">Stop Watch</button>
                </a>
                <a href='nasi-campur'>
                    <button className="button lihat-resep-button">Lihat Resep</button>
                </a>
            </div>
            <a href="listmakan">
                <button className="return-button">&#8592; Kembali</button>
            </a>

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

export default Makanan5;