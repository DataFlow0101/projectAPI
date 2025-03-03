// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCocktailsByLetter } from '../../Store/redux/getInfo';

// const About = () => {
//     const dispatch = useDispatch();
//     const { list, loading, error } = useSelector((state) => state.letterCocktails); 

//     useEffect(() => {
//         dispatch(getCocktailsByLetter());
//     }, [dispatch]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;
//     if (!list || list.length === 0) return <p>No cocktails found.</p>; 

//     return (
//         <div>
//             {list.map((cocktail) => ( 
//                 <div key={cocktail.idDrink}>
//                     <h2>{cocktail.strDrink}</h2>
//                     <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="200" />
//                     <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>

//                     <h3>Ingredients:</h3>
//                     <ul>
//                         {Array.from({ length: 15 }).map((_, index) => {
//                             const ingredient = cocktail[`strIngredient${index + 1}`];
//                             const measure = cocktail[`strMeasure${index + 1}`];

//                             return ingredient ? (
//                                 <li key={index}>
//                                     {measure ? `${measure} ` : ""}{ingredient}
//                                 </li>
//                             ) : null;
//                         })}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default About;