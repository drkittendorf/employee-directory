import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Search from './components/Search';
//insert links to other pages on site

function App() {
  return (
    <div>
        <Header />
        <Search />
        <Home />
    </div>
    
  );
}

export default App;
