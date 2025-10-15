
import React from "react";
import './../styles/App.css';
import { useState } from "react";
 
const App = () => {
  const [name, setName] = useState(""); 
  return (
    <div>
      <label htmlFor="name">Enter your name:</label>
      <input
       id="name"
       type="text"
       value={name}
       onChange={(e) => setName(e.target.value)}
      />
   {name && <h1>Hello {name}!</h1>} 
    </div>
  )
}

export default App
