import  { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktailsByLetter } from '../../Store/redux/inputSlice';
import './Inputinfo.css'

const Inputinfo = () => {
    const { letter } = useParams();
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.letterCocktails);

    useEffect(() => {
        dispatch(getCocktailsByLetter(letter));
    }, [dispatch, letter]);

    if (loading) return <p className="loading">Загрузка...</p>;
    if (error) return <p className="error">{error}</p>;


    return (
        <div className="contaienr">
            <div className="cocktail-grid">
                {list.map((drink) => (
                    <div key={drink.idDrink} className="cocktail-card">
                        <img src={drink.strDrinkThumb} alt={drink.strDrink}  className='imghjk'/>
                        <p className='name'>{drink.strDrink}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Inputinfo;