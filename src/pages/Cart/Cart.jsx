import React, { useState } from 'react';
import CartItem from '../../components/CartItem/CartItem';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import ProductSlides from '../../components/ProductSlides/ProductSlides';
import styles from './Cart.module.scss';


const Cart = () => {
    const [isEmptyCart] = useState(false);

    if (isEmptyCart) return <EmptyCart />
    return (
        <div className={`${styles.cart}`}>
            <div className={`${styles.cart_wrapper}`}>
                <div className={styles.cart_details}>
                    <div className={styles.address}>
                        <p>Deliver to : <span>New Delhi -  110065</span></p>
                        <button>Change</button>
                    </div>
                    <div className={styles.cart_items}>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className={styles.place_order_section}>
                        <button>place order</button>
                    </div>
                </div>

                <div className={styles.cart_overview}>
                    <div className={styles.cart_overview_head}>
                        <span>price details</span>
                    </div>
                    <div className={styles.cart_overview_wrapper}>
                        <div className={styles.price}>
                            <p>Price (4 items)</p>
                            <span>₹ 4000</span>
                        </div>
                        <div className={styles.price}>
                            <p>Discount</p>
                            <span className={styles.discount}>- ₹ 2100</span>
                        </div>
                        <div className={styles.price}>
                            <p>Delivery Charges</p>
                            <span>₹ 70</span>
                        </div>

                        <div className={`${styles.price} ${styles.total_cart}`}>
                            <p>Total</p>
                            <span>₹ 1000</span>
                        </div>

                        <div className={styles.price}>
                            <b>You will save ₹2,622 on this order</b>
                        </div>
                    </div>
                </div>
            </div>
            <ProductSlides heading='Frequent bought products' />
        </div>
    )
}

export default Cart