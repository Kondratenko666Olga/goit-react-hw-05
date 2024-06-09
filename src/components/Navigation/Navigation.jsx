import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'

const Navigation = () => (
  <nav className={styles.navigateList} >
    <NavLink className={styles.navigate} to="/">Home</NavLink>
    <NavLink className={styles.navigate} to="/movies">Movies</NavLink>
  </nav>
);

export default Navigation;