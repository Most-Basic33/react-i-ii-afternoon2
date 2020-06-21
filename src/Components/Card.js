import React from 'react';


const Card = (props) => {

const person = props.output[0]
   // console.log(props, "inside of card")
    return (
        <div className='JSON'>
        <main id='container'>
            <h1>{person.name.first} {person.name.last}</h1>
            <br></br>
            <ul>
                <li>{person.title}</li>
                <li>{person.city}, {person.country}</li>
                <li>{person.employer}</li>
            </ul>
            <br></br>
            <ol>
                <li>{person.favoriteMovies[0]}</li>
                <li>{person.favoriteMovies[1]}</li>
                <li>{person.favoriteMovies[2]}</li>
            </ol>
            </main>
        </div>
    )
}
export default Card;
