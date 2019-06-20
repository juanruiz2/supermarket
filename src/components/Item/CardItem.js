import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const CardItem = ({
  name,
  img,
  price,
  stock,
}) => {
  return (
    <div>
      <Card>
        <CardImg top width="20%" src={img} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{price}</CardSubtitle>
          <CardText>{stock}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

CardItem.propType = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
}

export default CardItem;