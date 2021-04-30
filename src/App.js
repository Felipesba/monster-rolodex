import React, { Component } from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-bar/search-bar.component.jsx';


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchfield: ""
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({searchfield: e.target.value });
  }

  render() {
    const { monsters, searchfield} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
        );
  
    
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
  
      <SearchBox
          placeholder='Search Monster'
          handleChange={this.handleChange}
      />
    
      <Cardlist monsters={filteredMonsters}>      
      </Cardlist>
    </div>
    );
  } 
}


export default App;
