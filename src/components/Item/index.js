import React from 'react';
import { Row, Col } from 'reactstrap';
import useGetData from '../../hook/useGetData';
import CardItem from './CardItem';

const API = 'http://localhost:8000/items';

const Item = () => {
  const data = useGetData(API);
  console.log(data);
  return data.length === 0 ? <div> Loading ...</div> : (
    <div>
      <Row>
        {
          data.items.map( (item) => (
            <Col sm="3">
              <CardItem 
                name={item.name}
                price={item.price}
                img='https://picsum.photos/200/300/?blur'
                stock={item.stock}
              />
            </Col>
          ))
        }
      </Row>
    </div>
  );
}

export default Item;