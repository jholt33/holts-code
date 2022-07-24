import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProjectItems from "../ProjectItems";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = () => {
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
        {ProjectItems.map((project) => {
          return (
            <Col md={4}>
              <Card key={project.id} className="my-3">
                <Card.Img variant="top" src={project.src} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.content}</Card.Text>
                  <Button>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};
export default Projects;
