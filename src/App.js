import './App.css';
import Home from './components/pages/Home'
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import {  BrowserRouter, 
  Switch, 
  Route,
  Redirect } 
  from 'react-router-dom';
import CreateMeet from './components/pages/CreateMeet';
import Login from './components/login/Login';
import Logout from './components/login/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from './components/feature/userSlice';

function App() {
  const user = useSelector(selectUser);
        
  return (
    <div className="App">
      <BrowserRouter>

      <div>
        <Navbar bg="primary" variant="dark" style={{borderRadius:"5px"}}>
          <Container>
          <Navbar.Brand href="/home">QTemu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/create">Create Meetup</Nav.Link>
            <Nav.Link href="#">Explore</Nav.Link>
          </Nav>
          <Nav>
            {user ? <Nav.Link href="/login">Log Out</Nav.Link> : <Nav.Link href="/login">Log In</Nav.Link>}
          </Nav>
          </Container>
        </Navbar>
      </div>

      <Switch>
        <Route path="/create">
          <CreateMeet />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          {user ? <Logout /> : <Login />}
        </Route>
        <Redirect exact from="/" to ="/home" />
      </Switch>
      <br />

      <div className="footer">
        <br />
        <hr />
        <Row>
          <Col><p>Dewinta Dyah Maharani | 2021</p></Col>
          <Col xs lg="2"><p>dewinta.dyah@ui.ac.id</p></Col>
        </Row>
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;