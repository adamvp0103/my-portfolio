import sharedStyles from '../shared/shared.module.css';

export default function Contact() {
  return (
    <div className={sharedStyles.page}>
      <h1>Contact</h1>

      {/* TODO: Replace lorem with thank you message */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, saepe!
      </p>

      {/* TODO: Implement links */}
      <a>LinkedIn</a>
      <br />
      <a>GitHub</a>
      <br />
      <a href="mailto:adamvp0103@gmail.com?subject=Employment%20Opportunity">
        Email
      </a>
    </div>
  );
}
