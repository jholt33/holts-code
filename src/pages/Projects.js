import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import products from "../data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Projects() {
  return (
    <section className="container">
      <h1>Projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut
        aliquam vero culpa at quis possimus ea quidem cum quae et quisquam rem
        corrupti itaque aliquid sint, in ad explicabo. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Molestias dolorem voluptatum
        similique assumenda, rem nisi, accusantium beatae blanditiis repudiandae
        quidem perspiciatis ducimus, dolor consectetur nihil velit natus
        expedita necessitatibus culpa?
      </p>
      <Row>
        {products.map((product) => {
          return (
            <Col md={4} key={product.id}>
              <Card className="my-3">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.content}</Card.Text>
                  <LinkContainer to={`/projects/${product.id}`}>
                    <Button>Go somewhere</Button>
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
