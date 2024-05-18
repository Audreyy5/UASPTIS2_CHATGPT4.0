import React from 'react';
import './Diving1.css';
import MolaMola from './img-pantai/mola-mola.png';
import PenyuLaut from './img-pantai/penyu-laut.png';
import PariManta from './img-pantai/pari-manta.png';
import HiuKarang from './img-pantai/hiu-karang.png';
import UnderwaterBg from './img-pantai/bgdiving.jpg';
import LaguPantai from './img-pantai/underwaterbgm.mp3';

function Diving (){
    const goBack = () => {
        window.history.back();
    };
    const generateRandomPosition = () => {
        const top = Math.floor(Math.random() * 80) + 'vh';
        const left = Math.floor(Math.random() * 80) + 'vw';
        return { top, left };
    };

    const positions = [generateRandomPosition(), generateRandomPosition(), generateRandomPosition(), generateRandomPosition()];

    return(
        <div className="relative container-diving p-4 flex flex-col items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${UnderwaterBg})`, minHeight: '150vh' }}>
            <audio id="laguPantai" src={LaguPantai} loop autoPlay />
            <div className='button-back-diving mb-4'>
                <button className='back-diving bg-blue-500 text-white px-4 py-2 rounded shadow' onClick={goBack}>
                    <p className='p-diving text-white'>Kembali</p>
                </button>
            </div>
            <div className='foto-ikan-diving relative w-full h-full'>
                <div className="absolute" style={positions[0]}>
                    <a href='PariManta'>
                        <img src={PariManta} alt="Gambar 1 diving" className='image-diving w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64' />
                    </a>
                </div>
                <div className="absolute" style={positions[1]}>
                    <a href='PenyuLaut'>
                        <img src={PenyuLaut} alt="Gambar 2 diving" className='image-diving w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64' />
                    </a>
                </div>
                <div className="absolute" style={positions[2]}>
                    <a href='MolaMola'>
                        <img src={MolaMola} alt="Gambar 3 diving" className='image-diving w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64' />
                    </a>
                </div>
                <div className="absolute" style={positions[3]}>
                    <a href='HiuKarang'>
                        <img src={HiuKarang} alt="Gambar 4 diving" className='image-diving w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Diving;
