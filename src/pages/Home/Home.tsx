import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sharedStyles from '../../shared/shared.module.css';
import styles from './Home.module.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div>
      <div className={sharedStyles.header}>
        {/* TODO: Replace this div with an actual profile image */}
        <div className={styles.image}></div>
        <span className={styles.name}>Adam Parks</span>
        <span className={styles.subtitle}>Front-End Web Developer</span>
        {/* TODO: Implement download resume */}
        <button className={styles.button}>
          <FontAwesomeIcon className={sharedStyles.icon} icon={faDownload} />
          &nbsp;&nbsp;Download Resume
        </button>
      </div>
      <div className={sharedStyles.page}>
        <section className={sharedStyles.section}>
          <h2 className={sharedStyles.heading}>About Me</h2>
          {/* TODO: Replace lorem with actual content */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            blanditiis optio ipsum earum aliquam minus molestias dignissimos,
            ex, officiis iste repellat tempora sequi recusandae ratione sit
            illum pariatur ad facilis veritatis praesentium libero. Doloremque
            molestias minus cumque consectetur, quisquam incidunt similique!
            Repellat nisi repellendus ut? Nulla fugiat atque omnis placeat
            repellendus possimus, facilis non eum reiciendis voluptates laborum?
            Totam, perspiciatis. Ex aperiam deleniti placeat iusto aliquid
            commodi temporibus non quia itaque quasi aut rem eius, saepe fuga
            eligendi incidunt vitae excepturi beatae, assumenda laborum iure.
            Maxime sequi fuga ad itaque quas nesciunt neque porro quaerat
            laboriosam natus dolorem, suscipit iure.
          </p>
        </section>

        <section className={sharedStyles.section}>
          <h2 className={sharedStyles.heading}>Education</h2>
          {/* TODO: Replace lorem with actual content */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            blanditiis optio ipsum earum aliquam minus molestias dignissimos,
            ex, officiis iste repellat tempora sequi recusandae ratione sit
            illum pariatur ad facilis veritatis praesentium libero. Doloremque
            molestias minus cumque consectetur, quisquam incidunt similique!
            Repellat nisi repellendus ut? Nulla fugiat atque omnis placeat
            repellendus possimus, facilis non eum reiciendis voluptates laborum?
            Totam, perspiciatis. Ex aperiam deleniti placeat iusto aliquid
            commodi temporibus non quia itaque quasi aut rem eius, saepe fuga
            eligendi incidunt vitae excepturi beatae, assumenda laborum iure.
            Maxime sequi fuga ad itaque quas nesciunt neque porro quaerat
            laboriosam natus dolorem, suscipit iure.
          </p>
        </section>

        <section className={sharedStyles.section}>
          <h2 className={sharedStyles.heading}>Skills</h2>
          {/* TODO: Replace lorem with actual content */}
          <ul className={sharedStyles.list}>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
