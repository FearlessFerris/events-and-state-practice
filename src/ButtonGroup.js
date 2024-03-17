import React from 'react';

const ButtonGroup = () => {

    const whichButton = ( e ) => {
        const color = e.target.innerText;
        console.log( `Something was clicked: ${ color }` );
        return color;
    }

    return( 
        <div>
            <button onClick = { whichButton } > One </button>            
            <button onClick = { whichButton }> Two </button>
            <button onClick = { whichButton }> Three </button>
        </div>
    )
}

const ButtonGroupTwo = () => {

    const whichButtonTwo = ( number ) => {
        console.log( number );
        return number;
    }
    
    return( 
        <div> 
            <button onClick = { () => whichButtonTwo( 'One' ) }> One </button>
            <button onClick = { () => whichButtonTwo( 'Two' ) }> Two </button>
            <button onClick = { () => whichButtonTwo( 'Three' ) }> Three </button>
        </div>
    )
}


export { ButtonGroup, ButtonGroupTwo };