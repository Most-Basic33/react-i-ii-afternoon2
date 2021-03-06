import React from 'react';


const Card = (props) => {

const person = props.output[0]
   // console.log(props, "inside of card")
    return (
        <div className='card'>
        <main id='container'>
            <h1>Name: {person.name.first} {person.name.last}</h1>
            <br></br>
            <ul>
                <li>Title: {person.title}</li>
                <li>From: {person.city}, {person.country}</li>
                <li>Employer: {person.employer}</li>
            </ul>
            <br></br>
            <ol>
            <span>Favorite Movies:</span>
          
                <li>{person.favoriteMovies[0]}</li>
                <li>{person.favoriteMovies[1]}</li>
                <li>{person.favoriteMovies[2]}</li>
            </ol>
            </main>
        </div>
    )
}
export default Card;
