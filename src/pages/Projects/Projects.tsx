import sharedStyles from '../../shared/shared.module.css';
import styles from './Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPlay } from '@fortawesome/free-solid-svg-icons';
import taskManagerScreenshot from '../../assets/task-manager.png';
import transactionManagerScreenshot from '../../assets/transaction-manager.png';
import quickWeatherScreenshot from '../../assets/quick-weather.png';

export default function Projects() {
  return (
    <div>
      <div className={sharedStyles.header}>
        <h1>Projects</h1>
      </div>
      <div className={sharedStyles.page}>
        <section className={sharedStyles.section}>
          {/* TODO: Replace with actual project info */}
          <h2 className={sharedStyles.heading}>Task Manager</h2>
          <div className={styles.imageAndButtons}>
            <img
              className={styles.image}
              src={taskManagerScreenshot}
              alt="Task Manager project screenshot"
            />
            <div className={styles.doubleButton}>
              <a
                href="https://adamvp0103.github.io/task-manager/"
                target="_blank"
              >
                <FontAwesomeIcon className={sharedStyles.icon} icon={faPlay} />
                &nbsp;&nbsp;Demo
              </a>
              <a
                href="https://github.com/adamvp0103/task-manager.git"
                target="_blank"
              >
                <FontAwesomeIcon className={sharedStyles.icon} icon={faCode} />
                &nbsp;&nbsp;Code
              </a>
            </div>
          </div>
          <div className={styles.descriptionAndLists}>
            <p className={styles.description}>
              A simple to-do list style web app.
            </p>
            <div className={styles.doubleList}>
              <div>
                <h3>Features</h3>
                <ul className={sharedStyles.list}>
                  <li>Add tasks</li>
                  <li>View tasks</li>
                  <li>Complete tasks</li>
                  <li>Edit tasks</li>
                  <li>Delete tasks</li>
                  <li>Responsive layout</li>
                  <li>Data persistence</li>
                </ul>
              </div>
              <div>
                <h3>Tech</h3>
                <ul className={sharedStyles.list}>
                  <li>HTML</li>
                  <li>JSX</li>
                  <li>Sass</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Vite</li>
                  <li>Context API</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={sharedStyles.section}>
          {/* TODO: Replace with actual project info */}
          <h2 className={sharedStyles.heading}>Transaction Manager</h2>
          <div className={styles.imageAndButtons}>
            <img
              className={styles.image}
              src={transactionManagerScreenshot}
              alt="Transaction Manager project screenshot"
            />
            <div className={styles.doubleButton}>
              <a
                href="https://adamvp0103.github.io/transaction-manager/"
                target="_blank"
              >
                <FontAwesomeIcon className={sharedStyles.icon} icon={faPlay} />
                &nbsp;&nbsp;Demo
              </a>
              <a
                href="https://github.com/adamvp0103/transaction-manager.git"
                target="_blank"
              >
                <FontAwesomeIcon className={sharedStyles.icon} icon={faCode} />
                &nbsp;&nbsp;Code
              </a>
            </div>
          </div>
          <div className={styles.descriptionAndLists}>
            <p className={styles.description}>
              An easy-to-use transaction manager to keep track of and analyze
              your spending habits and income.
            </p>
            <div className={styles.doubleList}>
              <div>
                <h3>Features</h3>
                <ul className={sharedStyles.list}>
                  <li>Register account</li>
                  <li>Log in</li>
                  <li>Add transactions</li>
                  <li>View transactions</li>
                  <li>View statistics</li>
                  <li>Add categories</li>
                  <li>Log out</li>
                  <li>Reset account</li>
                  <li>Delete account</li>
                </ul>
              </div>
              <div>
                <h3>Tech</h3>
                <ul className={sharedStyles.list}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Sass Modules</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Vite</li>
                  <li>React Router</li>
                  <li>Redux</li>
                  <li>Chart.js</li>
                  <li>React Icons</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={sharedStyles.section}>
          {/* TODO: Replace with actual project info */}
          <h2 className={sharedStyles.heading}>Quick Weather</h2>
          <div className={styles.imageAndButtons}>
            <img
              className={styles.image}
              src={quickWeatherScreenshot}
              alt="Quick Weather project screenshot"
            />
            <div className={styles.doubleButton}>
              <a
                href="https://adamvp0103.github.io/quick-weather/"
                target="_blank"
              >
                <FontAwesomeIcon className={sharedStyles.icon} icon={faPlay} />
                &nbsp;&nbsp;Demo
              </a>
              <a
                href="https://github.com/adamvp0103/quick-weather.git"
                target="_blank"
              >
                <FontAwesomeIcon className={sharedStyles.icon} icon={faCode} />
                &nbsp;&nbsp;Code
              </a>
            </div>
          </div>
          <div className={styles.descriptionAndLists}>
            <p className={styles.description}>
              A quick way to check the current weather conditions in any
              specified city.
            </p>
            <div className={styles.doubleList}>
              <div>
                <h3>Features</h3>
                <ul className={sharedStyles.list}>
                  <li>Search cities</li>
                  <li>Get weather</li>
                  <li>View weather</li>
                </ul>
              </div>
              <div>
                <h3>Tech</h3>
                <ul className={sharedStyles.list}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Fetch API</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
