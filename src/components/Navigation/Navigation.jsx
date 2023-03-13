import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.scss';

function Navigation(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav>
      <NavLink to="/" className={styles.navlink}>
        Popular Films
      </NavLink>
      <NavLink to="/searchfilms" className={styles.navlink}>
        Search Films
      </NavLink>
    </nav>
  );
}

Navigation.propTypes = {};

export default Navigation;
