 import  React  from 'react';

 const Header = (props) => {
     //console.log(props)
     return(
         
         <header className='headPiece'>
         <div> Home</div>
               {props.count}/25 
         </header>
     )
 }
 export default Header