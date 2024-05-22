import React from "react";
import "./listmakan.css";
import babiguling from "./img-restaurant/babiguling.avif";
import ayambetutu from "./img-restaurant/ayambetutu.jpg";
import lawar from "./img-restaurant/lawar.jpg";
import nasicampur from "./img-restaurant/nasicampur.webp";
import satelilit from "./img-restaurant/satelilit.jpeg";

function Listmakan() {
  return (
    <div className="container-restoran">
      <br /><br /><br />
      <a href="restoran" class="button ml-10 mr-10">
        <div class="button-box">
          <span class="button-elem">
            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
            </svg>
          </span>
          <span class="button-elem">
            <svg viewBox="0 0 46 40">
              <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
            </svg>
          </span>
        </div>
      </a>
      <h1 className="sambutan-restoran-list">Mau makan apa hari ini ?</h1>
      <div className="card-container">
        <div className="card">
          <a href="makanan1">
            <div className="card-image"> <img src={babiguling} alt="Babi Guling" /></div>
          </a>
          <a href="makanan1">
            <div className="category"> First Food </div>
          </a>
          <div className="heading">
            {" "}
            Babi Guling
            <div className="author">
              {" "}
              By <span className="name">Ryann</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="card">
          <a href="makanan2">
            <div className="card-image"> <img src={ayambetutu} alt="Ayam Betutu" /></div>
          </a>
          <a href="makanan2">
            <div className="category"> Second Food </div>
          </a>
          <div className="heading">
            {" "}
            Ayam Betutu
            <div className="author">
              {" "}
              By <span className="name">Audrey</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="card">
          <a href="makanan3">
            <div className="card-image"> <img src={satelilit} alt="Sate Lilit" /></div>
          </a>
          <a href="makanan3">
            <div className="category"> Third Food </div>
          </a>
          <div className="heading">
            {" "}
            Sate Lilit
            <div className="author">
              {" "}
              By <span className="name">Veren</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="card">
          <a href="makanan4">
            <div className="card-image"> <img src={lawar} alt="Lawar" /></div>
          </a>
          <a href="makanan4">
            <div className="category"> Fourth Food </div>
          </a>
          <div className="heading">
            {" "}
            Lawar
            <div className="author">
              {" "}
              By <span className="name">Devin</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="card">
          <a href="makanan5">
            <div className="card-image"> <img src={nasicampur} alt="Nasi Campur" /></div>
          </a>
          <a href="makanan5">
            <div className="category"> Fifth Food </div>
          </a>
          <div className="heading">
            {" "}
            Nasi Campur
            <div className="author">
              {" "}
              By <span className="name">Joni</span> 4 days ago
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Listmakan;
