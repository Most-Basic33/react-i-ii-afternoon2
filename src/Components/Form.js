import React, { Component  } from 'react';
import Data from './Data';
class Form extends Component{
constructor(props){
    super(props);
    this.state ={
        id:this.props.counter,
        fname:'',lname:'',
        city:'',
        country:'',
        employer:'',
        title:'',
        favoriteMovies1:'',
        favoriteMovies2:'',
        favoriteMovies3:'',
        newPerson:Data
    }
}
addAppt=(info)=>{
    let newArray = [...Data]
    Data.push(info);
    newArray.push(info)
    this.setState({
        newPerson: newArray
    })

}
handleChage=(e)=>{
    console.log(e.target.value)
    this.setState({
        [e.target.name] : e.target.value
    })
}
handleSubmit =(e)=>{
    e.preventDefault();
  this.addAppt(this.state)
  this.setState({
      fname:'',
      lname:'',
      city:'',
      country:'',
      employer:'',
      title:'',
      favoriteMovies1:'',
      favoriteMovies2:'',
      favoriteMovies3:''

  })
   
}

render(){
    
    return(
        <form className='form' onSubmit={this.handleSubmit}>
            <input 
                type='text'
                placeholder='First Name'
                name='fname'
                value={this.state.fname}
                onChange={this.handleChage}
            />
             <input 
                type='text'
                placeholder='Last Name'
                name='lname'
                value={this.state.lname}
                onChange={this.handleChage}
            />
             <input 
                type='text'
                placeholder='city'
                name='city'
                value={this.state.city}
                onChange={this.handleChage}
            />
             <input 
                type='text'
                placeholder='country'
                name='country'
                value={this.state.country}
                onChange={this.handleChage}
            />
             <input 
                type='text'
                placeholder='employer'
                name='employer'
                value={this.state.employer}
                onChange={this.handleChage}
            />
             <input 
                type='text'
                placeholder='title'
                name='title'
                value={this.state.title}
                onChange={this.handleChage}
            />
           
             <input 
                type='text'
                placeholder='Favorite Movie[1]'
                name='favoriteMovies1'
                value={this.state.favoriteMovies1}
                onChange={this.handleChage}
            />
             <input 
                type='text'
                placeholder='Favorite Movie[2]'
                name='favoriteMovies2'
                value={this.state.favoriteMovies2}
                onChange={this.handleChage}
            />
             <input 
                type='text'
                placeholder='Favorite Movie[3]'
                name='favoriteMovies3'
                value={this.state.name}
                onChange={this.handleChage}
            />
            <button>Add Person</button>
            {console.log(this.state)}
            {console.log(this.state.newPerson)}
            
        </form>
    )
}
}
export default Form;