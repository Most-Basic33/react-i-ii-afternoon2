 import  React  from 'react';
import Data from './Data';


 const Header = (props) => {
    console.log(props.array)
     return(
         
         <header className='headPiece'>
         <div> Home</div>
               {props.count}/{props.array.length} 
         </header>
     )
 }
 export default Header