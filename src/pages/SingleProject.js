import { useParams } from "react-router-dom";
import products from "../data";

function SingleProject() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { name, image, content } = product || {};

  return (
    <section className="container">
      <div>
        <h1>
          {name} {productId}
        </h1>
      </div>
      <div>
        <img src={image} alt={name} />
        <p>{content}</p>
      </div>
    </section>
  );
}

export default SingleProject;
