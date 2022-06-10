import { Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = () => {

    return (
      <cardgroup>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>My Favs</Card.Title>
    <Card.Text>
      My favs allows you to connect with your favorutites in the office, book a lunch/coffee date with them and organise a social event for after work.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>My Team</ListGroupItem>
    <ListGroupItem>Socials</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Who's in the Office</Card.Link>
    <Card.Link href="#">Book a Date </Card.Link>
  </Card.Body>
</Card>
<br/>

<Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>My Profile</Card.Title>
  <Card.Text>
    Information about yourself
  </Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
  <ListGroupItem> Edit your profile </ListGroupItem>
  <ListGroupItem> My Favs </ListGroupItem>
  <ListGroupItem> Your events </ListGroupItem>
</ListGroup>
<Card.Body>
  <Card.Link href="#"> Calender </Card.Link>
  <Card.Link href="#">  </Card.Link>
</Card.Body>
</Card>
</cardgroup>
    )
  }

  export default Cards

  