import { useParams } from "react-router-dom";
import products from "../data";
const SingleProject = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, content } = product;
  return (
    <section>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{content}</p>
    </section>
  );
};

export default SingleProject;
