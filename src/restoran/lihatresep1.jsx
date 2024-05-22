import React from "react";
import { Helmet } from "react-helmet";
import "./lihatresep.css";
import babiGuling from "./img-restaurant/babiguling.jpeg";

const goBack = () => {
  window.history.back();
};

const BabiGuling = () => {
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
        <title>Babi Guling</title>
      </Helmet>
      <body className="min-h-screen md:flex justify-center items-center md:bg-eggshell-200">
        <main>
          <article className="bg-white md:my-20 md:py-8 pb-8 md:rounded-xl md:max-w-screen-md">
            <button onClick={goBack} className="p-2 mt-2 mb-5 text-lg bg-pink-500 text-white rounded hover:bg-red-200 shadow">
              Kembali
            </button>
            <picture>
              <img
                src={babiGuling}
                alt="Babi Guling"
                className="md:max-w-90% md:mx-auto md:rounded-xl"
              />
            </picture>
            <div className="px-8 font-outfit text-wenge-brown">
              <h1 className="font-fancy text-4xl mt-8 text-dark-charcoal">
                Resep Babi Guling
              </h1>
              <p className="mt-6">
                Babi Guling adalah hidangan tradisional khas Bali, Indonesia,
                yang sangat populer dan biasanya disajikan pada upacara adat
                dan perayaan khusus. Babi Guling adalah babi utuh yang
                dipanggang dengan cara diputar-putar (guling) di atas bara
                api. Babi ini biasanya diisi dengan bumbu rempah khas Bali
                yang disebut Base Genep, yang memberikan rasa yang kaya dan
                aroma yang khas.
              </p>
              <article className="bg-rose-white mt-6 p-5 rounded-xl">
                <h2 className="text-dark-raspberry text-xl font-semibold ml-2">
                  Waktu Persiapan dan Memasak
                </h2>
                <ul className="list-disc mt-3 ml-8 text-lg marker:text-dark-raspberry">
                  <li className="pl-3">
                    <p>
                      <span className="font-semibold">Total: </span>4-6 jam
                    </p>
                  </li>
                  <li className="mt-3 pl-3">
                    <p>
                      <span className="font-semibold">Waktu Persiapan : </span>
                      1-2 jam
                    </p>
                  </li>
                  <li className="mt-3 pl-3">
                    <p>
                      <span className="font-semibold">Waktu Memasak : </span>3-4
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
                    1 ekor babi utuh (sekitar 5-7 kg), bersihkan dan keringkan
                  </li>
                  <li className="pl-4 mt-2">100 ml minyak kelapa</li>
                  <li className="pl-4 mt-2">10 batang serai, memarkan</li>
                  <li className="pl-4 mt-2">20 lembar daun jeruk</li>
                  <li className="pl-4 mt-2">10 lembar daun salam</li>
                  <li className="pl-4 mt-2">5 lembar daun kunyit</li>
                </ul>
                <h3 className="font-fancy text-3xl text-nutmeg mt-8">
                  Bumbu Halus (Base Genep)
                </h3>
                <ul className="list-disc marker:text-nutmeg mt-4 ml-6 text-wenge-brown marker:align-middle">
                  <li className="pl-4">20 butir bawang merah</li>
                  <li className="pl-4 mt-2">10 siung bawang putih</li>
                  <li className="pl-4 mt-2">10 cm jahe</li>
                  <li className="pl-4 mt-2">10 cm lengkuas</li>
                  <li className="pl-4 mt-2">10 cm kunyit, bakar</li>
                  <li className="pl-4 mt-2">10 butir kemiri, sangrai</li>
                  <li className="pl-4 mt-2">4 sendok makan ketumbar, sangrai</li>
                  <li className="pl-4 mt-2">2 sendok teh merica</li>
                  <li className="pl-4 mt-2">10 buah cabai merah besar</li>
                  <li className="pl-4 mt-2">10 buah cabai rawit (sesuai selera)</li>
                  <li className="pl-4 mt-2">2 sendok makan terasi, bakar</li>
                  <li className="pl-4 mt-2">Garam secukupnya</li>
                  <li className="pl-4 mt-2">Gula merah secukupnya</li>
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
                        Mempersiapkan Babi dan Bumbu:
                      </span>{" "}
                      Bersihkan babi dan keringkan dengan baik. Haluskan semua
                      bahan bumbu halus (Base Genep) dengan menggunakan blender
                      atau ulekan.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Menumis Bumbu:</span>{" "}
                      Panaskan minyak kelapa dalam wajan. Tumis bumbu halus
                      bersama serai, daun jeruk, daun salam, dan daun kunyit
                      hingga harum dan matang.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">
                        Mengisi dan Membalurkan Bumbu pada Babi:
                      </span>{" "}
                      Isi perut babi dengan bumbu yang sudah ditumis. Jahit
                      perut babi agar bumbu tidak keluar saat dipanggang.
                      Balurkan sisa bumbu ke seluruh permukaan babi.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Memanggang Babi:</span>{" "}
                      Siapkan alat pemanggang dan bara api. Letakkan babi pada
                      alat pemanggang dan putar-putar (guling) secara perlahan
                      di atas bara api. Panggang babi selama 3-4 jam hingga
                      kulit babi berwarna kecoklatan dan renyah serta daging
                      matang sempurna.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Menyajikan:</span> Angkat babi
                      dari pemanggang dan biarkan dingin sejenak. Potong babi
                      menjadi bagian-bagian dan sajikan bersama nasi dan sambal.
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
                        250 kkal
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Karbohidrat</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        3g
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Protein</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        20g
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
          </article>
        </main>
      </body>
    </>
  );
};

export default BabiGuling;
