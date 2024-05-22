import React from "react";
import { Helmet } from "react-helmet";
import "./lihatresep.css";
import ayam from "./img-restaurant/ayambetutu.jpg";


const goBack = () => {
  window.history.back();
};

const AyamBetutu = () => {
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
        <title>Ayam Betutu</title>
      </Helmet>
      <body className="min-h-screen md:flex justify-center items-center md:bg-red-100">
        <main>
          <article className="bg-white md:my-20 md:py-8 pb-8 md:rounded-xl md:max-w-screen-md">
          <button onClick={goBack} className="p-2 mt-2 mb-5 text-lg bg-pink-500 text-white rounded hover:bg-red-200 shadow">
                    Kembali
            </button>
            <picture>
              <img
                src={ayam}
                alt="Ayam Betutu"
                className="md:max-w-90% md:mx-auto md:rounded-xl"
              />
            </picture>
            <div className="px-8 font-outfit text-wenge-brown">
              <h1 className="font-fancy text-4xl mt-8 text-dark-charcoal">
                Resep Ayam Betutu
              </h1>
              <p className="mt-6">
                Ayam Betutu adalah hidangan tradisional khas Bali, Indonesia,
                yang terkenal dengan rasa yang kaya dan rempah yang mendalam.
                Ayam ini dibumbui dengan rempah-rempah yang khas dan kemudian
                dimasak dengan cara dikukus atau dipanggang dalam balutan daun
                pisang. Hidangan ini sering disajikan pada acara-acara spesial
                dan perayaan karena proses pembuatannya yang cukup memakan
                waktu.
              </p>
              <article className="bg-rose-white mt-6 p-5 rounded-xl">
                <h2 className="text-dark-raspberry text-xl font-semibold ml-2">
                  Waktu Persiapan dan Memasak
                </h2>
                <ul className="list-disc mt-3 ml-8 text-lg marker:text-dark-raspberry">
                  <li className="pl-3">
                    <p>
                      <span className="font-semibold">Total: </span>2,5-3,75 jam
                    </p>
                  </li>
                  <li className="mt-3 pl-3">
                    <p>
                      <span className="font-semibold">Waktu Persiapan: </span>
                      30-45 menit
                    </p>
                  </li>
                  <li className="mt-3 pl-3">
                    <p>
                      <span className="font-semibold">Waktu Memasak: </span>2-3
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
                  <li className="pl-4"> 1 ekor ayam utuh (sekitar 1,5 kg), bersihkan dan belah dada</li>
                  <li className="pl-4 mt-2">2 batang serai, memarkan</li>
                  <li className="pl-4 mt-2">4 lembar daun jeruk</li>
                  <li className="pl-4 mt-2">3 lembar daun salam</li>
                  <li className="pl-4 mt-2">2 sendok makan minyak kelapa</li>
                  <li className="pl-4 mt-2">Daun pisang untuk membungkus</li>
                </ul>
                <br />
                <h3 className="font-fancy text-3xl text-nutmeg">
                  Bumbu Halus
                </h3>
                <ul className="list-disc marker:text-nutmeg mt-4 ml-6 text-wenge-brown marker:align-middle">
                  <li className="pl-4">10 butir bawang merah</li>
                  <li className="pl-4 mt-2">5 siung bawang putih</li>
                  <li className="pl-4 mt-2">5 cm jahe</li>
                  <li className="pl-4 mt-2">5 cm lengkuas</li>
                  <li className="pl-4 mt-2">5 cm kunyit, bakar</li>                  
                  <li className="pl-4 mt-2">5 butir kemiri, sangrai</li>
                  <li className="pl-4 mt-2">2 sendok teh ketumbar, sangrai</li>
                  <li className="pl-4 mt-2">1 sendok teh merica</li>
                  <li className="pl-4 mt-2">5 buah cabai merah besar</li>
                  <li className="pl-4 mt-2">1 sendok teh terasi, bakar</li>
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
                      <span className="font-bold">Mempersiapkan Ayam dan Bumbu: </span>Bersihkan ayam dan belah bagian dadanya agar bumbu bisa meresap. Haluskan semua bahan bumbu halus dengan menggunakan blender atau ulekan.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Menumis Bumbu: </span>Panaskan minyak kelapa dalam wajan. Tumis bumbu halus bersama serai, daun jeruk, dan daun salam hingga harum dan matang.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Membalurkan Bumbu pada Ayam: </span>Balurkan bumbu yang sudah ditumis ke seluruh permukaan ayam, termasuk bagian dalamnya. Diamkan ayam yang sudah dibumbui selama kurang lebih 30 menit agar bumbu meresap.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">
                      Membungkus dan Memasak: </span>
                      Bungkus ayam dengan daun pisang. Pastikan ayam terbungkus rapat agar bumbu tidak keluar. Kukus ayam yang sudah dibungkus selama 1,5-2 jam hingga ayam matang dan empuk. Alternatif lain, ayam bisa dipanggang dalam oven dengan suhu 180°C selama 2-3 jam hingga matang dan empuk.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Menyajikan: </span>Angkat ayam dari kukusan atau oven, buka bungkus daun pisangnya, dan sajikan ayam betutu selagi hangat.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="w-full h-px bg-light-gray mx-auto mt-8"></div>
              <div className="mt-8">
                <h3 className="font-fancy text-3xl text-nutmeg">Kandungan Gizi (Per 100 Gram)</h3>
                <p className="mt-4">
                Tabel di bawah ini menunjukkan nilai gizi per porsi tanpa tambahan isian.
                </p>
                <ul className="mt-6">
                  <li>
                    <div className="flex">
                      <p className="ml-8 text-lg w-full mr-auto">Kalori</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                      200 kkal
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Karbohidrat</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        4g
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Protein</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        18g
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Lemak</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        12g
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

export default AyamBetutu;
