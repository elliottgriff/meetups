import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>react meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">all meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">new meetups</Link>
          </li>
          <li>
            <Link to="/favorites">favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
