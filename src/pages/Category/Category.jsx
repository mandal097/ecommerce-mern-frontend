import React from 'react';
import Categories from '../../components/Categories/Categories';
import styles from './Category.module.scss';

const Category = () => {
    return (
        <div className={`${styles.category}`}>
            <Categories type='categories_page' />
            <div className={`${styles.wrapper}`}>
                <h1>Category</h1>
            </div>
        </div>
    )
}

export default Category