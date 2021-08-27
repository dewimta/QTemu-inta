import { Card } from 'react-bootstrap';

export default function Header () {
    return(
        <div>
          <h4>Next Meetup</h4>
          <br />
          <Card>
            <Card.Header>25 July 2021</Card.Header>
            <Card.Body>
              <Card.Title>Some Meetup Event</Card.Title>
              <Card.Text>
              <text>Lorem ipsum dolor sit amet!<br />
                <br />Consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolor eufugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.<br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br />
              ------<br />
              Accusantium doloremque</text>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    )
}