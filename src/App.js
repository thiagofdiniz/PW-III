import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  class App extends Component {
    constructor (){
      super();
      this.state = {
        lista:[{
          nome:'projeto',
          descricao:'descricao',
          usuario:'autor'
        }]
      };
    }
  render(){
  return (
    <>
      <div class="ui menu inverted fixed">
        <a class="item">Editorials</a>
        <a class="item">Reviews</a>
        <div class="ui icon input">
          <input type="text" placeholder="Buscar..." />
          <i aria-hidden="true" class="search icon"></i>
        </div>
      </div>

      <div class="ui grid three column container">
        <div class="column">
          <div class="ui card">
            <div class="image"><img src="/images/avatar/large/matthew.png" /></div>
            <div class="content">
              <div class="header">Matthew</div>
              <div class="meta"><span class="date">Joined in 2015</span></div>
              <div class="description">Matthew is a musician living in Nashville.</div>
            </div>
            <div class="extra content">
              <a>
                <i aria-hidden="true" class="user icon"></i>
                22 Friends
    </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
}
}

export default App;
