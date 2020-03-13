import React from 'react';
import './App.css';
import Dropdown from "../Dropdown/Dropdown";
import Registration from "../Registration/Registration";
import Hooks from "../Hooks/Hooks";
import Faq from "../Faq/Faq";

function App() {
  return (
    <div className="App">
      <Dropdown/>
      <Registration/>
      <Hooks/>
      <Faq/>
      </div>
  );
}

export default App;
