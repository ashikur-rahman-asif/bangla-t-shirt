import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h2>cart summary:{cart.length}</h2>
            {
                cart.map((item) => <p key={item._id}>{item.name} <button onClick={()=>handleRemoveFromCart(item._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Cart;