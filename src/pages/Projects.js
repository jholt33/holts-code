import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import products from "../data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Projects() {
  return (
    <section className="container my-5">
      <h1>Projects</h1>
      <p>Past and Present Web Projects</p>
      <Row>
        {products.map((product) => {
          return (
            <Col md={4} key={product.id}>
              <Card className="my-3">
                <LinkContainer to={`/projects/${product.id}`}>
                  <Card.Img variant="top" src={product.image} />
                </LinkContainer>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.content}</Card.Text>
                  <LinkContainer to={`/projects/${product.id}`}>
                    <div className="text-center">
                    <Button variant="outline-primary" size="lg">View More</Button>
                    </div>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}
export default Projects;
