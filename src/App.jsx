import { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom"
import { SearchBar } from "./Components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {

  const [results, setResults] = useState([]);

  return <div className="App">
  <Link to="/" className='title'>CLR</Link>
  <Link to="Log-in" className='user'>Login</Link>
  <nav>
    <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
  </nav>
  
  </div>
  
}

export default App
