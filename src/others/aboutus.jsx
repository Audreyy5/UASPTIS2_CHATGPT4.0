import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './aboutus.css';
import image0 from './img/Image0.jpeg';
import image1 from './img/devin.jpg';
import image2 from './img/drey.jpg';
import image3 from './img/ver.jpg';
import image4 from './img/ryann.jpg';
import { FaHome } from "react-icons/fa";

function AboutUs() {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchJoke = async () => {
    setLoading(true);
    setError(null);

    const url = 'https://icanhazdadjoke.com/';
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setJoke(result.joke);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='container-utama-aboutus'>
        <div className='judul-aboutus' ref={ref}>
          <a href="/homepage" >
            <br />
            <div className='text-white text-5xl ml-16 mt-20 mb-5'>
              <FaHome />
            </div>
          </a>
          <h2 className={inView ? 'animated fadeInUp' : ''}>✨ About Us ✨</h2><br />
          <img src={image0} alt="Image 0" className='photo-aboutus' />
          <p className={inView ? 'animated fadeIn' : ''}>Kelompok kami berkomitmen untuk menyelesaikan project terakhir UAS PTI di semester dua ini dengan sebaik mungkin dan mendapat hasil yang maksimal.
            Dengan pemberian tema 'Nusantara' sebagai materi utama yang dibawakan pada setiap pembuatan websitenya, kami memilih daerah Bali untuk kami presentasikan dan
            membantu banyak orang untuk mengenal Pulau Bali lebih dalam. Dengan mengangkat tema "Beauty of Bali" dalam website edukasi ini, kami berharap dapat memberikan
            pemahaman yang lebih dalam tentang keindahan dan kekayaan budaya Bali kepada para pengunjung. Melalui isi web yang informatif dan interaktif, kami ingin mengembangkan
            minat masyarakat dalam melestarikan lingkungan, budaya, dan tradisi Bali. Kami juga berharap bahwa melalui pemahaman yang lebih baik tentang Bali, pengunjung dapat
            mengambil inspirasi dari nilai-nilai kearifan lokal Bali, seperti harmoni dengan alam, keramahan, dan kekentalan budaya, untuk diterapkan dalam kehidupan sehari-hari,
            baik di Bali maupun di tempat lain di dunia.
          </p>
          <br />
          <div className={`quotes`}>
            <h2 className={inView ? 'animated fadeIn' : ''}>✅ Quotes Of The Day ✅</h2>
            <button onClick={fetchJoke} className="mt-5 bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Dapatkan Quotes Baru
            </button>
            {loading && <div className='mt-2'>Loading...</div>}
            {error && <div>Error : {error}</div>}
            {joke && <p>{joke}</p>}
          </div>

          <br /><br />
          <h2 className={inView ? 'animated fadeIn' : ''}>👫 Meet Our Team 👫</h2>
          <br />
        </div>

        <div className="container-aboutus">
          <table className='table-aboutus'>
            <tbody>
              <tr>
                <td className='td-aboutus'>
                  <img className='img-aboutus' src={image1} alt="Image 1" />
                  <p><strong>Devin Wongosari</strong></p>
                  <p>00000093438</p>
                </td>
                <td className='td-aboutus'>
                  <img className='img-aboutus' src={image2} alt="Image 2" />
                  <p><strong>Audrey Christabelle Hakim</strong></p>
                  <p>00000093142</p>
                </td>
              </tr>
              <tr>
                <td className='td-aboutus'>
                  <img className='img-aboutus' src={image3} alt="Image 3" />
                  <p><strong>Fellisca Veren</strong></p>
                  <p>00000092385</p>
                </td>
                <td className='td-aboutus'>
                  <img className='img-aboutus' src={image4} alt="Image 4" />
                  <p><strong>Ryann Chandiari</strong></p>
                  <p>00000092718</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='closing-aboutus'>
          <h2 className={inView ? 'animated fadeIn' : ''}>Sampai Jumpa Lagi ! Matur Suksma 👋</h2>
          <br /><br />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
