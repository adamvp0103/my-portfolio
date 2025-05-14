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
          {/* TODO: Replace lorem with thank you message */}
          <p className={styles.message}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            saepe!
          </p>
          <div className={styles.links}>
            {/* TODO: Implement links */}
            <a className={styles.link} href="#">
              <FontAwesomeIcon
                className={sharedStyles.icon}
                icon={faLinkedin}
              />
              &nbsp;&nbsp;LinkedIn
            </a>
            <a className={styles.link} href="#">
              <FontAwesomeIcon className={sharedStyles.icon} icon={faGithub} />
              &nbsp;&nbsp;GitHub
            </a>
            <a
              className={styles.link}
              href="mailto:adamvp0103@gmail.com?subject=Employment%20Opportunity"
            >
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
