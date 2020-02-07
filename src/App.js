import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="ui menu inverted fixed">
      <a class="item">Editorials</a>
      <a class="item">Reviews</a>
      <div class="ui icon input">
        <input type="text" placeholder="Buscar..." />
        <i aria-hidden="true" class="search icon"></i>
      </div>
    </div>
  );
}

export default App;
