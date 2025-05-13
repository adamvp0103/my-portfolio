import { Link } from 'react-router';

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
