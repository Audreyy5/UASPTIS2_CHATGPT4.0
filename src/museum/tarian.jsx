import React from 'react';
import './tarian.css';
import { useInView } from 'react-intersection-observer';
import ceningayu from './img-museum/ceningayu.jpeg';
import mejangeran from './img-museum/mejangeran.png';
import meyangmeyong from './img-museum/meyangmeyong.png';

function TarianLagu() {
  const goBack = () => {
    window.history.back();
  };

  const { ref: refTarian, inView: inViewTarian } = useInView();
  const { ref: refLagu, inView: inViewlagu } = useInView();
  const { ref: refPendet, inView: inViewPendet } = useInView();
  const { ref: refKecak, inView: inViewKecak } = useInView();
  const { ref: refJanger, inView: inViewJanger } = useInView();
  const { ref: refCeningAyu, inView: inViewCeningAyu } = useInView();
  const { ref: refMejangeran, inView: inViewMejangeran } = useInView();
  const { ref: refMeyangMeyong, inView: inViewMeyangMeyong } = useInView();

  return (
    <div className='main-image-tarian' ref={refTarian}>
      <div className="tarian">
        <br /><br />
        <button className='button-tarian' onClick={goBack}>Kembali</button>
        <h1 className={inViewTarian ? 'animated fadeInUp' : ''}>Tarian Daerah Bali 💃🏼</h1>
        <br />

        <div className="video-container-tarian" ref={refPendet}>
          <div className='video-tarian-item'>
            <div className='iframe-1'>
              <iframe
                src="https://www.youtube.com/embed/r93o8G3zEbc?si=63frnxvMXeTa_4bM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
            </div>
            <div className='video-tarian-info'>
              <h3 className={inViewPendet ? 'animated fadeIn' : ''}>Tari Pendet</h3>
              <p className={inViewPendet ? 'animated fadeInUp' : ''}>Tari Pendet merupakan sebuah tarian tradisional Bali yang terkenal dan memiliki nilai simbolis yang dalam bagi masyarakatnya. Tarian ini sering dipentaskan sebagai ungkapan rasa syukur atas kesuburan tanah dan hasil panen yang melimpah.
                Gerakan dalam Tari Pendet menggambarkan keindahan alam Bali, seperti bunga dan tumbuhan tropis lainnya. Penari membawa bakul kecil berisi bunga dan menghembuskannya ke udara dengan lembut, sebagai lambang penyambutan dan persembahan kepada dewa-dewa.
                Selain itu, Tari Pendet memiliki peran yang penting dalam konteks sosial dan budaya Bali, seringkali ditampilkan dalam berbagai upacara adat, acara keagamaan, dan peristiwa penting lainnya. Dengan gerakannya yang indah dan musik yang khas, Tari Pendet menjadi simbol kekayaan budaya dan keindahan alam Bali yang perlu dilestarikan dan dihargai.
              </p>
            </div>
          </div>
        </div>

        <div className="video-container-tarian" ref={refKecak}>
          <div className='video-tarian-item'>
            <iframe
              src="https://www.youtube.com/embed/-dORkpaQNss?si=I7qTSSImivKU5aXP"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
            <div className='video-tarian-info'>
              <h3 className={inViewKecak ? 'animated fadeIn' : ''}>Tari Kecak</h3>
              <p className={inViewKecak ? 'animated fadeInUp' : ''}>Tari Kecak adalah sebuah tarian dramatik tradisional Bali yang terkenal karena penggunaan suara "cak" yang dilantunkan secara berulang-ulang oleh kelompok penari pria yang duduk dalam lingkaran. Tarian ini pertama kali dikembangkan pada tahun 1930-an untuk menggambarkan kisah epik Ramayana.
                Berbeda dengan tarian tradisional lainnya, Tari Kecak tidak menggunakan musik instrumen, melainkan hanya vokal dari para penari yang menciptakan pola irama yang kompleks. Cerita yang biasanya ditarikan adalah bagian dari Ramayana yang mengisahkan upaya Rama untuk menyelamatkan Sita dari Rahwana.
                Tarian ini menjadi salah satu daya tarik utama pariwisata di Bali dan sering dipentaskan dalam acara budaya. Selain memperkaya warisan seni dan budaya Bali, Tari Kecak juga menjadi salah satu cara untuk memperkenalkan kekayaan budaya Indonesia kepada dunia.
              </p>
            </div>
          </div>
        </div>

        <div className="video-container-tarian" ref={refJanger}>
          <div className='video-tarian-item'>
            <iframe
              src="https://www.youtube.com/embed/EsRSXhsvEZo?si=E3pnsTOrut9TAORA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
            <div className='video-tarian-info'>
              <h3 className={inViewJanger ? 'animated fadeIn' : ''}>Tari Janger</h3>
              <p className={inViewJanger ? 'animated fadeInUp' : ''}>Tari Janger merupakan tarian tradisional Bali yang penuh semangat dan meriah, melibatkan gerakan yang ceria dan musik yang menggembirakan. Biasanya, sekelompok penari pria dan wanita membentuk lingkaran, di mana para wanita membawa bunga sementara para pria membawa saputangan.
                Dalam Tari Janger, cerita yang disampaikan menggambarkan kehidupan sehari-hari masyarakat Bali, menyoroti momen kebersamaan dan kebahagiaan di desa. Musik yang mengiringi tarian ini berasal dari alat musik tradisional Bali, seperti gamelan.
                Selain menjadi bagian integral dari budaya Bali, Tari Janger sering dipertunjukkan dalam berbagai acara budaya dan festival di Bali. Melalui tarian ini, kekayaan budaya dan semangat hidup masyarakat Bali tercermin, yang menjadi warisan yang penting untuk dijaga dan dihargai.
              </p>
            </div>
          </div>
        </div>

        <h1 className={inViewlagu ? 'animated fadeInUp' : ''}>Lagu Daerah Bali 🎶</h1>
        <br />

        <div className="Lagu" ref={refLagu}>
          <div className="video-container-lagu" ref={refCeningAyu}>
            <div className='video-lagu-item'>
              <iframe
                src="https://www.youtube.com/embed/7-hUoRC2biY?si=dPgbihHv0Mx5nr5s"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
              <div className='video-lagu-info'>
                <h3 className={inViewCeningAyu ? 'animated fadeIn' : ''}>Lagu Putri Cening Ayu</h3>
                <p className={inViewCeningAyu ? 'animated fadeInUp' : ''}>Lagu Daerah Bali Berjudul "Putri Cening Ayu" adalah sebuah lagu Bali yang terkenal yang menggambarkan keelokan seorang putri. Liriknya mencirikan kecantikan sang putri, dengan rambut hitam panjang dan kulit putih seperti kapas.
                  Selain itu, lagu ini juga mencerminkan nilai-nilai budaya Bali yang menghargai kecantikan fisik sebagai cerminan kecantikan inner seseorang. Lagu ini juga mengandung makna kesucian dan kemurnian, nilai-nilai yang sangat dihargai dalam budaya Bali.
                  Secara musikal, lagu ini biasanya dinyanyikan dengan irama yang lembut dan penuh perasaan, sering kali diiringi oleh alat musik tradisional Bali seperti gamelan. Dengan lirik dan melodi yang indah, lagu ini menjadi bagian penting dari warisan budaya Bali yang diwariskan dari generasi ke generasi.
                </p>
              </div>
            </div>
          </div>
          <img className='img-lirik' src={ceningayu} alt="lirik 1" />

          <div className="video-container-lagu" ref={refMejangeran}>
            <div className='video-lagu-item'>
              <iframe
                src="https://www.youtube.com/embed/ckUYDgmLOOQ?si=TR9zHmp1Lpmgyg3G"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
              <div className='video-lagu-info'>
                <h3 className={inViewMejangeran ? 'animated fadeIn' : ''}>Lagu Mejangeran</h3>
                <p className={inViewMejangeran ? 'animated fadeInUp' : ''}>Lagu tradisional Bali yang berjudul "Mejangeran" menggambarkan kegembiraan dan kebersamaan dalam budaya Bali. Lagu ini sering dinyanyikan dalam suasana yang ceria dan diiringi dengan tarian yang enerjik. Lirik lagu ini menggambarkan kehidupan sehari-hari di Bali,
                  di mana penari dan penonton saling berinteraksi dengan penuh kegembiraan. Musiknya biasanya menggunakan alat musik tradisional Bali seperti gamelan, yang memberikan nuansa khas dan meriah. Melalui lagu "Mejangeran", budaya dan semangat hidup masyarakat Bali yang penuh keceriaan tercermin dengan indah,
                  menjadikannya bagian yang tak terpisahkan dari warisan budaya Bali yang patut dijaga dan dihargai.
                </p>
              </div>
            </div>
          </div>
          <img className='img-lirik' src={mejangeran} alt="lirik 2" />

          <div className="video-container-lagu" ref={refMeyangMeyong}>
            <div className='video-lagu-item'>
              <iframe
                src="https://www.youtube.com/embed/hsZ6CHVEOHI?si=79wVQhMdDhDA38p3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
              <div className='video-lagu-info'>
                <h3 className={inViewMeyangMeyong ? 'animated fadeIn' : ''}>Lagu Meyang Meyong</h3>
                <p className={inViewMeyangMeyong ? 'animated fadeInUp' : ''}>Lagu tradisional Bali yang berjudul "Meyang Meyong" menggambarkan kehidupan sehari-hari di Bali dengan penuh keceriaan. Liriknya menceritakan aktivitas seperti mencari ikan di laut dan mengelola hasil pertanian. Musik yang mengiringi lagu ini menggunakan alat musik tradisional Bali seperti gamelan,
                  menciptakan suasana yang khas dan meriah. Lagu ini sering dinyanyikan dalam berbagai acara budaya dan upacara adat sebagai bentuk rasa syukur atas hasil bumi dan kehidupan yang diberikan. Dengan lirik yang sederhana namun mengandung makna yang dalam, lagu "Meyang Meyong" merupakan bagian yang berharga
                  dari warisan budaya Bali yang perlu dilestarikan dan dihargai.
                </p>
              </div>
            </div>
          </div>
          <img className='img-lirik' src={meyangmeyong} alt="lirik 3" />
        </div>
        <br />
      </div>
    </div>
  );
}

export default TarianLagu;
