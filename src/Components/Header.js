 import  React  from 'react';

 const Header = (props) => {
     //console.log(props)
     return(
         
         <header>
             Home {props.count}/25 
         </header>
     )
 }
 export default Header