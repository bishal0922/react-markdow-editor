import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState()
  //for handling chanages in the main textarea
  const handleTextAreaChange = (e) => {
    setInput(e.target.value)
  }

  const inputa = '# This is a header\n\nAnd this is a paragraph'


  return (
    <div className="App">
      <textarea autoFocus className="textarea" value={input} onChange={handleTextAreaChange}/>
      {/* <ReactMarkdown className="markdown" source={inputa} ></ReactMarkdown> */}
      ReactDOM.render(<ReactMarkdown source={inputa} />, document.getElementById('container'))
    </div>
  )
}

export default App
