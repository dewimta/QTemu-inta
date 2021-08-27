import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import pic from '../pic.jpeg';

export default function Header () {
    return(
      <div id="meet">
        <Container style={{borderStyle:"solid", borderColor:"#d5d5d5" ,padding:"2%", borderRadius:"5px", borderWidth:"1.5px"}}>
          <Row>
            <Col><Image className="pix" src={pic} rounded /></Col>
            <Col sm={10}>
              <Row>
                <Col sm={4}>
                  <h6>Location</h6>
                  <h6>Members</h6>
                  <h6>Organizer</h6>
                  <br />
                  <Button>Join Us</Button>
                </Col>
                <Col>
                  <h6>Jakarta, Indonesia</h6>
                  <h6>1,079</h6>
                  <h6>Dewinta Maharani</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
}