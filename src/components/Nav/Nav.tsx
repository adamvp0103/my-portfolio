import { Link } from 'react-router';
import sharedStyles from '../../shared/shared.module.css';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <nav className={styles.nav} onClick={() => window.scrollTo({ top: 0 })}>
      <Link className={styles.link} to="/">
        <FontAwesomeIcon className={sharedStyles.icon} icon={faHouse} />
      </Link>
      <Link className={styles.link} to="/projects">
        <FontAwesomeIcon className={sharedStyles.icon} icon={faCode} />
      </Link>
      <Link className={styles.link} to="/contact">
        <FontAwesomeIcon className={sharedStyles.icon} icon={faEnvelope} />
      </Link>
    </nav>
  );
}
