import React, { useState } from 'react'
import './App.css';
import Quotes from './quote.json';

const App = () => {

// const randomQuote = () =>{
//     const randomNo = Math.floor(Math.random() * 30);
// }

  const [quote, setQuote] = useState(() =>{
    const randomNo = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomNo];
  });

  const randomQuote = () =>{
    const randomNo = Math.floor(Math.random() * Quotes.length);
    setQuote(Quotes[randomNo]);
  }
  
  return (
   <>
      <div className="container">
      <div className="quote-box">
        <h1>{quote.quote}</h1>
        <h2>-{quote.author}</h2>
        <button onClick = {randomQuote}>New Quote</button>
      </div>
      </div>
   </>
  )
}

export default App;
