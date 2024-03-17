// Implementation of State 


// Import useState hook from React 
import React, { useState } from 'react';

const StateComponent = () => {
    // Call useState hook and destructure the returned value and function
    // Initialize State to be 'Billy Bob Thorton' 
    // Remember it is a good idea to initialize state early in the function 
    const [ username, setUsername ] = useState( 'Random Username' );

    const updateUsername = () => {
        // Update the value of the username state using the setUsername funciton 
        setUsername( 'John F. Kennedy' );
    }

    // Create an event listener and pass a reference to updateUsername 
    // When clicked the username state will update and the new username will appear on the page 
    return(
        <div> 
            <h1> { username } </h1>
            <button onClick = { updateUsername }> Create </button>
        </div>
    )
}

export default StateComponent;

