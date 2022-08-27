import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function ProfileCard({
  name,
  username,
  email,
  website,
  company,
  id,
  showFooter = true,
}) {
  console.log(name);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        {name} @{username}
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Email: {email}</ListGroup.Item>
        <ListGroup.Item>Website: {website}</ListGroup.Item>
        <ListGroup.Item>Company: {company.name}</ListGroup.Item>
      </ListGroup>
      {showFooter ? (
        <Link to={`/${id}/posts`}>
          <Card.Footer>Posts</Card.Footer>
        </Link>
      ) : null}
    </Card>
  );
}

export default ProfileCard;
