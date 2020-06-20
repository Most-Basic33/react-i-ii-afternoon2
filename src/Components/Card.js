import React, { Component } from 'react';
import Data from './Data'
//  const List = (list) => {

//     let newArray = list.thing.map((element, i, a) => (
//       <div> {

//         element.name
//         /* =[],
//         element.city, element.country,
//         element.employer,
//         element.favoriteMovies */}

//        </div>
//     ))
//     return (
//       <div>
//         {newArray}
//       </div>
//     )
//   }

//   const filterMap = (userInput) => {
//     let output = [];
//     output = this.List(List).filter((e, i, a) => e.id !== this.id)

//   }

const Card = (props) => {

    // let output = [];
    // output = (Data).filter((e, i, a) => e.id == 13)
    // console.log(output, "output of filtered item")


const person = props.output[0]
    console.log(props, "inside of card")
    return (
        <div>
            <h2 className='JSON'>{JSON.stringify(props.output)}</h2>
            <br></br>
            <ul>
                <li>{person.name.first}</li>
                <li>{person.name.last}</li>
                <li>{person.employer}</li>
            </ul>
            <br></br>
            <ol>
                <li>{person.favoriteMovies[0]}</li>
                <li>{person.favoriteMovies[1]}</li>
                <li>{person.favoriteMovies[2]}</li>
            </ol>
        </div>
    )
}
export default Card;
