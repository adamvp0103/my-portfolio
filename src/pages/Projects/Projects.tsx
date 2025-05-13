import { FaCode, FaPlay } from 'react-icons/fa';
import sharedStyles from '../../shared/shared.module.css';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <div>
      <div className={sharedStyles.header}>
        <h1>Projects</h1>
      </div>

      <div className={sharedStyles.page}>
        <section className={sharedStyles.section}>
          {/* TODO: Replace with actual project info */}
          <div className={styles.image}></div>
          <h2 className={sharedStyles.heading}>Project 1</h2>
          <div className={styles.doubleButton}>
            <button>
              <FaPlay className={sharedStyles.icon} />
              &nbsp;&nbsp;Demo
            </button>
            <button>
              <FaCode className={sharedStyles.icon} />
              &nbsp;&nbsp;Code
            </button>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quis
            error laboriosam ratione corrupti perferendis nam explicabo deserunt
            non architecto perspiciatis vero sed quas veritatis ullam,
            praesentium eligendi magni neque!
          </p>
          <div className={styles.doubleList}>
            <div>
              <h3>Features</h3>
              <ul className={sharedStyles.list}>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
            <div>
              <h3>Tech</h3>
              <ul className={sharedStyles.list}>
                <li>Tech 1</li>
                <li>Tech 2</li>
                <li>Tech 3</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={sharedStyles.section}>
          {/* TODO: Replace with actual project info */}
          <div className={styles.image}></div>
          <h2 className={sharedStyles.heading}>Project 2</h2>
          <div className={styles.doubleButton}>
            <button>
              <FaPlay className={sharedStyles.icon} />
              &nbsp;&nbsp;Demo
            </button>
            <button>
              <FaCode className={sharedStyles.icon} />
              &nbsp;&nbsp;Code
            </button>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quis
            error laboriosam ratione corrupti perferendis nam explicabo deserunt
            non architecto perspiciatis vero sed quas veritatis ullam,
            praesentium eligendi magni neque!
          </p>
          <div className={styles.doubleList}>
            <div>
              <h3>Features</h3>
              <ul className={sharedStyles.list}>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
            <div>
              <h3>Tech</h3>
              <ul className={sharedStyles.list}>
                <li>Tech 1</li>
                <li>Tech 2</li>
                <li>Tech 3</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={sharedStyles.section}>
          {/* TODO: Replace with actual project info */}
          <div className={styles.image}></div>
          <h2 className={sharedStyles.heading}>Project 3</h2>
          <div className={styles.doubleButton}>
            <button>
              <FaPlay className={sharedStyles.icon} />
              &nbsp;&nbsp;Demo
            </button>
            <button>
              <FaCode className={sharedStyles.icon} />
              &nbsp;&nbsp;Code
            </button>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quis
            error laboriosam ratione corrupti perferendis nam explicabo deserunt
            non architecto perspiciatis vero sed quas veritatis ullam,
            praesentium eligendi magni neque!
          </p>
          <div className={styles.doubleList}>
            <div>
              <h3>Features</h3>
              <ul className={sharedStyles.list}>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
            <div>
              <h3>Tech</h3>
              <ul className={sharedStyles.list}>
                <li>Tech 1</li>
                <li>Tech 2</li>
                <li>Tech 3</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
