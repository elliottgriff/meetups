import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
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
            <Link to="/favorites">
              favorites
              <span className={classes.badge}>{favoritesCtx.totalFavs}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
