import React  from 'react';
import Proptypes from 'prop-types';

const Body = ({content}) => (
  <div>
    {content}
  </div>
);

Body.propTypes = {
  content: Proptypes.object.isRequired,
}

export default Body;
