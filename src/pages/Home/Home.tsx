import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sharedStyles from '../../shared/shared.module.css';
import styles from './Home.module.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import profile from '../../assets/profile.jpeg';

export default function Home() {
  return (
    <div>
      <div className={sharedStyles.header}>
        {/* TODO: Replace this div with an actual profile image */}
        <div className={styles.profileAndButton}>
          <div className={styles.imageAndText}>
            <img
              className={styles.image}
              src={profile}
              alt="Adam Parks profile image"
            />
            <div className={styles.nameAndSubtitle}>
              <span className={styles.name}>Adam Parks</span>
              <span className={styles.subtitle}>Front-End Web Developer</span>
            </div>
          </div>
          {/* TODO: Implement download resume */}
          <button className={styles.button}>
            <FontAwesomeIcon className={sharedStyles.icon} icon={faDownload} />
            &nbsp;&nbsp;Download Resume
          </button>
        </div>
      </div>
      <div className={sharedStyles.page}>
        <section className={sharedStyles.section}>
          <h2 className={sharedStyles.heading}>About Me</h2>
          <p>
            My name is Adam Parks, and I'm a computer science graduate
            specializing in front-end web development. I'm from Fallston,
            Maryland and have earned my degree from{' '}
            <a href="https://www.towson.edu" target="_blank">
              Towson University
            </a>
            . My ability to think procedurally and my appreciation for visual
            design have made me fall in love with front-end development, and I
            am always looking to put my passion to good use! Whether you're a
            company looking to add a driven developer to your team or an
            individual looking for website guidance, I welcome you to take a
            look at my work and contact me with any questions or opportunities.
          </p>
        </section>

        <section className={sharedStyles.section}>
          <h2 className={sharedStyles.heading}>Education</h2>
          <p style={{ marginBottom: '1rem' }}>
            I earned my Bachelor of Science in computer science from Towson
            University in May 2024. I made Dean's List the majority of my
            semesters there, and received high-quality instruction on the
            fundamentals of tech and how to think like a programmer. Here are
            some (but not all) of the courses I have taken:
          </p>
          <div className={styles.list}>
            <ul className={sharedStyles.list}>
              <li>Software Engineering</li>
              <li>Data Structures & Algorithm Analysis</li>
              <li>Software Quality Assurance & Testing</li>
              <li>Data Communications & Networking</li>
              <li>Introduction to Cybersecurity</li>
              <li>Mobile Application Development</li>
            </ul>
          </div>
        </section>

        <section className={sharedStyles.section}>
          <h2 className={sharedStyles.heading}>Skills</h2>
          <p style={{ marginBottom: '1rem' }}>
            Tech is a broad and rapidly growing field, so I am always happy and
            efficient with learning new technologies and frameworks. That said,
            here are some significant ones that I am already familiar with:
          </p>
          <div className={styles.list}>
            <ul className={sharedStyles.list}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Git</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>SQL</li>
              <li>Redux</li>
              <li>Sass</li>
              <li>CSS/Sass Modules</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>Python</li>
              <li>Java</li>
              <li>Swift</li>
              <li>Kotlin</li>
              <li>C++</li>
              <li>GitHub</li>
              <li>GitLab</li>
              <li>JSX</li>
              <li>ARIA</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
