import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Data from './Components/Data'
import Card from './Components/Card'




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter:1,
      item:Data.id,

    }
  }
    handleClick=(e)=>{
     this.setState({
       counter:this.state.counter+1
     })
     
    
  }
  
  render() {
    const { counter } = this.state
    let output = [];
    if(counter == 25){
      this.setState({
        counter: 1
      })
    }
    output = (Data).filter((e, i, a) => e.id == this.state.counter)
    console.log(output, "output of filtered item")

    const mappedArray = Data.map((element, index) => {
      //counter = index;
      return  <div key={index} element={element}>{JSON.stringify(element)}</div>      
      
    })
  return (
    <div>
      {}
      <Card output={output}/>
      <button onClick={(e)=> this.handleClick(e)}>Switch People</button>
    </div>
  );
}
}

export default App
