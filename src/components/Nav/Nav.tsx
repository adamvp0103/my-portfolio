import { Link } from 'react-router';
import styles from './Nav.module.css';
import { FaCode, FaEnvelope, FaHome } from 'react-icons/fa';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        <FaHome />
      </Link>
      <Link className={styles.link} to="/projects">
        <FaCode />
      </Link>
      <Link className={styles.link} to="/contact">
        <FaEnvelope />
      </Link>
    </nav>
  );
}
