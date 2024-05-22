import React from "react";
import { Helmet } from "react-helmet";
import "./lihatresep.css";
import lawarImage from "./img-restaurant/lawar1.jpg";

const goBack = () => {
  window.history.back();
};

const Lawar = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Young+Serif&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./output.css" />
        <link
          rel="icon"
          type="image/x-icon"
          href="./assets/images/favicon.ico"
        />
        <title>Lawar Bali</title>
      </Helmet>
      <body className="min-h-screen md:flex justify-center items-center md:bg-eggshell">
        <main>
          <article className="bg-white md:my-20 md:py-8 pb-8 md:rounded-xl md:max-w-screen-md">
            <button onClick={goBack} className="p-2 mt-2 mb-5 text-lg bg-pink-500 text-white rounded hover:bg-red-200 shadow">
              Kembali
            </button>
            <picture>
              <img
                src={lawarImage}
                alt="Lawar Bali"
                className="md:max-w-90% md:mx-auto md:rounded-xl"
              />
            </picture>
            <div className="px-8 font-outfit text-wenge-brown">
              <h1 className="font-fancy text-4xl mt-8 text-dark-charcoal">
                Resep Lawar Bali
              </h1>
              <p className="mt-6">
                Lawar adalah salah satu hidangan khas Bali yang terbuat dari
                daging cincang, sayuran, dan rempah-rempah. Hidangan ini
                memiliki cita rasa yang kaya dan tekstur yang unik karena
                menggunakan bumbu-bumbu tradisional Bali.
              </p>
              <article className="bg-rose-white mt-6 p-5 rounded-xl">
                <h2 className="text-dark-raspberry text-xl font-semibold ml-2">
                  Waktu Persiapan dan Memasak
                </h2>
                <ul className="list-disc mt-3 ml-8 text-lg marker:text-dark-raspberry">
                  <li className="pl-3">
                    <p>
                      <span className="font-semibold">Total: </span>1 jam 30 menit
                    </p>
                  </li>
                  <li className="mt-3 pl-3">
                    <p>
                      <span className="font-semibold">Waktu Persiapan: </span>
                      30 menit
                    </p>
                  </li>
                  <li className="mt-3 pl-3">
                    <p>
                      <span className="font-semibold">Waktu Memasak: </span>1 jam
                    </p>
                  </li>
                </ul>
              </article>
              <div className="mt-8">
                <h3 className="font-fancy text-3xl text-nutmeg">
                  Bahan-Bahan yang Diperlukan
                </h3>
                <ul className="list-disc marker:text-nutmeg mt-4 ml-6 text-wenge-brown marker:align-middle">
                  <li className="pl-4">300 gram daging babi cincang</li>
                  <li className="pl-4 mt-2">200 gram kelapa parut, sangrai</li>
                  <li className="pl-4 mt-2">100 gram kacang panjang, potong kecil-kecil</li>
                  <li className="pl-4 mt-2">100 gram kecambah, cuci bersih</li>
                  <li className="pl-4 mt-2">3 lembar daun jeruk, iris tipis</li>
                  <li className="pl-4 mt-2">3 lembar daun salam</li>
                  <li className="pl-4 mt-2">2 batang serai, memarkan</li>
                  <li className="pl-4 mt-2">2 cm lengkuas, memarkan</li>
                  <li className="pl-4 mt-2">2 cm jahe, memarkan</li>
                  <li className="pl-4 mt-2">2 lembar daun kunyit</li>
                  <li className="pl-4 mt-2">2 sendok makan minyak goreng</li>
                  <li className="pl-4 mt-2">Garam secukupnya</li>
                  <li className="pl-4 mt-2">Gula secukupnya</li>
                  <li className="pl-4 mt-2">Air secukupnya</li>
                </ul>
                <br />
                <h3 className="font-fancy text-3xl text-nutmeg">
                  Bumbu Halus
                </h3>
                <ul className="list-disc marker:text-nutmeg mt-4 ml-6 text-wenge-brown marker:align-middle">
                  <li className="pl-4">6 butir bawang merah</li>
                  <li className="pl-4 mt-2">4 siung bawang putih</li>
                  <li className="pl-4 mt-2">3 buah cabai merah</li>
                  <li className="pl-4 mt-2">2 buah cabai rawit (sesuai selera)</li>
                  <li className="pl-4 mt-2">1 sendok teh terasi, bakar</li>
                </ul>
              </div>
              <div className="w-full h-px bg-light-gray mx-auto mt-8"></div>
              <div className="mt-8">
                <h3 className="font-fancy text-3xl text-nutmeg">
                  Instruksi Pembuatan
                </h3>
                <ol className="marker:text-nutmeg marker:font-semibold marker:font-outfit list-decimal mt-4 ml-6">
                  <li className="pl-4">
                    <p>
                      <span className="font-bold">
                        Panaskan minyak goreng
                      </span>{" "}
                      dalam wajan. Tumis bumbu halus bersama daun salam,
                      serai, lengkuas, jahe, dan daun kunyit hingga harum.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">
                        Masukkan daging babi cincang
                      </span>{" "}
                      ke dalam wajan. Aduk rata dan masak hingga daging matang.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">
                        Setelah daging matang,                      tambahkan kelapa parut
                      </span>
                      . Aduk rata dan masak hingga kelapa parut mengering dan
                      tercampur merata dengan daging.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">
                        Masukkan kacang panjang dan kecambah
                      </span>{" "}
                      ke dalam wajan. Aduk rata dan masak sebentar hingga
                      sayuran layu.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">
                        Tuangkan air secukupnya
                      </span>{" "}
                      ke dalam wajan. Masak sambil sesekali diaduk hingga semua
                      bahan matang dan bumbu meresap.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">
                        Koreksi rasa
                      </span>{" "}
                      dengan menambahkan garam dan gula sesuai selera.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Angkat</span> dan sajikan lawar
                      dalam piring saji.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="w-full h-px bg-light-gray mx-auto mt-8"></div>
              <div className="mt-8">
                <h3 className="font-fancy text-3xl text-nutmeg">
                  Kandungan Gizi (Per 100 gram)
                </h3>
                <ul className="mt-6">
                  <li>
                    <div className="flex">
                      <p className="ml-8 text-lg w-full mr-auto">Kalori</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        250 kkal
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">
                        Karbohidrat
                      </p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        10g
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Protein</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        15g
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Lemak</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        18g
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <button onClick={goBack} className="p-2 mt-10 text-lg bg-red-200 text-white rounded hover:bg-blue-600 shadow">
              Kembali
            </button>
          </article>
        </main>
      </body>
    </>
  );
};

export default Lawar;


