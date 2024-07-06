import styles from './Nav.module.css'
import Logo from '../assets/brand_logo.png'


const Nav = () => {
    return(
        <div>
            <nav className="container">
                <div className={styles.logo}>
                    <img src={Logo} alt="logo" />
                </div>

                <div className={styles.navToggle}>
                <i class="fa-solid fa-bars"></i>
                </div>


                <ul>
                    <a href="javascript:void(0)"><li>Menu</li></a>
                    <a href="javascript:void(0)"><li>Location</li></a>
                    <a href="javascript:void(0)"><li>About</li></a>
                    <a href="javascript:void(0)"><li>Contact</li></a>
                </ul>

                <button className="btn">Login</button>
            </nav>
        </div>
    )
}

export default Nav 