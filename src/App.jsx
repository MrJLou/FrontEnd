import { useState } from 'react';
import './App.css';
import logo from '/Clr.png';
import logo2 from '/A.png';
import { SearchBar } from "./Components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {

 const [results, setResults] = useState([]);

 return <div className="App">
 <nav>
    <img src={logo} className="title" alt="title" width="70"/>
    <img src={logo2} className="user" alt="user" width="65"/>
 
    <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
 </nav>
  
 </div>
  
}

export default App