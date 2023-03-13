import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NotFoundPage(props) {
  return (
    <span>
      This page doesn't exist <Link to="/">Go Home</Link>
    </span>
  );
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
