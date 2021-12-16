import React from "react";
import './index.css';
import {Link, useParams} from "react-router-dom";
import formatMealCardDate from "../../util/DateFormatUtil";

const RecipeCard = ({
                        recipeInfo = {
                            mealId: '12345',
                            mealName: 'Mock Recipe',
                            mealImageUrl: '/images/food.jpg',
                            creatorName: 'Mock User',
                            createDate: '01/01/2022',
                        }
                    }) => {

    const defaultImageUrl = '/images/food.jpg';

    return (
        <div className={'recipe-card-box'}>
            <Link to={`/recipes/${recipeInfo?.mealId}`} className="link-no-format">
                <div className={'card recipe-card mb-4'}>
                    <img className={'card-img-top card-img-border'}
                         src={recipeInfo?.mealImageUrl === null ? defaultImageUrl : recipeInfo.mealImageUrl}/>
                    <div className={'card-body'}>
                        <h5 className='bold-header'>{recipeInfo?.mealName}</h5>
                        <hr/>
                        <span><b>Created by: </b>{recipeInfo?.creatorName}</span><br/>
                        <span><b>Posted: </b>{formatMealCardDate(recipeInfo?.createDate)}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RecipeCard;
