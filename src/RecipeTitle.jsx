import './RecipeTitle.css';
import React from 'react';

// TODO: Create RecipeTitle component
function RecipeTitle(props) {
    return (
        <section>
            <h2>{ props.title }</h2>
            <h3 className={ props.feedback.rating <= 3.5 ? 'red' : 'green' }>
                Средняя оценка { props.feedback.rating } из { props.feedback.reviews } отзывов.
            </h3>
        </section>
    )
};

export default RecipeTitle;