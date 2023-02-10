import React, { useEffect, useRef } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import styles from './Categories.module.scss';

import { categories } from './data';


const Category = ({ ele, type }) => {
    const navigate = useNavigate();

    const navigateFunction = (params) => {
        const links = params.replace(/ &/g, '');
        navigate({
            pathname: '/category/',
            search: `${createSearchParams({ 'q': links })}`
        })
    }

    return (
        <div
            className={styles.cat_card}
            onClick={() => navigateFunction(ele?.cat)}>
            {type === 'shophome' && <img src={`/assets/images/${ele?.img}`} alt="" />}
            <span>{ele.cat}</span>
        </div>
    )
}


const Categories = ({ type }) => {
    // const [scroll, setScroll] = useState(false)
    const ref = useRef(null);
    // console.log(ref.current)
    useEffect(() => {
        var prevScrollPosition = window.pageYOffset;
        const handler = () => {
            var currentScrollPosition = window.pageYOffset;
            if (type === 'categories_page') {
                if (prevScrollPosition > currentScrollPosition) {
                    ref.current.style.position = 'sticky'
                    ref.current.style.top = '55px'
                    ref.current.style.left = '0'
                } else {
                    ref.current.style.position = 'sticky'
                    ref.current.style.top = '-55px'
                    ref.current.style.left = '0'
                }
            }
            prevScrollPosition = currentScrollPosition;
        }
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [type])

    return (
        <div
            ref={ref}
            className={styles.categories}
            style={{
                height: (type === 'categories_page' || type === 'product_page') && 'auto',
                padding: (type === 'categories_page' || type === 'product_page') && '1rem 0',
            }}>
            {
                categories?.map(ele => (
                    <Category key={ele.id} ele={ele} type={type} />
                ))
            }
        </div>
    )
}

export default Categories