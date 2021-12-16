import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import service from "../RecipeGrid/service";
import Navbar from "../Navbar";

const RecipeScreen = () => {
    const params = useParams();
    let id = params.recipeId;

    const [isFetchLoading, setFetchLoading] = useState(false);

    const [meal, setMeal] = useState([]);
    const fetchMeals = async () => {
        console.log("Fetching Meals");
        setFetchLoading(true);
        await service.findMealById(id)
            .then(response => {
                setMeal(response?.meals[0]);
                setFetchLoading(false);
            });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchMeals();
    }, []);

    console.log(meal);

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className="stretch-to-bottom">
            <Navbar active={`recipes`}/>
            <img className={'fixed-background-image'}
                 src={'https://thumbs.dreamstime.com/b/modern-kitchen-countertop-domestic-culinary-utensils-home-healthy-cooking-concept-banner-fresh-clean-vegetables-being-176391172.jpg'}/>
            <div className="container stretch-to-bottom">
                <div className={'row'}>
                    <div className={'col-2'}></div>
                    <div className={'col-8 white-background'}>
                        { !isFetchLoading ?
                            <>
                                <div className={'container'}>
                                    <div className={'row mt-3 mb-3'}>
                                        <h1 className={'recipe-title'}>{meal?.name}</h1>
                                    </div>
                                </div>
                                <div className={'ignore-gutters mb-4'}>
                                    <img className={'recipe-profile-image'} src={meal?.profileImage}/>
                                </div>
                                <div className={'container mb-4'}>
                                    <div className={'row'}>
                                        <div className={'col-3'}>
                                            <p><b>Prep Time:</b></p>
                                        </div>
                                        <div className={'col-9'}>
                                            <p>{meal?.prepTime} Minutes</p>
                                        </div>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-3'}>
                                            <p><b>Cook Time:</b></p>
                                        </div>
                                        <div className={'col-9'}>
                                            <p>{meal?.cookTime} Minutes</p>
                                        </div>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-3'}>
                                            <p><b>Servings:</b></p>
                                        </div>
                                        <div className={'col-9'}>
                                            <p>{meal?.servings}</p>
                                        </div>
                                    </div>
                                    {meal?.calories > 0 && <div className={'row'}>
                                        <div className={'col-3'}>
                                            <p><b>Calories:</b></p>
                                        </div>
                                        <div className={'col-9'}>
                                            <p>{meal?.calories} kcal <i className={'small-font'}>per serving</i></p>
                                        </div>
                                    </div>}
                                    <div className={'row'}>
                                        <div className={'col-3'}>
                                            <p><b>Description:</b></p>
                                        </div>
                                        <div className={'col-9'}>
                                            <p>{meal?.description}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className={'row'}>
                                        <div className={'col-3'}>
                                            <p><b>Ingredients:</b></p>
                                        </div>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-1'}></div>
                                        <div className={'col-10'}>
                                            {meal.ingredients?.map(ingredient =>
                                                <>
                                                    <div className={'row mb-2'}>
                                                        <div className={'col-2'}></div>
                                                        <div className={'col-4'}>
                                                            <b>{ingredient?.measureQuantity} {ingredient.measureUnit}</b>
                                                        </div>
                                                        <div className={'col-6'}>
                                                            {ingredient?.name}
                                                            {ingredient?.count > 1 && <span><i> x {ingredient?.count} Count</i></span>}
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className={'row'}>
                                        <div className={'col-3'}>
                                            <p><b>Instructions:</b></p>
                                        </div>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-12'}>
                                            {meal.instructions?.map(step =>
                                                <div className={'row'}>
                                                    <div className={'col-1'}>
                                                        <b>{step.sequence}.</b>
                                                    </div>
                                                    <div className={'col-11'}>
                                                        <p>{step.description}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                            : <div className={'vh-100'}>
                                <div className={'container'}>
                                    <div className={'row mt-3 mb-3'}>
                                        <h1 className={'recipe-title'}>Loading ...</h1>
                                    </div>
                                </div>
                                <div className={'ignore-gutters mb-4'}>
                                    <div className={'recipe-profile-image'} src={meal?.profileImage}/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeScreen;
