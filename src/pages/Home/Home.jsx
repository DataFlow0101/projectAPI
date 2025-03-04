import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktails } from '../../Store/redux/info';
import './Home.css'
import Block1 from '../../components/secton/Block1/Block1';
import Block2 from '../../components/secton/Block2/Block2';
import Block3 from '../../components/secton/Block3/Block3';
import { Link } from 'react-router';

const Home = () => { 
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.cocktails || {});

    useEffect(() => {
        dispatch(fetchCocktails());
    }, [dispatch]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p style={{ color: "white" }}>Ошибка: {error}</p>;

    return (
        <div>
        <Block1/>
        <Block2/>
        <div className='about'>
            {Array.isArray(data) && data.length > 0 ? (
                data.map((drink) => (
                    <div key={drink.idDrink}>
                        {drink.strDrinkThumb && (
                            <Link to={`coctailInfo/${drink.idDrink}`}>
                            <img
                                src={drink.strDrinkThumb}
                                alt={drink.strDrink}
                                className="imghut"
                                />
                                </Link>
                        )}

                    </div>
                ))
            ) : (
                <p>Данные не найдены</p>
            )}
            </div>
            <Block3/>
        </div>
    );
}

export default Home;
