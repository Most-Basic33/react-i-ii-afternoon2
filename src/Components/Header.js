 import  React  from 'react';
import Data from './Data';


 const Header = (props) => {
   //  console.log(Form.newPerson)
     return(
         
         <header className='headPiece'>
         <div> Home</div>
               {props.count}/{Data.length} 
         </header>
     )
 }
 export default Header