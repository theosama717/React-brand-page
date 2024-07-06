import styles from './Hero.module.css'

import HeroImage from '../assets/hero-image.png'
import FlipCartLogo from '../assets/flipkart.png'
import AmazonLogo from '../assets/amazon.png'

const Hero = () => {
    return (
        <div className='container'>
            <div className={styles.columnContainer}>
                <div className={`${styles.col1} ${styles.firstCol}`}>
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p className={styles.text}>YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className={styles.buttons}>
                        <button className='btn'>Shop Now</button>
                        <button className={styles.btnWhite}>Category</button>
                    </div>
                    <p className={styles.smallP}>
                        Also Available on
                    </p>
                    <div className={styles.smallLogos}>
                        <div className={styles.smallLogo}>
                            <img src={FlipCartLogo} alt="flipcart-logo" />
                        </div>
                        <div className={styles.smallLogo}>
                            <img src={AmazonLogo} alt="amazon-logo" />
                        </div>
                    </div>
                </div>
                <div className={styles.col1}>
                    <div className={styles.heroImg}>
                        <img src={HeroImage} alt="hero-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero