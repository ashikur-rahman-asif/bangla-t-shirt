import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData()
    const [cart, setCart] = useState([])
    const handleAddtoCart = tShirt => {
        
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
            {
                tShirts.map(tShirt => <Tshirt
                    key={tShirt._id}
                    tShirt={tShirt}
                    handleAddtoCart={handleAddtoCart}
                ></Tshirt>)
            }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;