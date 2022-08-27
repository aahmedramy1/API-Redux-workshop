import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CommentCard = ({ name, email, body }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        {name} email: {email}
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{body}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CommentCard;
