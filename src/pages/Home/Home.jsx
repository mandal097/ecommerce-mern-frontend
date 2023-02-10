import React from 'react';
import Categories from '../../components/Categories/Categories';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={`${styles.home}`}>
            <Categories type='shophome'/>
            <h1>Home</h1>
        </div>
    )
}

export default Home