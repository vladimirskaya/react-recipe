import React from 'react';

import './IngredientList.css';

const Steps = (props)=> {
    const steps = props.steps.map( (step, index) => {
        return(
            <li key={index} className={ step.prepared ? 'prepared' : '' }
                onClick={ () => props.onClick(index, "steps") } >
                {step.name}
            </li>
        )
    });

    return(
        <ol>
            { steps }
        </ol>
    )
}

export default Steps;