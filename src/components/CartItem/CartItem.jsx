import React, { useState } from 'react';
import styles from './CartItem.module.scss';
import {
    PlusOutlined,
    MinusOutlined,
    DeleteFilled
} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const CartItem = () => {
    const [count, setCount] = useState(1);

    const handleCount = (dir) => {
        if (dir === 'decrement') count < 0 ? setCount(1) : setCount(count => count - 1)
        if (dir === 'increment') count < 10 ? setCount(count => count + 1) : setCount(count => count)
    }
    return (
        <div className={styles.cart_item}>
            <div className={styles.cart_item_details}>
                <div className={styles.img}>
                    <img src="https://rukminim1.flixcart.com/image/612/612/kv9urgw0/shoe/t/h/b/7-new-9309-7-world-wear-footwear-black-original-imag87ndjqrzjg2m.jpeg?q=70" alt="item_image" />
                </div>
                <div className={styles.product_details}>
                    <Link to={`/product/hahahahaha`} className={styles.link}>realme Techlife Buds T100 with up to 28 Hours Playback & AI ENC for Calls Bluetooth Headset (Black, True Wireless)</Link>
                    <small>Size : 7,Black</small>
                    <div className={styles.price}>
                        <strike>3,499</strike>
                        <b>₹ 1079</b>
                        <span>69% off</span>
                    </div>
                </div>
                <div className={styles.delivery_details}>
                    <p>Delivery by 2 PM, Tomorrow</p>
                    <span>Free</span>
                    <strike>₹ 40</strike>
                </div>
            </div>
            <div className={styles.actions}>
                <div className={styles.quantity_controls}>
                    <button
                        disabled={count === 1 && true}
                        onClick={() => handleCount("decrement")}
                        className={`${styles.controls} ${count === 1 ? styles.controls_in_active : styles.controls_active}`}>
                        <MinusOutlined className={styles.icon} />
                    </button>
                    <div className={styles.count}>
                        <span>{count}</span>
                    </div>
                    <button
                        disabled={count === 10 && true}
                        onClick={() => handleCount("increment")}
                        className={`${styles.controls} ${count === 10 ? styles.controls_in_active : styles.controls_active}`}>
                        <PlusOutlined className={styles.icon} />
                    </button>
                </div>
                <div className={styles.remove}>
                    <button><DeleteFilled className={styles.icon}/> <span>Remove</span></button>
                </div>
            </div>

        </div>
    )
}

export default CartItem