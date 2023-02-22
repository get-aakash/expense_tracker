import React from 'react'
import { Form, Button, Col, Row, Container } from "react-bootstrap";

export default function Input() {
    return (
        <div className='inputField'>
            
            <Container>
                <Row>
                    <Col xs={3}>
                        <Form.Control placeholder="Enter your Transaction Here ..." />
                    </Col>
                    <Col xs={2}>
                        <Form.Control type="number" placeholder="Amount" />
                    </Col>
                    
                    <Col xs={2}>
                        <Form.Select aria-label="Default select example">
                            <option>Category</option>
                            <option value="1">Income</option>
                            <option value="2">Expense</option>
                        </Form.Select>
                    </Col>
                    <Col xs={2}>
                        <Button type="submit">Submit</Button>
                    </Col>

                </Row>

            </Container>

        </div>
    )
}
