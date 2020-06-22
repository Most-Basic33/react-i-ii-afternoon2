import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Data from './Components/Data'
import Card from './Components/Card'
import Header from './Components/Header';
import Form from './Components/Form';
import Button from './Components/Button';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter:1,
      array:Data
    

    }
  }
  handleRemove=(id)=>{
    alert('Item deleted')
    const remove = this.state.array.filter(element => element.id !==id) 
    console.log(remove,'remove')
    this.setState({
      array:remove,
      counter:this.state.counter+1
    })
  }
  handleMinus=e=>{
    this.setState({
      counter:this.state.counter-1
    })
  }
    handleClick=(e)=>{
     this.setState({
       counter:this.state.counter+1
     })  
   }
   componentDidUpdate(){
     let {counter} = this.state
    if(counter === Data.length){
      this.setState({
        counter: 1
      })
    }
   }
   handleEdit=(e)=>{
    alert('You pressed Edit, it does nothing, holla!')
}
  
  render() {
    const { counter } = this.state
    let output = [];
   

    output = (Data).filter((e, i, a) => e.id === counter)
    
   return (
    <div className='app'>
    <section className='body'>
    <div className='app-container'>
      <Header count={counter} array={this.state.array} />
      <Card output={output}/>
        </div>
        <Button handleEdit={this.handleEdit} handleMinus={this.handleMinus} handleClick={this.handleClick} handleRemove={this.handleRemove} counter={counter}/>
        <Form counter={counter}/>
       </section>
       
       
    </div>
  );
  }
}

export default App
