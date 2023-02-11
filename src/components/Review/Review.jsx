import React from 'react';
import styles from './Review.module.scss';
import {
    StarFilled,
    LikeFilled,
    DislikeFilled
} from '@ant-design/icons'

const Review = () => {
    return (
        <div className={styles.review}>

            <div className={styles.ratings_}>
                <div className={styles.stars}>
                    <small>5</small>
                    <StarFilled className={styles.icon} />
                </div>
                <span>Hightly recommended</span>
            </div>

            <div className={styles.message}>
                <p>Mobile is good but speed is less Battya is good Mobile display is good Camera is a bit good</p>
            </div>

            <div className={styles.details}>
                <p>Flipkart Customer Certified Buyer 5 months ago</p>
                <div className={styles.actions}>
                    <button>
                        <span>110</span><LikeFilled className={styles.icon} />
                    </button>
                    <button>
                        <span>900</span><DislikeFilled className={styles.icon} />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Review