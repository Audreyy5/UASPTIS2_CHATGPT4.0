import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Modal, Button } from '@mui/material'; 
import "./homePage.css";
import TodoList from "./TodoList.jsx";
import denahImage from "./img/denah-4.png";
import denahHujanImage from "./img/denah-5.png";
import kalenderImage from "./img/kalender.png";
import museumtunImage from "./img/museumtun.png";
import pantaitunImage from "./img/pantaitun.png";
import restorantunImage from "./img/restorantun.png";
import aboutusImage from "./img/aboutus.png";
import laguBali from "./img/laguBali1.mp3";
import kacapembesar from './img/kacapembesar.png';

function Homepage() {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [todos, setTodos] = useState({});
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(null);
  const [isRaining, setIsRaining] = useState(false);
  const [newsData, setNewsData] = useState(null);
  const [heroesData, setHeroesData] = useState([]);
  const [heroesLoading, setHeroesLoading] = useState(true);
  const [heroesError, setHeroesError] = useState(null);
  const audioRef = useRef(null);

    const savedName = location.state?.savedName;
  
    useEffect(() => {
      if (savedName) {
        alert(`Login berhasil! Selamat datang, ${savedName}!`);
      }
    }, [savedName]);  

  useEffect(() => {
    console.log('Fetching data...');

    const fetchData = async () => {
      const url = 'https://indonesia-public-static-api.vercel.app/api/heroes';

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data); 
        setHeroesData(data);
      } catch (error) {
        console.error('Error fetching data:', error); 
        setHeroesError(error.message);
      } finally {
        setHeroesLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "bd5e378503939ddaee76f12ad7a97608";
        const city = "Bali";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log("Weather data:", data);

        setWeather(data);
        setWeatherLoading(false);

        if (data.weather[0].main === "Rain") {
          setIsRaining(true);
        } else {
          setIsRaining(false);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherError(error);
        setWeatherLoading(false);
      }
    };

    fetchWeatherData();
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const savedName = localStorage.getItem("savedName");
    if (savedName) {
      setUserName(savedName);
      const savedTodos = localStorage.getItem(`todos_${savedName}`);
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    }
  }, []);

  useEffect(() => {
    if (location.state && location.state.savedName) {
      setUserName(location.state.savedName);
      setTodos({});
      localStorage.removeItem(`todos_${location.state.savedName}`);
    }
  }, [location.state, userName]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const playAudio = async () => {
        try {
          await audioElement.play();
          audioElement.muted = false;
          console.log("Audio playback started");
        } catch (error) {
          console.error("Audio playback failed:", error);
        }
      };

      audioElement.muted = true;
      playAudio();
    }
  }, []);

  const handleTodoToggle = (username, index) => {
    const userTodos = todos[username] || [];
    const updatedTodos = [...userTodos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos({
      ...todos,
      [username]: updatedTodos,
    });
    localStorage.setItem(`todos_${username}`, JSON.stringify(todos[username]));
  };

  const getTemperatureEmoji = (temperature) => {
    if (temperature > 30) {
      return "🌞";
    } else if (temperature < 10) {
      return "❄️";
    } else {
      return "🌤️";
    }
  };

  const getWeatherEmoji = (weatherMain) => {
    switch (weatherMain) {
      case "Thunderstorm":
        return "⛈️";
      case "Drizzle":
        return "🌧️";
      case "Rain":
        return "🌧️";
      case "Snow":
        return "❄️";
      case "Clear":
        return "☀️";
      case "Clouds":
        return "☁️";
      default:
        return "";
    }
  };

  return (
    <div className="container-all">
      <div className={isRaining ? "app-container-rain" : "app-container"}>
        <audio id="laguBali" src={laguBali} ref={audioRef} loop autoPlay muted />
        <div className="top-left">
          <h1>Mari bermain dan belajar bersama, {userName || "..."}!</h1>
          <p>Mau pergi kemana hari ini?</p>
          <ul>
            <img
              src={isRaining ? denahHujanImage : denahImage}
              alt="Denah"
              className="denah-image"
            />
            <a href="museum">
              <img src={museumtunImage} alt="Museum" className="museum-image" />
            </a>
            <a href="pantai">
              <img src={pantaitunImage} alt="Pantai" className="pantai-image" />
            </a>
            <a href="restoran">
              <img
                src={restorantunImage}
                alt="Restoran"
                className="restoran-image"
              />
            </a>
          </ul>

          <div className='kacapembesar-container'>
            <a href="wikipedia">
              <img src={kacapembesar} alt="Kacapembesar" className='kacapembesar-image' />
            </a>
          </div>
        </div>

        <div>
          <a href="aboutus">
            <img src={aboutusImage} alt="Aboutus" className="aboutus-image" />
          </a>
        </div>

        {userName && <TodoList username={userName} todos={todos[userName] || []} onTodoToggle={(index) => handleTodoToggle(userName, index)} />}

        <div className="top-right">
          <div className="date-time-container">
            <span>{currentDateTime.toLocaleDateString()}</span>
            <img src={kalenderImage} alt="Kalender" className="kalender-image ml-5" />
            <br />
            <h5>{currentDateTime.toLocaleTimeString()}</h5>
          </div>
        </div>

        <div className="weather-info">
          <h2>How's the weather in Bali?</h2>
          {weatherLoading ? (
            <p>Loading...</p>
          ) : weatherError ? (
            <p>Error: {weatherError.message}</p>
          ) : (
            weather && (
              <div className="weather-container">
                <p>City: {weather.name} 🏖️</p>
                <p>
                  Temperature: {weather.main.temp} °C{" "}
                  {getTemperatureEmoji(weather.main.temp)}
                </p>
                <p>
                  Weather:{" "}
                  {weather.weather[0].description
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}{" "}
                  {getWeatherEmoji(weather.weather[0].main)}
                </p>
              </div>
            )
          )}
        </div>
        <div className="heroes-container">
          {heroesLoading ? (
            <p>Loading heroes data...</p>
          ) : heroesError ? (
            <p>Error loading heroes data: {heroesError}</p>
          ) : (
            <div className="heroes-box">
              <h2>Daftar Pahlawan Nasional Indonesia</h2>
              <ul className="heroes-list">
                {heroesData.map((hero, index) => (
                  <li key={index}>
                    <h3><hr />{hero.name}<hr /></h3>
                    <p>Birth Year     : {hero.birth_year}</p>
                    <p>Death Year     : {hero.death_year}</p>
                    <p>Ascension Year : {hero.ascension_year}</p>
                    <p>Description    : {hero.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
