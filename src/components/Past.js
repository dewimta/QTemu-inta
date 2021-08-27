import { useState, useEffect } from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';

export default function Header () {
    const url = 'http://localhost:4000/members'
    const[meet, setMeet] = useState([])
    const[showMeet, setShowMeet] = useState(false)

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMeet(data))
    }, [])

    const showFullMeet = () => {
        setShowMeet(true)
    }

    const hideFullMeet = () => {
        setShowMeet(false)
    }

    var three = 3;

    if(showMeet) {
        return (
            <div>
                <Row>
                    <Col><h4>Past Meetups</h4></Col>
                    <Col xs lg="2"><Button variant="link" onClick={hideFullMeet}>hide</Button></Col>
                </Row>
                <br />
                <Row xs={1} md={3} className="g-5">
                    {meet.map((item) => {
                        return (
                        <Col>
                            <Card style={{ width: '20rem' }}>
                                <Card.Body>
                                    <Card.Title>{item.date}</Card.Title>
                                    <Card.Text>{item.desc}</Card.Text>
                                    <Card.Text><b>{item.ppl}</b> participants</Card.Text>
                                    <Button>View</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
                </Row>
            </div>
        );
      }

    return(
        <div>
            <Row>
                <Col><h4>Past Meetups</h4></Col>
                <Col xs lg="2"><Button variant="link" onClick={showFullMeet}>show all</Button></Col>
            </Row>
            <br />
            <Row xs={1} md={3} className="g-5">
                {meet.slice(0,three).map((item) => {
                    return (
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title>{item.date}</Card.Title>
                                <Card.Text>{item.desc}</Card.Text>
                                <Card.Text><b>{item.ppl}</b> participants</Card.Text>
                                <Button>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                })}
            </Row>
        </div>
    )
}