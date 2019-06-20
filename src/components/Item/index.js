import React from 'react';
import { Row, Col } from 'reactstrap';

import CardItem from './CardItem';

import items from './items';

const Item = () => (
  <div>
    <Row>
      {
        items.map( (item) => (
          <Col sm="3">
            <CardItem 
              name={item.name}
              price={item.price}
              img={item.img}
              stock={item.stock}
            />
          </Col>
        ))
      }
    </Row>
  </div>
);

export default Item;