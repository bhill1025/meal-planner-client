const URL = 'http://localhost:4000/meals';

const headers = {'content-type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}

export const findAllMeals = () =>
    fetch(`${URL}/displays`, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .catch(err => {
            console.log(err);
        });

export const findMealById = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .catch(err => {
            console.log(err);
        });

let exp = {
    findAllMeals, findMealById
}
export default exp;