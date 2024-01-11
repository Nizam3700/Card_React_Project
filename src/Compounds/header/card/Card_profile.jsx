import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Card_profile(props) {
  return (
    <Card style={{ width: '18rem', margin: '20px' , backgroundColor: 'lightblue', borderRadius : '20px', display: 'flex'}}>
      <Card.Img variant="top" src={props.source_img} />
      <Card.Body>
        <Card.Title style={{color: 'green', fontWeight: 'bold'}} >Profession</Card.Title>
        <Card.Title>{props.UserName}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush" >
        <ListGroup.Item style={{backgroundColor: 'lightpink', borderRadius: '15px'}}>Skills : {props.Skills}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <a href={props.Profession} target='_blank'>
          <Button variant="primary">Learn Now</Button>
      </a>
      </Card.Body>
    </Card>
  );
}

export default Card_profile;