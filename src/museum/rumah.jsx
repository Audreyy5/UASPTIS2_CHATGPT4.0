import React from 'react';
import './rumah.css';
import { useInView } from 'react-intersection-observer';
import balemanten from './img-museum/balemanten.jpeg';
import balemanten2 from './img-museum/balemanten2.png';
import balesekapat from './img-museum/balesekapat.png';
import balesekapat2 from './img-museum/balesekapat2.jpeg';
import pura from './img-museum/pura.webp';
import pura2 from './img-museum/pura2.png';
import pakaian from './img-museum/pakaian.webp';
import pakaian2 from './img-museum/pakaian2.jpeg';


function RumahPakaian() {

  const goBack = () => {
    window.history.back();
  };

  const { ref: refRumah, inView: inViewRumah } = useInView();
  const { ref: refPakaian, inView: inViewPakaian } = useInView();
  const { ref: refBaleManten, inView: inViewBaleManten } = useInView();
  const { ref: refBaleSekapat, inView: inViewBaleSekapat } = useInView();
  const { ref: refPuraKeluarga, inView: inViewPura } = useInView();
  const { ref: refPayasAgung, inView: inViewPayasAgung } = useInView();

  return (
    <div className='main-image-pakaianrumah' ref={refRumah}>
      <div className="rumah">
        <br /><br />
        <button className='button-rumah mt-10' onClick={goBack}>Kembali</button>
        <h1 className={inViewRumah ? 'animated fadeIn' : ''}>Rumah Adat Daerah Bali 🏠</h1>
        <br />
        <div className="gambar-container-rumah"> 
          <img className='gambar-rumah' src={balemanten} alt="rumah 1" />
          <img className='gambar-rumah' src={balemanten2} alt="rumah 2" />
        </div>
        <h5>Source Foto 1: Satu Jam dan Foto 2: polarumah.com</h5>
        <div className='rumah-info' ref={refBaleManten}>
          <h3 className={inViewBaleManten ? 'animated fadeInUp' : ''}>Bale Manten</h3>
          <p className={inViewBaleManten ? 'animated fadeInUp' : ''}>Rumah adat "Bale Manten" adalah salah satu jenis rumah adat tradisional Bali yang memiliki peran penting dalam upacara perkawinan atau pernikahan.
            Rumah ini digunakan sebagai tempat untuk menggelar upacara adat, seperti upacara panggih (pertemuan kedua mempelai) dan upacara pernikahan.
            Bale Manten memiliki arsitektur yang khas dengan atap yang tinggi dan bentuk bangunan yang luas. Atapnya terbuat dari jerami atau alang-alang
            yang disusun secara rapi dan memanjang ke atas. Konstruksi atap yang tinggi ini melambangkan kemuliaan dan keharmonisan dalam pernikahan.
            Selain sebagai tempat upacara adat, Bale Manten juga memiliki makna simbolis dalam kehidupan masyarakat Bali. Bangunan ini dianggap sebagai lambang kesatuan,
            keharmonisan, dan keberlangsungan hidup berkeluarga. Dalam tradisi Bali, upacara perkawinan memiliki peran penting dalam mempertahankan keberlangsungan adat dan
            budaya, sehingga Bale Manten menjadi bagian yang tak terpisahkan dalam prosesi pernikahan di Bali.
          </p>
        </div>

        <br />
        <div className="gambar-container-rumah"> 
          <img className='gambar-rumah' src={balesekapat} alt="rumah 3" />
          <img className='gambar-rumah' src={balesekapat2} alt="rumah 4" />
        </div>
        <h5>Source Foto 1: symbianplanet.com dan Foto 2: www.balisemara.com</h5>

        <div className='rumah-info' ref={refBaleSekapat}>
          <h3 className={inViewBaleSekapat ? 'animated fadeInUp' : ''}>Bale Sekapat</h3>
          <p className={inViewBaleSekapat ? 'animated fadeInUp' : ''}>
            "Bale Sekapat" adalah salah satu bentuk rumah adat tradisional Bali yang memiliki fungsi utama sebagai tempat musyawarah dan pengambilan keputusan penting
            dalam kehidupan masyarakat adat Bali. Bangunan ini biasanya terdiri dari ruangan yang luas dengan atap limasan tinggi yang menjulang ke atas.
            Keunikan dari Bale Sekapat terletak pada desain arsitekturnya yang menggambarkan kekayaan filosofi dan simbolisme dalam budaya Bali.
            Bangunan ini sering kali didekorasi dengan ukiran-ukiran tradisional yang sarat makna, seperti ukiran pohon beringin atau ukiran hewan suci seperti burung Garuda.
            Atap limasan yang tinggi melambangkan hubungan vertikal antara manusia dan alam semesta, sementara ruang luas di dalamnya mencerminkan konsep kesatuan dan kebersamaan dalam mengambil keputusan.
            Selain sebagai tempat musyawarah, Bale Sekapat juga digunakan untuk menyelenggarakan berbagai upacara adat, pertunjukan seni tradisional, dan sebagai tempat peristirahatan para pemimpin adat.
            Bangunan ini menjadi simbol penting dalam mempertahankan dan melestarikan budaya serta adat istiadat Bali yang kaya akan nilai-nilai kearifan lokal.
          </p>
        </div>

        <br />
        <div className="gambar-container-rumah"> 
          <img className='gambar-rumah' src={pura} alt="rumah 5" />
          <img className='gambar-rumah' src={pura2} alt="rumah 6" />
        </div>
        <h5>Source Foto 1: polarumah.com dan Foto 2: kompas.com</h5>

        <div className='rumah-info' ref={refPuraKeluarga}>
          <h3 className={inViewPura ? 'animated fadeInUp' : ''}>Pura Keluarga</h3>
          <p className={inViewPura ? 'animated fadeInUp' : ''}>
            "Pura Keluarga" adalah salah satu jenis pura atau kompleks candi Hindu yang dibangun di dalam atau dekat dengan rumah-rumah tradisional Bali. Fungsinya adalah sebagai tempat ibadah dan upacara keagamaan bagi
            keluarga yang tinggal di sekitarnya. Pura Keluarga biasanya terdiri dari beberapa bangunan, seperti meru (tumpukan atap bertingkat), pelinggih (tempat pemujaan), dan paviliun terbuka untuk upacara.
            Keberadaan Pura Keluarga sangat penting dalam kehidupan masyarakat Bali karena menjadi tempat untuk mempersembahkan persembahan kepada para dewa dan leluhur. Upacara keagamaan yang dilakukan di Pura Keluarga
            melibatkan seluruh anggota keluarga dan menjadi bagian integral dari budaya dan kehidupan sehari-hari masyarakat Bali.
            Pura Keluarga juga memiliki tata letak dan arsitektur yang khas, dengan penggunaan batu, kayu, dan ukiran tradisional yang memperkuat identitas budaya Bali.
            Keindahan arsitektur dan dekorasi Pura Keluarga mencerminkan kekayaan seni dan nilai spiritual masyarakat Bali, serta menjadi pusat spiritual dan sosial bagi keluarga yang tinggal di sekitarnya.
          </p>
        </div>
      </div>

      <div className="pakaian" ref={refPakaian}>
        <br />
        <h1 className={inViewPakaian ? 'animated fadeInUp' : ''}> Pakaian Adat Daerah Bali 👕</h1><br />
        <br />
        <div className="gambar-container-pakaian"> 
          <img className='gambar-pakaian' src={pakaian} alt="pakaian 1" />
          <img className='gambar-pakaian' src={pakaian2} alt="pakaian 2" />
        </div>
        <h5>Source Foto 1: Adw Photography Bali dan Foto 2: Instagram/@rennybaliwedding</h5>
        <div className='pakaian-info' ref={refPayasAgung} >
        <h3 className={inViewPayasAgung ? 'animated fadeInUp' : ''}>Payas Agung</h3>
        <p className={inViewPayasAgung ? 'animated fadeInUp' : ''}>"Payas Agung" adalah pakaian adat Bali yang sangat dihormati dan dipakai dalam acara-acara penting seperti upacara keagamaan dan adat. Pakaian ini terdiri dari beberapa bagian yang khas, yang meliputi kain sarung,
            kain kamben, dan kain jarit. Kain sarung digunakan sebagai kain panjang yang dibalut di pinggang, sedangkan kain kamben digunakan sebagai kain panjang yang dibalut di pinggang dan berfungsi sebagai rok.
            Sementara itu, kain jarit adalah kain pendek yang digunakan sebagai ikat pinggang. Selain kain-kain tersebut, "payas agung" juga dilengkapi dengan aksesoris seperti sabuk perak, ikat kepala, dan hiasan-hiasan lain
            yang melambangkan kemuliaan dan kesucian. Pakaian ini dipakai oleh para pemangku adat atau pemimpin upacara dalam menjalankan tugas keagamaan atau adat. Penggunaan pakaian "payas agung" juga melambangkan kedewasaan,
            kedalaman pengetahuan, dan kedalaman spiritual pemakainya. Secara keseluruhan, "payas agung" adalah pakaian yang kaya akan nilai-nilai simbolis dan filosofis dalam budaya Bali. Pakaian ini tidak hanya menjadi simbol
            kehormatan dan kewibawaan bagi yang mengenakannya, tetapi juga mencerminkan kedewasaan dan kedalaman spiritual yang dimiliki pemakainya. Dengan begitu, "payas agung" menjadi bagian tak terpisahkan dari tradisi dan identitas budaya masyarakat Bali.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default RumahPakaian;