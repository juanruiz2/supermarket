import React  from 'react';
import PropTypes from 'prop-types';

import './style.css'

const Footer = ({year}) => (
  <footer> 
    Juan Ruiz®  - {year}
  </footer>
);



Footer.propTypes = {
  year: PropTypes.number
}

export default Footer;
