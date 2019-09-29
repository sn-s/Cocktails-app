import React, {useState} from 'react';
import './App.css';
import { Store } from "./store/Store";
import Results from "./components/results/Results";
import cocktailsImage from "./assets/cocktails-image.jpg";

const App = () => {

  const [input, setInput] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const submitInputHandle = (e) => {
    e.preventDefault();
    setSubmittedInput(input);
  }

  return (
    <Store query={submittedInput} >
      <div className="App">
        <header>
        <div className="heading">
          <h1>Cocktail Database</h1>
          <img className="image" alt="cocktails" src={cocktailsImage} />
        </div>
        </header>
        <form onSubmit={submitInputHandle} >
          <input 
            className="inputStyle"
            type="text" 
            value={input} 
            placeholder="search cocktails"
            onChange={handleChange} 
          />
          <button className="inputStyle">
            Submit
          </button>
        </form>

        <Results/>
      </div>
    </Store>  
  );
}

export default App;
