import React, {useEffect, useState} from "react";
import './index.css';
import RecipeCard from "./RecipeCard";
import service from './service';

const RecipeGrid = () => {

    const [isFetchLoading, setFetchLoading] = useState(false);
    const [meals, setMeals] = useState([]);
    const fetchMeals = async () => {
        setFetchLoading(true);
        console.log("Fetching Meals");
        await service.findAllMeals()
            .then(response => {
                setMeals(response?.mealDisplays);
                setFetchLoading(false);
            });
    }
    useEffect(() => {
        fetchMeals();
    }, []);
    return (
        <>
            <div className={'row d-flex'}>
                {!isFetchLoading ? meals?.map(meal =>
                    <>
                        <RecipeCard recipeInfo={meal}/>
                    </>
                ) : <p>Loading...</p>}
            </div>
        </>
    )
}

export default RecipeGrid