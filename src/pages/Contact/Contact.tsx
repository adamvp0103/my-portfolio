import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sharedStyles from '../../shared/shared.module.css';
import styles from './Contact.module.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <div>
      <div className={sharedStyles.header}>
        <h1>Contact</h1>
      </div>

      <div className={sharedStyles.page}>
        <div className={styles.messageAndLinks}>
          <p className={styles.message}>
            Thank you for visiting! Please use any of the links you see here to
            contact me with any questions or opportunities.
          </p>
          <div className={styles.links}>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/adam-parks-6825ab2bb/"
              target="_blank"
            >
              <FontAwesomeIcon
                className={sharedStyles.icon}
                icon={faLinkedin}
              />
              &nbsp;&nbsp;LinkedIn
            </a>
            <a
              className={styles.link}
              href="https://github.com/adamvp0103"
              target="_blank"
            >
              <FontAwesomeIcon className={sharedStyles.icon} icon={faGithub} />
              &nbsp;&nbsp;GitHub
            </a>
            <a className={styles.link} href="mailto:adamvp0103@gmail.com">
              <FontAwesomeIcon
                className={sharedStyles.icon}
                icon={faEnvelope}
              />
              &nbsp;&nbsp;Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
