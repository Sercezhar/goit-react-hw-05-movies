import { NavLink } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.Nav}>
      <MdLocalMovies size="40" color="var(--header-item-color)" />
      <NavLink
        className={({ isActive }) =>
          isActive ? styles['Nav-link--active'] : styles['Nav-link']
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles['Nav-link--active'] : styles['Nav-link']
        }
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}
