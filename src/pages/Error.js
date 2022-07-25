import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="container my-5">
      <div className="text-center">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">back home</Link>
      </div>
    </section>
  );
}
export default Error;
