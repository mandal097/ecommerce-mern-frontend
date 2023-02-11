import React from 'react';
import styles from './EmptyCart.module.scss';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.empty_cart}>
            <div className={styles.img}>
                <img src="/assets/images/empty_cart.png" alt="empty cart" />
            </div>
            <h1>Your cart is empty !</h1>
            <small>Add items to it now.</small>
            <button onClick={()=>navigate('/')}>Shop now</button>
        </div>
    )
}

export default EmptyCart