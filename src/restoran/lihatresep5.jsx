import React from "react";
import { Helmet } from "react-helmet";
import "./lihatresep.css";
import nasiCampur from "./img-restaurant/nasicampur1.png";

const goBack = () => {
  window.history.back();
};

const NasiCampurBali = () => {
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
        <title>Nasi Campur Bali</title>
      </Helmet>
      <body className="min-h-screen md:flex justify-center items-center md:bg-eggshell">
        <main>
          <article className="bg-white md:my-20 md:py-8 pb-8 md:rounded-xl md:max-w-screen-md">
            <picture>
              <img
                src={nasiCampur}
                alt="Nasi Campur Bali"
                className="md:max-w-90% md:mx-auto md:rounded-xl"
              />
            </picture>
            <div className="px-8 font-outfit text-wenge-brown">
              <h1 className="font-fancy text-4xl mt-8 text-dark-charcoal">
                Resep Nasi Campur Bali
              </h1>
              <p className="mt-6">
                Nasi Campur Bali adalah hidangan khas Bali yang terdiri dari nasi putih yang disajikan dengan berbagai macam lauk dan sambal khas Bali. Hidangan ini kaya akan cita rasa dan tekstur yang beragam, mencerminkan kekayaan kuliner Bali.
              </p>
              <article className="bg-rose-white mt-6 p-5 rounded-xl">
                <h2 className="text-dark-raspberry text-xl font-semibold ml-2">
                  Waktu Persiapan dan Memasak
                </h2>
                <ul className="list-disc mt-3 ml-8 text-lg marker:text-dark-raspberry">
                  <li className="pl-3">
                    <p>
                      <span className="font-semibold">Total:</span> 2-3 jam
                    </p>
                  </li>
                  <li className="mt-3 pl-3">
                    <p>
                      <span className="font-semibold">Waktu Persiapan:</span>{" "}
                      1-2 jam
                    </p>
                  </li>
                  <li className="mt-3 pl-3">
                    <p>
                      <span className="font-semibold">Waktu Memasak:</span> 1
                      jam
                    </p>
                  </li>
                </ul>
              </article>
              <div className="mt-8">
                <h3 className="font-fancy text-3xl text-nutmeg">
                  Bahan-Bahan yang Diperlukan
                </h3>
                <ul className="list-disc marker:text-nutmeg mt-4 ml-6 text-wenge-brown marker:align-middle">
                  <li className="pl-4">
                    2 gelas beras, cuci bersih dan tiriskan
                  </li>
                  <li className="pl-4 mt-2">4 gelas air</li>
                  <li className="pl-4 mt-2">1 batang serai, memarkan</li>
                  <li className="pl-4 mt-2">2 lembar daun salam</li>
                  <li className="pl-4 mt-2">2 lembar daun jeruk</li>
                  <li className="pl-4 mt-2">Garam secukupnya</li>
                  <li className="pl-4 mt-2">Ayam betutu (dapat diganti dengan ayam goreng bumbu Bali)</li>
                  <li className="pl-4 mt-2">Sate lilit</li>
                  <li className="pl-4 mt-2">Lawar (daging atau ayam)</li>
                  <li className="pl-4 mt-2">Telur rebus</li>
                  <li className="pl-4 mt-2">Irisan tahu goreng</li>
                  <li className="pl-4 mt-2">Irisan tempe goreng</li>
                  <li className="pl-4 mt-2">Sambal matah</li>
                  <li className="pl-4 mt-2">Sambal terasi</li>
                  <li className="pl-4 mt-2">Irisan timun</li>
                  <li className="pl-4 mt-2">Irisan tomat</li>
                  <li className="pl-4 mt-2">Kerupuk Bali</li>
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
                      <span className="font-bold">Masak nasi:</span> Didihkan
                      air dalam panci. Tambahkan beras, serai, daun salam, daun
                      jeruk, dan garam. Masak hingga nasi matang dan air
                      terserap sempurna. Angkat dan sisihkan.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Siapkan lauk:</span> Goreng
                      ayam betutu atau ayam goreng bumbu Bali hingga matang.
                      Panggang sate lilit hingga kecoklatan dan matang. Siapkan
                      lawar dan telur rebus. Goreng tahu dan tempe hingga
                      kecoklatan.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Siapkan sambal:</span> Siapkan
                      sambal matah dan sambal terasi sesuai dengan selera.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Sajikan:</span>  Letakkan nasi putih dalam piring saji. Susun lauk-lauk yang telah disiapkan di sekitar nasi. Sajikan juga sambal, irisan timun, irisan tomat, dan kerupuk Bali sebagai pelengkap.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="w-full h-px bg-light-gray mx-auto mt-8"></div>
              <div className="mt-8">
                <h3 className="font-fancy text-3xl text-nutmeg">
                  Kandungan Gizi (Per 100 Gram)
                </h3>
                <ul className="mt-6">
                  <li>
                    <div className="flex">
                      <p className="ml-8 text-lg w-full mr-auto">Kalori</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        300 kkal
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Protein</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        24g
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Lemak</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        15g
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Karbohidrat</p>
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

export default NasiCampurBali;
