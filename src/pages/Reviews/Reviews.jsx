import React from 'react';
import styles from './Reviews.module.scss'; import {
    QqOutlined,
    StarFilled
} from '@ant-design/icons';
import Review from '../../components/Review/Review';
import Ratings from '../../components/Ratings/Ratings';

const Reviews = () => {
    return (
        <div className={styles.reviews}>
            <div className={styles.left}>
                <div className={styles.img}>
                    <img src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/2/p/g/-original-imagkn6dk4pbcf4d.jpeg?q=70" alt="" />
                </div>
                <h1>SAMSUNG GALAXY M13 (Aqua Green, 64 GB)</h1>
                <div className={styles.ratings}>
                    <div className={styles.stars}>
                        <span>4.3</span>
                        <StarFilled className={styles.icon} />
                    </div>
                    <small className={styles.counts}>9,995 ratings and 508 reviews</small>
                    <div className={styles.logo}>
                        <QqOutlined className={styles.icon} />
                    </div>
                </div>
                <span className={styles.price}>₹ 10000</span>
            </div>
            <div className={styles.right}>
                <div className={styles.name}>
                    <p>realme NEO 80 cm (32 inch) HD Ready LED Smart Linux TV Reviews</p>
                </div>
                <Ratings width='50%' display='none' border='none' margin='0' />
                <div className={styles.all_reviews}>
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
        </div>
    )
}

export default Reviews