import { useParams } from "react-router-dom";
import products from "../data";
import PageTitle from "../components/PageTitle";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { FaLink, FaAngleLeft} from "react-icons/fa";

function SingleProject() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, content, projectURL } = product;
  return (
    <>
      <PageTitle title={name} activeLink={productId} />
      <section className="container my-5">
        <div className="row">
          <div className="col-12 col-lg-8">
            <img className="img-fluid vw-100" src={image} alt={name} />
          </div>
          <div className="col-12 col-lg-4">
            <div className="mt-3 mt-lg-0">
              <h2>Project Info:</h2>
              <p>{content}</p>
              <hr></hr>
              <div className="d-flex justify-content-between mb-5">
                <span className="d-flex align-items-center">
                  <FaLink />
                  <span className="text-bold ps-2">URL:</span>
                </span>
                <a href={projectURL} rel="noreferrer" target="_blank">
                  {projectURL}
                </a>
              </div>
              <LinkContainer to="/projects">
                <div className="text-left">
                  <Button variant="primary" className="d-flex align-items-center" size="lg">
                    <FaAngleLeft className="me-2" /> Back to Projects
                  </Button>
                </div>
              </LinkContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProject;
