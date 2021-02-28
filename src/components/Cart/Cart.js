import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((sum, country) => sum + country.population, 0);
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }

    return (
        <div>
            <h2>Country Added on Cart: {cart.length}</h2>
            <h3>ALL SELECTED Countries TOTAL POPULATION: {total}</h3>
        </div>
    );
};

export default Cart;