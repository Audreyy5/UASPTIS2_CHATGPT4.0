import React from "react";
import { Helmet } from "react-helmet";
import "./lihatresep.css";
import sate from "./img-restaurant/satelilit.jpg";

const goBack = () => {
  window.history.back();
};

const SateLilit = () => {
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
        <title>Sate Lilit</title>
      </Helmet>
      <body className="min-h-screen md:flex justify-center items-center md:bg-eggshell">
        <main>
          <article className="bg-white md:my-20 md:py-8 pb-8 md:rounded-xl md:max-w-screen-md">
            <picture>
              <img
                src={sate}
                alt="Sate Lilit"
                className="md:max-w-90% md:mx-auto md:rounded-xl"
              />
            </picture>
            <div className="px-8 font-outfit text-wenge-brown">
              <h1 className="font-fancy text-4xl mt-8 text-dark-charcoal">
                Resep Sate Lilit
              </h1>
              <p className="mt-6">
                Sate lilit adalah hidangan Bali yang terbuat dari daging cincang
                dan bumbu rempah yang dibalutkan pada tusuk sate yang dililitkan
                pada batang serai. Rasanya yang kaya dan aroma rempah membuatnya
                menjadi hidangan yang lezat dan khas.
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
                      <span className="font-semibold">Waktu Persiapan: </span>
                      1-2 jam
                    </p>
                  </li>
                  <li className="mt-3 pl-3">
                    <p>
                      <span className="font-semibold">Waktu Memasak: </span>3-4
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
                  <li className="pl-4">500 gram daging ayam cincang</li>
                  <li className="pl-4 mt-2">200 gram kelapa parut, sangrai</li>
                  <li className="pl-4 mt-2">
                    5 batang serai, bagian putihnya, memarkan
                  </li>
                  <li className="pl-4 mt-2">
                    10 lembar daun jeruk, iris halus
                  </li>
                  <li className="pl-4 mt-2">2 sendok makan air jeruk nipis</li>
                  <li className="pl-4 mt-2">2 sendok makan minyak goreng</li>
                  <li className="pl-4 mt-2">Garam secukupnya</li>
                  <li className="pl-4 mt-2">
                    Tusuk sate atau batang serai (sebagai pengganti tusuk sate)
                  </li>
                </ul>
                <br />
                <h3 className="font-fancy text-3xl text-nutmeg">Bumbu Halus</h3>
                <ul className="list-disc marker:text-nutmeg mt-4 ml-6 text-wenge-brown marker:align-middle">
                  <li className="pl-4">5 butir bawang merah</li>
                  <li className="pl-4 mt-2">3 siung bawang putih</li>
                  <li className="pl-4 mt-2">5 buah cabai merah keriting</li>
                  <li className="pl-4 mt-2">3 cm jahe</li>
                  <li className="pl-4 mt-2">2 cm kunyit</li>
                  <li className="pl-4 mt-2">1 cm lengkuas</li>
                  <li className="pl-4 mt-2">Garam secukupnya</li>
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
                        Haluskan semua bumbu halus
                      </span>{" "}
                      menggunakan blender atau ulekan.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Menumis Bumbu:</span> Panaskan
                      minyak goreng dalam wajan. Tumis bumbu halus hingga harum.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Memasak Daging:</span>{" "}
                      Masukkan daging ayam cincang ke dalam wajan. Aduk rata
                      dengan bumbu halus dan masak hingga daging matang.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Menambahkan Bahan Lain:</span>{" "}
                      Setelah daging matang, tambahkan kelapa parut, serai, dan
                      daun jeruk. Aduk rata dan masak hingga kelapa parut
                      mengering dan tercampur merata dengan daging.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Dinginkan:</span> Angkat
                      adonan sate lilit dari wajan dan dinginkan sejenak.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Buat Sate Lilit:</span> Ambil
                      sebagian adonan sate lilit, lalu balutkan secara merata
                      pada tusuk sate atau batang serai yang sudah dipersiapkan.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Panggang:</span> Panggang sate
                      lilit di atas bara api atau dalam oven dengan suhu 180°C
                      hingga matang dan berwarna kecoklatan, sambil sesekali
                      dibolak-balik agar matang merata.
                    </p>
                  </li>
                  <li className="pl-4 mt-2">
                    <p>
                      <span className="font-bold">Sajikan:</span> Sajikan sate
                      lilit panas dengan nasi putih atau nasi kuning, serta
                      sambal matah atau sambal terasi sebagai pelengkap.
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
                        180 kkal
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Karbohidrat</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        5g
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Protein</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        12g
                      </p>
                    </div>
                    <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                  </li>
                  <li>
                    <div className="flex mt-3">
                      <p className="ml-8 text-lg w-full mr-auto">Lemak</p>
                      <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                        10g
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

export default SateLilit;
