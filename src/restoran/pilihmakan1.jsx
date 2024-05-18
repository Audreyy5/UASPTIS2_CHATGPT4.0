import React from "react";
import "./pilihmakan1.css";
import babiguling1 from "./img-restaurant/babiguling1.jpeg"
import babiguling2 from "./img-restaurant/babiguling2.jpeg"

function Makanan1() {
    return (
        <div className="container-restoran">
            <br /><br /><br /><br /><br /><br />
            <h1 className="sambutan-restoran">Babi Guling</h1>
            <div className="image-container">
                <FoodImage image={babiguling1} alt="Nasi Babi Guling" />
                <FoodImage image={babiguling2} alt="Babi Guling" />
            </div>
            <p className="description">
                Babi Guling adalah makanan khas Bali yang terkenal. Makanan ini terbuat dari babi yang utuh dan biasanya dipanggang dengan cara yang khas. Proses persiapan babi guling dimulai dengan membersihkan babi secara menyeluruh, lalu mengisi perutnya dengan campuran rempah-rempah dan bumbu tradisional Bali, seperti bawang putih, bawang merah, jahe, kunyit, serai, daun salam, dan kemiri. Setelah itu, babi dipanggang di atas bara api atau dalam oven khusus dengan cara yang memastikan dagingnya matang merata dan kulitnya menjadi renyah.
                Salah satu hal yang membuat babi guling Bali begitu istimewa adalah kulitnya yang renyah dan berwarna kecokelatan, serta dagingnya yang empuk dan penuh dengan rasa rempah yang khas. Babi guling biasanya disajikan dengan nasi putih, lawar (makanan tradisional Bali yang terbuat dari campuran sayuran, daging, dan kelapa parut), sambal matah (sambal Bali yang terbuat dari bawang merah, cabai rawit, jeruk limau, dan bumbu lainnya), serta urutan (sosis khas Bali).
                Makanan ini sering disajikan pada acara-acara khusus seperti upacara adat, perayaan, atau acara keagamaan, tetapi juga dapat ditemui di restoran atau warung makan di Bali. Babi guling telah menjadi salah satu ikon kuliner Bali yang populer dan menjadi daya tarik wisata kuliner bagi wisatawan yang berkunjung ke pulau ini.      </p>
            <div className="buttons">
                <a href="stopwatch">
                    <button className="button makan-button">Stop Watch</button>
                </a>
                <a href='babi-guling'>
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

export default Makanan1;