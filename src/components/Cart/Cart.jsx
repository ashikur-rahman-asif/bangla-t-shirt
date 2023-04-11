import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message= <p>Please add some product</p>
    }
    return (
        <div>
            <h2>cart summary:{cart.length}</h2>
                {cart.length > 2 ? <span>Aro kino </span> : <span>fokira</span>}
            {message}
            {
                cart.map((item) => <p key={item._id}>{item.name} <button onClick={()=>handleRemoveFromCart(item._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Cart;