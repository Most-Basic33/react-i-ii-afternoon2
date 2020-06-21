import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Data from './Components/Data'
import Card from './Components/Card'
import Header from './Components/Header';
import Form from './Components/Form';




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
    //console.log(remove,'remove')
    this.setState({
      array:remove,
      counter:this.state.counter+1
    })
  }
  
    handleClick=(e)=>{
     this.setState({
       counter:this.state.counter+1
     })  
   }
  
  render() {
    const { counter } = this.state
    let output = [];
    if(counter == Data.length){
      this.setState({
        counter: 1
      })
    }
    output = (Data).filter((e, i, a) => e.id === this.state.counter)
    
   return (
    <div className='app'>
    <section className='body'>
    <div className='app-container'>
      <Header count={counter} />
      <Card output={output}/>
      <button onClick={(e)=> this.handleClick(e)}>Switch People</button>
        <button onClick={()=>this.handleRemove(this.state.counter) }>Remove People</button>  
        </div>
        <Form counter={counter}/>
       </section>
       
       
    </div>
  );
  }
}

export default App
