import React, { Component } from 'react';
import './App.css';
import SearchIn from '../components/SearchIn';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';

class App extends Component{
  constructor(){
    super()
    this.state = {
      user: [],
      searchfiald: "",
    }
  }

  onSearchChange = (e) => {
    this.setState({searchfiald: e.target.value});
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user=> this.setState({user: user}))
  }
  
  render(){
    const {user, searchfiald} = this.state;
    const filtred = user.filter(u=>{
      return u.name.toLowerCase().includes(searchfiald.toLowerCase());
    })
    let arr = Object.entries(filtred)

    if(!user.length){
      return <h1 className='tc'>Loading ...</h1>
    }else{
        return (
        <div className='tc'>
          <h1>Awesome Website</h1>
          <SearchIn searchChange={this.onSearchChange}/>
          <Scroll>
          <CardList ser={filtred} resault={arr.length}/>
          </Scroll>
        </div>
      );
    } 
  }
}
export default App;