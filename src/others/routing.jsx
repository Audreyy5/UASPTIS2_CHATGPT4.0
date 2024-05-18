import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import LoginPage from './login.jsx';
import WikipediaArticle from '../others/WikipediaArticle.jsx';
import Museum from './../museum/main-museum.jsx';
import AboutUs from './aboutus.jsx';
import Homepage from './homePage.jsx';
import TarianLagu from './../museum/tarian.jsx';
import RumahPakaian from './../museum/rumah.jsx';
import PerayaanFakta from './../museum/perayaan.jsx';
import QuizMuseum from './../museum/museum-quiz.jsx';
import MainPantai from '../Pantai/mainpantai.jsx';
import Diving from '../Pantai/Diving1.jsx';
import PantaiBerlian from '../Pantai/PantaiBerlian.jsx';
import PantaiUluwatu from '../Pantai/PantaiUluwatu.jsx';
import PantaiKelingking from '../Pantai/PantaiKelingking.jsx';
import MolaMola from '../Pantai/IkanMolamola.jsx';
import PariManta from '../Pantai/IkanPariManta.jsx';
import HiuKarang from '../Pantai/IkanHiuKarang.jsx';
import PenyuLaut from '../Pantai/PenyuLaut.jsx';
import Game from '../Pantai/gamepantai.jsx';
import Restoran from '../restoran/lobby.jsx';
import Listmakan from '../restoran/listmakan.jsx';
import Makanan1 from '../restoran/pilihmakan1.jsx';
import Makanan2 from '../restoran/pilihmakan2.jsx';
import Makanan3 from '../restoran/pilihmakan3.jsx';
import Makanan4 from '../restoran/pilihmakan4.jsx';
import Makanan5 from '../restoran/pilihmakan5.jsx';
import BabiGuling from '../restoran/lihatresep1.jsx';
import AyamBetutu from '../restoran/lihatresep2.jsx';
import SateLilit from '../restoran/lihatresep3.jsx';
import Lawar from '../restoran/lihatresep4.jsx';
import NasiCampurBali from '../restoran/lihatresep5.jsx';
import Gameresto from '../restoran/gameresto.jsx';
import Makan from '../restoran/makan.jsx';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/wikipedia" element={<WikipediaArticle />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/museum" element={<Museum />} />
      <Route path="/tarianlagu" element={<TarianLagu />} />
      <Route path="/rumahpakaian" element={<RumahPakaian />} />
      <Route path="/perayaanfakta" element={<PerayaanFakta />} />
      <Route path="/quizmuseum" element={<QuizMuseum />} />
      <Route path="/pantai" element={<MainPantai />} />
      <Route path="/pantaiberlian" element={<PantaiBerlian />} />
      <Route path="/pantaiuluwatu" element={<PantaiUluwatu />} />
      <Route path="/pantaikelingking" element={<PantaiKelingking />} />
      <Route path="/diving" element={<Diving />} />
      <Route path="/gamepantai" element={<Game/>} />
      <Route path="/molamola" element={<MolaMola/>} />
      <Route path="/parimanta" element={<PariManta />} />
      <Route path="/hiukarang" element={<HiuKarang />} />
      <Route path="/penyulaut" element={<PenyuLaut />} />
      <Route path="/restoran" element={<Restoran />} />
      <Route path="/listmakan" element={<Listmakan />} />
      <Route path="/makanan1" element={<Makanan1 />} />
      <Route path="/makanan2" element={<Makanan2 />} />
      <Route path="/makanan3" element={<Makanan3 />} />
      <Route path="/makanan4" element={<Makanan4 />} />
      <Route path="/makanan5" element={<Makanan5 />} />
      <Route path="/babi-guling" element={<BabiGuling />} />
      <Route path='/ayam-betutu' element={<AyamBetutu />} />
      <Route path='/sate-lilit' element={<SateLilit />} />
      <Route path='/lawar' element={<Lawar />} />
      <Route path='/nasi-campur' element={<NasiCampurBali />} />
      <Route path='/gameresto' element={<Gameresto />} />
      <Route path='/stopwatch' element={<Makan />} />
    </Routes>
    </BrowserRouter>  
  );
}

export default App;
