import Breadcrumb from "react-bootstrap/Breadcrumb";
import { LinkContainer } from "react-router-bootstrap";

import "./PageTitle.scss";

function PageTitle(props) {
  return (
    <section id="page-title">
        <div className="container d-lg-flex flex-wrap align-items-center">
          <div className="d-flex flex-column">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
          </div>
          <div className="ms-lg-auto">
            <Breadcrumb>
              <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Breadcrumb.Item>Projects</Breadcrumb.Item>
              </LinkContainer>
            </Breadcrumb>
          </div>
        </div>
      </section>
  );
}
export default PageTitle;