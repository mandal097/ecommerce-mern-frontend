import React from 'react';
import styles from './Navbar.module.scss'
import {
    LoginOutlined,
    LogoutOutlined,
    QqOutlined,
    SearchOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const user = true;
    const navigate = useNavigate();

    return (
        <nav>
            <div className={styles.navbar}>
                <div className={styles.logo}  onClick={()=>navigate('/')}>
                    <QqOutlined className={styles.icon} />
                    <span>Shopname</span>
                </div>
                <div className={styles.middle}>
                    <SearchOutlined className={styles.icon} />
                    <input type="text" placeholder='what you are looking for...' />
                </div>
                <div className={styles.right}>

                    {
                        user
                            ? <button className={styles.auth_btn} >
                                <LogoutOutlined className={styles.icon} /><span>Logout</span>
                            </button>
                            : <button className={styles.auth_btn}>
                                <LoginOutlined className={styles.icon} /><span>Login</span>
                            </button>

                    }

                    <button ><ShoppingCartOutlined className={styles.icon} onClick={()=>navigate('/cart')}/></button>
                    <button  onClick={()=>navigate('/my-profile')}>
                        <img src={user?.profilePic ? user.profilePic : 'https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?size=338&ext=jpg&ga=GA1.1.148670595.1674319787'} alt="" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar