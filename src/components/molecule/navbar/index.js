import styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTaxi} from '@fortawesome/free-solid-svg-icons';



const Navbar = (props) => {
  return (
    <div className={styles.navbar__outer}>
        <div className={styles.navbar__inner}>
            <div className={styles.navbar__inner__left}>
                <div>
                    <h2 style={{margin : "20px"}}>Auto Rickshaw Booking</h2>
                    
                </div>
            </div>
            <div className={styles.navbar__inner__right}>
                <a href="#User" className={styles.navbar__center__each}>
                    Users  <FontAwesomeIcon icon={faUser} size="lg" className='nav__icon' />
                </a>
                <a href="#Cabs" className={styles.navbar__center__each}>
                    Auto Booked <FontAwesomeIcon icon={faTaxi} size="lg" className='nav__icon' />
                </a>
            </div>
            <div className={styles.navbar__inner__right__mobile}>
                <div className={styles.navbar__center__each}>
                    <FontAwesomeIcon icon={faUser} size="lg" className='nav__icon' />
                </div>
                <div className={styles.navbar__center__each}>
                    <FontAwesomeIcon icon={faTaxi} size="lg" className='nav__icon' />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;