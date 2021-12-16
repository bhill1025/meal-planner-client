import React, {useEffect} from "react";
import './index.css';
import RecipeGrid from "../RecipeGrid";
import Navbar from "../Navbar";

// const selectAllFriends = (state) => state.friend;

const Home = () => {

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(() => {
            window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <Navbar active='home'/>
            <div className={'banner-container mb-4'}>
                <img className={'banner-image'}
                     src={'https://thumbs.dreamstime.com/b/modern-kitchen-countertop-domestic-culinary-utensils-home-healthy-cooking-concept-banner-fresh-clean-vegetables-being-176391172.jpg'}/>
                <div className={'banner-overlay banner-text'}>
                    <span className={'banner-text-inner'}>Meal Planner App v0.1</span>
                </div>
            </div>

            <div className={'container '}>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <img className={'placeholder-image mb-5'}
                             src={'https://media.self.com/photos/622912847b959736301bfb91/4:3/w_960,c_limit/GettyImages-1301412050.jpg'}/>
                    </div>
                    <div className={'col-8'}>
                        <div className={'col-12'}>
                            <RecipeGrid/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;