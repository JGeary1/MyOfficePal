import { Card, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = () => {

    return (
        <CardGroup>
  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Me</Card.Title>
      <Card.Text>
        Days I'm in the office this week
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Favourites</Card.Title>
      <Card.Text>
        Who's in the office this week?
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Socials</Card.Title>
      <Card.Text>
        What events are happening this week?
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>My Team</Card.Title>
      <Card.Text>
        Who from my team is in the office?
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
    )
  }

  export default Cards

  