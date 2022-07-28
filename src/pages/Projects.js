import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projects from "../data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageTitle from "../components/PageTitle";
import { Animated } from "react-animated-css";

import "./Projects.scss";

function Projects() {
  return (
    <>
      <PageTitle title="Projects" subtitle="Past and Present Web Projects" />
      <section className="container my-5">
        <Row>
          {projects.map((project) => {
            return (
              <Col md={4} key={project.id}>
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  animationInDuration={1000}
                  isVisible={true}
                >
                  <LinkContainer to={`/projects/${project.id}`}>
                    <Card className="my-3">
                      <Card.Img variant="top" src={project.image} />
                      <Card.Body className="px-4">
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>{project.content}</Card.Text>
                        <LinkContainer to={`/projects/${project.id}`}>
                          <div className="text-center">
                            <Button size="lg">View More</Button>
                          </div>
                        </LinkContainer>
                      </Card.Body>
                    </Card>
                  </LinkContainer>
                </Animated>
              </Col>
            );
          })}
        </Row>
      </section>
    </>
  );
}
export default Projects;
