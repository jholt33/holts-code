import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projects from "../data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageTitle from "../components/PageTitle";

import "./Projects.scss";

function Projects() {
  return (
    <>
      <PageTitle title="Projects" subtitle="Past and Present Web Projects" activeLink="Projects" />
      <section className="container my-5">
        <Row>
          {projects.map((project) => {
            return (
              <Col md={4} key={project.id}>
                <Card className="my-3">
                  <LinkContainer to={`/projects/${project.id}`}>
                    <Card.Img variant="top" src={project.image} />
                  </LinkContainer>
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.content}</Card.Text>
                    <LinkContainer to={`/projects/${project.id}`}>
                      <div className="text-center">
                        <Button size="lg">
                          View More
                        </Button>
                      </div>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </section>
    </>
  );
}
export default Projects;
