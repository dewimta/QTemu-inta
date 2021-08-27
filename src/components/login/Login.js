import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Col, Row } from 'react-bootstrap'
import { login } from '../feature/userSlice'

export default function Login () {
    const[name, setName] = useState("")
    const[pass, setPass] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name:name,
            pass:pass,
            loggenIn:true
        }));
    }

    return(
        <div>
            <br />
            <h5>Say Hello!</h5>
            <p>This is my app's login feature using React Redux! It's not perfect, but you get it.<br />Please enter your name in the form below so I can say hello:-)</p>
            <br />
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Row>
                    <Col>
                        <Form.Group className="mb-2">
                            <Form.Control 
                                type="username" 
                                placeholder="Your username pls" 
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Control  
                                type="password" 
                                placeholder="And a password! A secret one" 
                                value={pass}
                                onChange={(e) => setPass(e.target.value)} />
                        </Form.Group>
                    </Col>
                <Col></Col>
                </Row>

                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}