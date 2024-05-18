import React, { useState } from 'react';
import { Modal, Button } from '@mui/material'; 
import './museum-quiz.css';

const QuizMuseum = () => {
  const pertanyaanUmum = [
    {
      id: 1,
      question: '1. Apa nama rumah adat Bali yang diawali dengan kata "Bale" yang tidak ada pada ruang rumah adat ?',
      options: ['Bale Sekapat', 'Bale Manten', 'Bale Dauh'],
      answer: 'Bale Dauh',
      userAnswer: null,
      isCorrect: null
    },
    {
      id: 2,
      question: '2. Apa nama pakaian adat daerah Bali ?',
      options: ['Kebaya Bali', 'Payas Agung', 'Ulee Balang'],
      answer: 'Payas Agung',
      userAnswer: null,
      isCorrect: null
    },
    {
      id: 3,
      question: '3. Apa ruang yang tidak ada di Museum of Bali ?',
      options: ['makanan', 'perayaan', 'lagu daerah'],
      answer: 'makanan',
      userAnswer: null,
      isCorrect: null
    },
    {
      id: 4,
      question: '4. Apa singkatan dari GWK ?',
      options: ['Garuda Wisnu Kencana', 'Global Wisnu Kencana', 'Gedung Wawasan Kencana'],
      answer: 'Garuda Wisnu Kencana',
      userAnswer: null,
      isCorrect: null
    },
    {
      id: 5,
      question: '5. Dimana lokasi Gala Diner KTT ke-43 ASEAN Indonesia ?',
      options: ['Istana Presiden di Bogor', 'Garuda Wisnu Kencana', 'Monas'],
      answer: 'Garuda Wisnu Kencana',
      userAnswer: null,
      isCorrect: null
    },
    {
      id: 6,
      question: '6. Apa nama lain dari Pulau Bali ?',
      options: ['Pulau Keindahan', 'Pulau Kebersihan', 'Pulau Dewata'],
      answer: 'Pulau Dewata',
      userAnswer: null,
      isCorrect: null
    },
    {
      id: 7,
      question: '7. Apa fakta di bawah ini yang tidak disebutkan dalam museum ?',
      options: ['Perayaan Hindu yang Spesial', 'Keindahan pantai di Bali', 'Patung GWK'],
      answer: 'Keindahan pantai di Bali',
      userAnswer: null,
      isCorrect: null
    },
    {
      id: 8,
      question: '8. Tari apa yang biasa dikenal dengan penggunaan suara "cak" yang dilantunkan secara berulang-ulang ?',
      options: ['Tari Pendet', 'Tari Cicak', 'Tari Kecak'],
      answer: 'Tari Kecak',
      userAnswer: null,
      isCorrect: null
    }
  ];

  const [questions, setQuestions] = useState(pertanyaanUmum);
  const [userAnswers, setUserAnswers] = useState(Array(pertanyaanUmum.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionId - 1] = answer;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    updateAnswers();
    setShowResult(true);
    setShowNotification(true); 
  };

  const updateAnswers = () => {
    const updatedQuestions = questions.map((question, index) => ({
      ...question,
      userAnswer: userAnswers[index],
      isCorrect: question.answer === userAnswers[index]
    }));
    setQuestions(updatedQuestions);
  };

  const score = questions.filter((question) => question.isCorrect).length;
  const passScore = 5;
  const isPassed = score >= passScore;

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className='gambar-main-quiz'>
      <div className='container'>
      <button className='button-quiz-museum' onClick={goBack}>Kembali</button>
        <div className='header'>
          <br /><br />
          <h2>Selamat datang di Waktu Indonesia Quiz !!</h2>
          <h4>Jawab pertanyaan dengan benar minimal 5 untuk mendapat kelulusan ✨</h4>
        </div>
        {questions.map((question) => (
          <div key={question.id}>
            <div className='question-container'>
              <h3>{question.question}</h3>
            </div>
            <div className='answer-container'>
              {question.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={option}
                    checked={userAnswers[question.id - 1] === option}
                    onChange={() => handleAnswerChange(question.id, option)}
                    disabled={showResult}
                  />
                  {option}
                </label>
              ))}
              {showResult && (
                <span>{question.isCorrect ? ' ✅' : ' ❌'}</span>
              )}
            </div>
          </div>
        ))}
        <div className='button-container'>
          <button onClick={handleSubmit} disabled={showResult}>Submit</button><br />
        </div>
        {showResult && (
          <div className='hasil-score'>
            <h2>Score : {score}</h2>
            <p>{isPassed ? 'Selamat anda lulus!' : 'Maaf, anda gagal dalam quiz ini !'}</p>
          </div>
        )}
        <Modal open={showNotification} onClose={() => setShowNotification(false)}>
          <div className='notification-container'>
            <p>Quiz berhasil dikumpulkan!</p>
            <Button className='close-button' onClick={() => setShowNotification(false)}>Close</Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default QuizMuseum;
