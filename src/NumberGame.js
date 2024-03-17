// Implementation of a NumberGame 

import React, { useState } from 'react';
import SearchCategoryLayout from 'semantic-ui-react/dist/commonjs/modules/Search/SearchCategoryLayout';

const NumberGame = () => {

    const createRandom = () => { return Math.floor( Math.random() * 10 ) + 1 };
    const [ target, setTarget ] = useState( 0 );
    const [ guess, setGuess ] = useState( createRandom );

    const guessNumber = () => {
        setGuess( createRandom );
        return guess;
    }

    return(
        <div className = 'ui container'>
            <div>
                <h1 className = 'mt-5'> Target Number: { target } </h1>
                <button className = 'ui animated button pink' tabIndex = '0'>
                    <div className = 'visible content'> New Target </div>
                    <div className = 'hidden content'> Example: 8 </div>
                </button>
            </div>
            <div> 
                <h1 className = 'mt-5'> Number Guessed: { guess } </h1>
                <button className = 'ui animated button pink' tabIndex = '0'> 
                    <div className = 'visible content'> Guess Number </div>
                    <div className = 'hidden content'> Example: 65 </div>
                </button>
            </div>
        </div>
    )
}

export default NumberGame;