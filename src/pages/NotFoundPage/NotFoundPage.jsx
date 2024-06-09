import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => (
  <div className={styles.notFindElem}>
    <h1 className={styles.notFindTitle}>Page not found</h1>
    <Link className={styles.notFindLink} to="/">Go to Home</Link>
  </div>
);

export default NotFoundPage;
