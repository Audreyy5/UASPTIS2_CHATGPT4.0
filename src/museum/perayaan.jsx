import React from 'react';
import './perayaan.css';
import { useInView } from 'react-intersection-observer';
import fakta1 from './img-museum/fakta1.jpeg';
import fakta2 from './img-museum/fakta2.jpeg';
import fakta3 from './img-museum/fakta3.jpeg';
import fakta4 from './img-museum/fakta4.webp';
import fakta5 from './img-museum/fakta5.jpeg';
import fakta6 from './img-museum/fakta6.jpeg';
import fakta7 from './img-museum/fakta7.jpeg';
import fakta8 from './img-museum/fakta8.jpeg';
import fakta9 from './img-museum/fakta9.jpeg';

function PerayaanFakta() {

  const goBack = () => {
    window.history.back();
  };

  const { ref: refPerayaan, inView: inViewPerayaan } = useInView();
  const { ref: refFakta, inView: inViewFakta } = useInView();
  const { ref: refMelasti, inView: inViewMelasti } = useInView();
  const { ref: refGalungan, inView: inViewGalungan } = useInView();
  const { ref: refTumpek, inView: inViewTumpek } = useInView();
  const { ref: refNyepi, inView: inViewNyepi } = useInView();
  const { ref: refGWK, inView: inViewGWK } = useInView();
  const { ref: refDewata, inView: inViewDewata } = useInView();


  return (
    <div className='main-image-perayaanfakta' ref={refPerayaan}>
      <div className="perayaan">
        <br /><br />
        <button className='button-perayaan' onClick={goBack}>Kembali</button>
        <h1 className={inViewPerayaan ? 'animated fadeIn' : ''}>Perayaan Adat Daerah Bali 🇮🇩</h1>
        <br />
        <div className="video-container-perayaan">
          <iframe
            src="https://www.youtube.com/embed/Rk5dgecn2zg?si=fd498Dfxty6FTmMM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
        <div className='perayaan-info' ref={refMelasti}>
          <h3 className={inViewMelasti ? 'animated fadeInUp' : ''}>Upacara Adat Melasti</h3>
          <p className={inViewMelasti ? 'animated fadeInUp' : ''}>
            "Upacara Melasti" merupakan sebuah ritual sakral dalam tradisi agama Hindu di Bali yang diadakan menjelang perayaan Nyepi.
            Ritual ini memiliki tujuan utama untuk membersihkan diri secara spiritual dan menyucikan benda-benda suci yang digunakan dalam upacara keagamaan.
            Melasti berasal dari kata "mala" yang berarti kotoran, dan "asti" yang berarti menghilangkan. Sehingga, secara harfiah, Melasti berarti menghilangkan kotoran atau dosa-dosa.
            Upacara Melasti biasanya dilaksanakan di tempat-tempat yang dianggap suci, seperti pantai, sungai, dan sumber air. Para pemimpin keagamaan dan umat Hindu berkumpul untuk
            memulai prosesi ini dengan membawa benda-benda suci seperti patung dewa, pralingga (simbol lingga), dan keris pusaka, serta membawa air suci dari sumber-sumber mata air suci.
            Mereka memadati lokasi dengan penuh khidmat dan kemantapan dalam mengikuti upacara yang penuh makna ini. Selama prosesi, upacara ini diawali dengan pembacaan mantra dan doa-doa
            suci yang dipimpin oleh para pemangku adat. Kemudian, benda-benda suci dan umat Hindu dibawa ke air untuk disucikan. Air laut atau air dari sumber mata air dianggap memiliki kekuatan
            untuk membersihkan dan menyucikan jiwa serta benda-benda suci tersebut. Upacara Melasti tidak hanya memiliki makna keagamaan, tetapi juga memiliki nilai sosial dan budaya yang sangat
            penting dalam masyarakat Hindu Bali. Ini adalah waktu yang tepat bagi umat Hindu untuk merenungkan diri, menghilangkan kesalahan, dan memulai tahun baru Saka dengan tulus dan bersih
            secara spiritual.
          </p>
        </div>

        <br />
        <div className="video-container-perayaan">
          <iframe
            src="https://www.youtube.com/embed/IfnLHmklRMM?si=j-FWg_hqegBpkopF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
        <div className='perayaan-info' ref={refGalungan}>
          <h3 className={inViewGalungan ? 'animated fadeInUp' : ''}>Perayaan Adat Galungan & Kuningan</h3>
          <p className={inViewGalungan ? 'animated fadeInUp' : ''}>
            Perayaan Adat Galungan & Kuningan adalah salah satu perayaan agama Hindu yang paling penting dan meriah di Bali. Perayaan ini dirayakan untuk memperingati kemenangan Dharma (kebenaran)
            melawan Adharma (ketidakbenaran) serta untuk menghormati para leluhur. Perayaan dimulai dengan hari Raya Galungan yang jatuh pada hari Rabu Dungulan, setiap 210 hari sekali menurut kalender Bali.
            Pada hari ini, umat Hindu memasang "penjor" di depan rumah, yaitu bambu yang dihiasi dengan janur (daun kelapa), bunga, dan buah-buahan sebagai tanda kesuburan dan kesejahteraan.
            Upacara puncaknya adalah pada hari Kuningan, 10 hari setelah Galungan, yang juga merupakan hari penutup perayaan. Pada hari Kuningan, umat Hindu melakukan upacara penyucian diri dan rumah dengan
            menyediakan sesaji (persembahan) di rumah dan pura. Selama perayaan ini, masyarakat Bali juga mengenakan pakaian adat dan mengunjungi pura (tempat ibadah Hindu) untuk bersembahyang dan memberikan persembahan
            kepada para leluhur. Upacara ini juga menjadi momen berkumpulnya keluarga dan kerabat untuk merayakan kebersamaan dan keharmonisan. Perayaan Adat Galungan & Kuningan merupakan perayaan yang sarat
            makna dan keindahan budaya Bali. Ini adalah saat di mana nilai-nilai kearifan lokal, kebersamaan, dan spiritualitas sangat kental terasa dalam kehidupan masyarakat Bali.
          </p>
        </div>

        <br />
        <div className="video-container-perayaan">
          <iframe
            src="https://www.youtube.com/embed/agcMkKdRJEI?si=z4lqnHZVYH1f7vyw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
        <div className='perayaan-info' ref={refTumpek}>
        <h3 className={inViewTumpek ? 'animated fadeInUp' : ''}>Upacara Tumpek Landep</h3>
        <p className={inViewTumpek ? 'animated fadeInUp' : ''}>            
            Tumpek Landep adalah upacara adat Bali yang diadakan untuk memberikan penghormatan kepada alat-alat besi dan logam, serta sebagai ungkapan terima kasih atas kemampuan alat-alat tersebut dalam mendukung kehidupan sehari-hari.
            Upacara ini biasanya dilakukan setiap 210 hari sekali, menurut kalender Balinese Pawukon. Selama Tumpek Landep, masyarakat Bali melakukan berbagai persiapan, termasuk membersihkan dan merawat alat-alat besi seperti senjata,
            alat pertanian, perkakas rumah tangga, dan alat musik tradisional. Selain itu, mereka juga membuat sesajian (persembahan) khusus untuk diberikan kepada para dewa dan roh yang dianggap menghuni alat-alat tersebut. Upacara ini
            dilakukan di rumah, tempat kerja, atau di pura (tempat ibadah Hindu), dengan doa dan mantra khusus yang dipimpin oleh pendeta atau pemuka agama Hindu. Setelah upacara selesai, alat-alat besi tersebut dianggap telah disucikan
            dan diberkati, sehingga diharapkan dapat digunakan dengan lebih baik dan memberikan hasil yang lebih baik pula bagi pemiliknya. Tumpek Landep juga dianggap sebagai hari yang baik untuk memperbaiki atau membuat alat-alat baru,
            karena diyakini bahwa pada hari tersebut, energi positif melimpah untuk memperkuat dan melindungi alat-alat tersebut dari kerusakan atau kecelakaan.
          </p>
        </div>
      </div>

      <div className="fakta" ref={refFakta}>
        <h1 className={inViewFakta ? 'animated fadeIn' : ''}>Fakta-Fakta Unik Daerah Bali </h1>
        <br />
        <div className='gambar-container-fakta'>
          <img className='gambar-fakta' src={fakta1} alt="fakta 1" />
          <img className='gambar-fakta' src={fakta2} alt="fakta 2" />
          <img className='gambar-fakta' src={fakta3} alt="fakta 3" />
        </div>
        <h5>Source Foto 1: https://kemenparekraf.go.id, Foto 2: https://kemenparekraf.go.id, Foto 3: redoorz.com</h5>
        <div className='perayaan-info' ref={refNyepi}>
        <h3 className={inViewNyepi ? 'animated fadeInUp' : ''}>Hari Raya Nyepi Yang Spesial</h3>
        <p className={inViewNyepi ? 'animated fadeInUp' : ''}>Walaupun hari raya Nyepi dirayakan oleh seluruh umat beragama hindu di seluruh daerah Indonesia, tetapi hari nyepi di Bali menjadi sangat spesial karena merupakan salah satu hari suci dalam kalender Hindu Bali yang diperingati
            dengan cara unik dan mendalam. Nyepi adalah hari diam total di Bali. Seluruh aktivitas di pulau ini dihentikan, termasuk transportasi, hiburan, dan pekerjaan. Orang-orang diminta untuk berdiam diri di rumah, tidak menggunakan listrik,
            dan menjaga keheningan. Hal ini bertujuan untuk merayakan keheningan, memedasi diri, dan merenungkan makna kehidupan. Hari Raya Nyepi juga merupakan perayaan Tahun Baru Saka bagi masyarakat Hindu Bali. Ini adalah awal dari tahun baru dalam kalender Saka,
            yang merupakan kalender resmi di Bali. Dengan berbagai upacara yang dilakukan, hal ini juga  menjadi daya tarik budaya yang unik bagi wisatawan yang ingin merasakan kehidupan dan tradisi Bali yang otentik.
            Nyepi adalah contoh penting dari kearifan lokal dan budaya Bali yang kaya. Tradisi-tradisi ini tidak hanya diwariskan dari generasi ke generasi, tetapi juga menjadi bagian penting dari identitas dan kehidupan sehari-hari masyarakat Bali.
          </p>
          <br />
        </div>

        <div className='gambar-container-fakta'>
          <img className='gambar-fakta' src={fakta4} alt="fakta 4" />
          <img className='gambar-fakta' src={fakta5} alt="fakta 5" />
          <img className='gambar-fakta' src={fakta6} alt="fakta 6" />
        </div>
        <h5>Source Foto 1: The Bali Sun, Foto 2: CNBC Indonesia, Foto 3: Casa Indonesia</h5>
        <div className='perayaan-info' ref={refGWK}>
        <h3 className={inViewGWK? 'animated fadeInUp' : ''}>Patung Tertinggi di Indonesia, Patung Garuda Wisnu Kencana</h3>
        <p className={inViewGWK ? 'animated fadeInUp' : ''}>            
            Garuda Wisnu Kencana (GWK) adalah kompleks taman budaya yang menjadi salah satu ikon pariwisata di Bali. Di tengah kompleks ini berdiri patung Garuda Wisnu Kencana, sebuah karya monumental yang menjulang tinggi dengan tinggi mencapai 121 meter,
            menjadikannya patung tertinggi di Indonesia. Patung ini menggambarkan Dewa Wisnu yang sedang menunggangi burung Garuda, menciptakan gambaran yang megah dan penuh makna dalam mitologi Hindu. Pembangunan patung ini dimulai pada tahun 1997 dan selesai pada tahun 2018
            setelah melalui serangkaian tahap konstruksi yang rumit. Garuda Wisnu Kencana bukan hanya sebuah patung monumental, tetapi juga memiliki makna dan simbolisme yang dalam dalam kepercayaan Hindu. Garuda, sebagai kendaraan Dewa Wisnu, melambangkan kekuatan, kebebasan,
            dan keadilan, sementara Wisnu sendiri adalah dewa yang melambangkan pemeliharaan dan kelangsungan alam semesta. Selain patungnya, kompleks GWK juga menawarkan berbagai atraksi wisata dan kebudayaan lainnya, termasuk teater yang mempertunjukkan cerita-cerita dari mitologi Hindu,
            galeri seni, dan tempat persembahan upacara keagamaan. Dengan kombinasi keindahan arsitektur, makna religius, dan beragam fasilitas yang ditawarkan, Garuda Wisnu Kencana menjadi salah satu destinasi wisata yang sangat spesial dan menarik di Bali.
          </p>
          <br />
        </div>

        <div className='gambar-container-fakta'>
          <img className='gambar-fakta' src={fakta7} alt="fakta 7" />
          <img className='gambar-fakta' src={fakta8} alt="fakta 8" />
          <img className='gambar-fakta' src={fakta9} alt="fakta 9" />
        </div>
        <h5>Source Foto 1: Bus Blue Star, Foto 2: international.unud.ac.id, Foto 3: Okezone Travel</h5>
        <div className='perayaan-info' ref={refDewata}>
          <h3 className={inViewDewata? 'animated fadeInUp' : ''}>Pulau Bali yang disebut sebagai Pulau Dewata</h3>
          <p className={inViewDewata ? 'animated fadeInUp' : ''}>
            Pulau Bali, yang sering disebut sebagai "Pulau Dewata," merujuk pada reputasinya sebagai tempat yang diberkahi oleh para dewa dalam budaya dan kepercayaan Hindu. Istilah "Dewata" sendiri berasal dari bahasa Sanskerta yang berarti "Dewa" atau "Tuhan," menggambarkan hubungan
            erat Bali dengan dunia spiritual dan keagamaan. Sebagai salah satu destinasi pariwisata paling populer di dunia, Bali tidak hanya dikenal karena keindahan alamnya yang spektakuler, tetapi juga karena keberagaman budayanya yang kaya dan spiritualitasnya yang mendalam.
            Keindahan alam Bali yang menakjubkan, seperti pantai-pantai berpasir putih yang mempesona, sawah terasering yang hijau, dan gunung-gunung yang megah, diyakini sebagai ciptaan dan berkah dari para dewa. Selain itu, keberagaman budaya Bali tercermin dalam seni, musik, tari, dan
            upacara adat yang kaya dan berwarna. Setiap aspek kehidupan sehari-hari di Bali dipenuhi dengan penghormatan kepada para dewa, baik melalui ritual keagamaan yang kompleks maupun seni tradisional yang indah.
            Keramahan dan kehangatan penduduk Bali juga menjadi bagian dari keunikan pulau ini. Budaya ramah tamah yang diterapkan dalam kehidupan sehari-hari menciptakan suasana yang hangat dan menyambut bagi wisatawan yang datang.
            Dengan semua karakteristik ini, Bali dianggap sebagai tempat yang diberkahi, penuh dengan keindahan alam, warisan budaya yang kaya, dan spiritualitas yang dalam, sehingga layak mendapat julukan "Pulau Dewata."
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default PerayaanFakta;