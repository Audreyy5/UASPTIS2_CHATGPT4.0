import React from "react";
import "./pilihmakan1.css";
import lawar1 from "./img-restaurant/lawar1.jpg"
import lawar2 from "./img-restaurant/lawar2.webp"

function Makanan4() {
    return (
        <div className="container-restoran">
            <br /><br /><br /><br /><br /><br />
            <h1 className="sambutan-restoran">Lawar</h1>
            <div className="image-container">
                <FoodImage image={lawar1} alt="Lawar" />
                <FoodImage image={lawar2} alt="Lawar" />
            </div>
            <p className="description">
                Lawar adalah salah satu makanan khas Bali yang terbuat dari campuran daging cincang dan sayuran, yang diolah dengan rempah-rempah dan bumbu khas Bali. Ada dua jenis lawar yang populer di Bali, yaitu lawar putih dan lawar merah. Lawar putih terbuat dari daging ayam atau babi yang direbus dan dicincang halus, kemudian dicampur dengan kelapa parut, bawang merah, bawang putih, cabai, jeruk nipis, dan bumbu-bumbu lainnya. Sedangkan lawar merah memiliki tambahan darah babi yang memberikan warna merah pada hidangannya.
                Proses pembuatan lawar melibatkan penggorengan rempah-rempah dan bumbu hingga harum, lalu ditambahkan dengan daging yang telah dimasak dan sayuran seperti kacang panjang, daun kacang, dan kelapa parut. Semua bahan kemudian dicampur dengan rata dan disajikan dengan nasi putih.
                Lawar biasanya disajikan sebagai pelengkap dalam upacara adat, perayaan, atau acara keagamaan di Bali. Rasa gurih dan rempah-rempah yang khas membuat lawar menjadi hidangan yang digemari oleh masyarakat Bali dan wisatawan yang berkunjung ke pulau ini.            </p>
            <div className="buttons">
                <a href="stopwatch">
                    <button className="button makan-button">Stop Watch</button>
                </a>
                <a href='lawar'>
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

export default Makanan4;