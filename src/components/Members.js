import { Card, Button, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";

export default function Members () {
  const url = 'http://jsonplaceholder.typicode.com/users'
  const[members, setMembers] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMembers(data))
  }, [])

  console.log(members)

  const [showMembers, setShowMembers] = useState(false)
  
  const showFullMember = () => {
    setShowMembers(true)
  }

  const hideFullMember = () => {
    setShowMembers(false)
  }

  var one = 1;

  if(showMembers) {
    return (
      <div>
      <Row>
        <Col><h4>Members</h4></Col>
        <Col xs lg="2"><Button variant="link" onClick={hideFullMember}>hide</Button></Col>
      </Row>
      <br />
      {members.map((item,idx) => {
        return (
          <div>
            <Card key={idx}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.company.bs}</Card.Subtitle>
              </Card.Body>
            </Card>
            <br />
          </div>
        )
      })} 

    </div>
    );
  }

  return(
    <div>
      <Row>
        <Col><h4>Members</h4></Col>
        <Col xs lg="2"><Button variant="link" onClick={showFullMember}>show all</Button></Col>
      </Row>
      <br />
      {members.slice(0,one).map((item, idx) => {
        return (
          <Card key={idx}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">and {members.length -1} others</Card.Subtitle>
            </Card.Body>
          </Card>
        )
      })} 

    </div>
  )
}