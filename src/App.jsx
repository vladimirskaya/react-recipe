import './index.css'
import React, { useEffect, useState } from 'react';
import RecipeTitle from './RecipeTitle'
import IngredientList from './IngredientList'
import Steps from './Steps'
import Comment from './Comment';

function App() {
    const initialRecipe = {
        title: 'Картофельное пюре',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 картофелины, нарезанные напополам', prepared: false },
            { name: '4 столовые ложки сливочного масла', prepared: false },
            { name: '1/8 чашки сливок', prepared: false },
            { name: 'Соль', prepared: false },
            { name: 'Перец', prepared: false },
        ],
        steps: [
            {name: "Добавьте нарезанный картофель в кастрюлю с соленой водой.", prepared: false},
            {name: "Вскипятите воду в кастрюле.", prepared: false},
            {name: "Отварите картофель до готовности (около 15–20 минут).", prepared: false},
            {name: "Очистите картофель.", prepared: false},
            {name: "Поместите картофель обратно в кастрюлю.", prepared: false},
            {name: "Добавьте масло, сливки, соль и перец по вкусу.", prepared: false},
            {name: "Разомните картофель.", prepared: false},
            {name: "Добавьте специи, масло и сливки по желанию.", prepared: false}
        ]
    };

    // TODO: Create recipe state
    const [ recipe, setRecipe ] = useState(initialRecipe);

    // TODO: Create ingredientClick event listener
    function itemClick(index, obj) {
        const updatedRecipe = { ... recipe };
        updatedRecipe[obj][index].prepared = !updatedRecipe[obj][index].prepared; 
        setRecipe(updatedRecipe);
    }
    
    // TODO: Add new state property
    // TODO: Add the effect hook
    const [ prepared, setPrepared ] = useState(false);
    useEffect( () => {
        // setPrepared(recipe.ingredients.every(i => i.prepared));
        if ( recipe.ingredients.every(i => i.prepared) && recipe.steps.every(i => i.prepared) ) {
            setPrepared(true)
        }   
    }, [recipe]);

    return (
        <article>
            <h1>Книга рецептов</h1>

            {/* TODO: Pass recipe metadata to RecipeTitle */}
            <RecipeTitle title={recipe.title} feedback={recipe.feedback} />

            <Comment />

            {/* TODO: Pass ingredients and event listener to IngredientList */}
            <IngredientList ingredients={recipe.ingredients} onClick={ itemClick } />

            {/* TODO: Add Steps component */}
            <Steps steps={recipe.steps} onClick={ itemClick } />


            {/* TODO: Add the  work display */}
            { prepared ? <h2>Прекрасная работа!</h2> : <h2>Продолжайте, у Вас все получится!</h2>}
        </article>
    )
}

export default App;
