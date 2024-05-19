import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';
import './login.css';

const onChange = () => { };

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleSaveName = () => {
    setSavedName(name);
    localStorage.setItem('savedName', name);
    navigate('/homepage', { state: { savedName: name } });
  };

  return (
    <div className="container-login">
      <div className='absolute-login'>
        <h1 className='h1-login'>Welcome to Beauty of Bali</h1>
        <h3 className='h3-login'>Siapkah anda untuk bermain dan belajar ? </h3>
        <input className='input-Login mb-1'
          type="text"
          placeholder="Masukkan nama anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className='recaptcha-box'>
          <ReCAPTCHA className='recaptcha' sitekey="6Le4kOEpAAAAAEWp5TPrDbfh3strLls6R77Kr1Lg" onChange={onChange} />
        </div>
        <br />
        <button className='button-login mt-1' onClick={handleSaveName}>Mulai</button>
      </div>
    </div>
  );
}

export default LoginPage;
