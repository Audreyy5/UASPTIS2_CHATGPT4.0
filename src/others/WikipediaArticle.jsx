import React, { useState, useEffect } from 'react';

function WikipediaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermSubmitted, setSearchTermSubmitted] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchTermSubmitted(searchTerm);
  };

  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    if (!searchTermSubmitted) return;

    const fetchWikipediaArticle = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://id.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=${encodeURIComponent(searchTermSubmitted)}&origin=*`
        );
        const data = await response.json();
        const pages = data.query.pages;
        const page = Object.values(pages)[0];
        if (page.missing) {
          setError({ message: 'Article not found' });
          setArticleContent('');
        } else {
          setArticleContent(page.extract);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWikipediaArticle();
  }, [searchTermSubmitted]);

  return (
    <div className="App text-center ">
      <header className="App-header bg-gray-200 min-h-screen flex flex-col items-center justify-center text-white">
        <button onClick={goBack} className="p-2.5 m-1 text-lg bg-gray-400 text-white rounded hover:bg-gray-300 shadow">
          Kembali
        </button>
        <h1 className="text-4xl mb-4 mt-10 font-serif text-black italic">Wikipedia Article</h1>
        <p className='font-serif text-black'>Cari dan temukan artikel yang anda inginkan !!</p>
        <form onSubmit={handleSearch} className="mb-8 ">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter article title"
            className="p-2 m-2 text-lg border rounded shadow"
          />
          <button type="submit" className="p-2.5 m-1 text-lg bg-blue-400 text-white rounded hover:bg-blue-600 shadow">
            Cari
          </button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {articleContent && (
          <div className="mx-auto max-w-2xl text-justify text-black">
            <h1 className="text-2xl font-bold mb-4 text-center text-black">{searchTermSubmitted}</h1>
            <div dangerouslySetInnerHTML={{ __html: articleContent }} />
          </div>
        )}
        <br /><br /><br />
      </header>
    </div>
  );
}

export default WikipediaPage;
