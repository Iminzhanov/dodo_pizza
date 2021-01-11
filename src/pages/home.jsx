import React from 'react';
import PizzaItem from '../componets/PizzaItem'
import sort from '../componets/sort'
import Categories from '../componets/Categories'

const Home = () => {
    const [pizzas, setPizzas] = React.useState([])

    React.useEffect(() =>{
        fetch('http://localhost:300/db.json')
        .then(Response => Response.json())
        .then(({pizzas}) =>setPizzas(pizzas))
    },[])

    return (
        <div className='content'>
            <div className='container'>
                <div className='content__top'>
                    <Categories />
                    <Sort />
                </div>
                <h2 className='content__title'>Все пццы</h2>
                <div className='content__items'>
                    {pizzas.map(item => {
                        return <PizzaItem {...item}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;