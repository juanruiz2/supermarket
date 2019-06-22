import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

export default class Example extends React.Component {
    render() {
      return (
        <Form>
            <Row form>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleText">Name</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleText">Price</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="exampleSelectMulti">Qty</Label>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
                <Button>Save</Button>
        </Form>
            
                



              )
      }
    }