import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function PostCard({ id, title, body, showFooter = true }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      {showFooter ? (
        <Link to={`/${id}/comments`}>
          <Card.Footer>Comments</Card.Footer>
        </Link>
      ) : null}
    </Card>
  );
}

export default PostCard;
