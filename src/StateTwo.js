// Implementation of State Version #2 

import React, { useState } from 'react';

const StateComponentTwo = () => {
    const [ number, setNumber ] = useState( 0 );
    const [ coordinates, setCoordinates ] = useState( null );

    const updateNumber = ( e ) => {
        let user = { username: 'Gibby', email: 'gibbons@gmail.com' };
        console.log( user );
        user.username = 'Gibby the Great';
        console.log( user );
        setNumber( number + 1 );
    }

    // Function to update coordinates based on mouse movement 
    const updateCoordinates = ( e ) => {
        const x = e.pageX;
        const y = e.pageY;
        const pageCoordinates = ( `X: ${ x } || Y: ${ y }` );
        setCoordinates( pageCoordinates );
        return coordinates;
    }

    return(
        <div onMouseMove = { updateCoordinates }> 
            <h1> { number } </h1>
            <p onMouseEnter = { updateNumber }> This is a paragraph tag with some text inside... everytime your mouse 
                enters this tag the number on the screen will increase 
            </p>
            <h3> { coordinates } </h3>
        </div>
    )
}

export default StateComponentTwo;