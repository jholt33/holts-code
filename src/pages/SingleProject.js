import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../data";
import PageTitle from "../components/PageTitle";

function SingleProject() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, content } = product;
  return (
    <>
      <PageTitle
        title={name}
        activeLink="Projects"
      />
      <section className="container my-5">
        <div className="d-lg-flex align-items-center">
          <img className="img-fluid" src={image} alt={name} />
          <div className="d-flex flex-column mx-4 my-4">
            <h1>{name}</h1>
            <p>{content}</p>
            <Link to="/projects">Back to Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProject;
