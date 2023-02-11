import React from 'react';
import Categories from '../../components/Categories/Categories';
import styles from './Category.module.scss';
import { useSearchParams } from 'react-router-dom'
import ProductList from '../../components/ProductList/ProductList';

const Category = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q');
    return (
        <div className={`${styles.category}`}>
            <Categories type='categories_page' />
            <div className={`${styles.wrapper}`}>
                <h1>{searchQuery.split(' ').join(' & ')}</h1>
                <div>
                    <ProductList />
                </div>
            </div>
        </div>
    )
}

export default Category