import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import NavBar from './Global/Header';
import Footer from './Global/Footer';
import Body from './Global/Body';

const setYear = () => new Date().getFullYear();

const App = ({children}) => (
  <Fragment>
    <NavBar />
    <Body content={children} />
    <Footer year={setYear()} />
  </Fragment>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
}

export default App;
