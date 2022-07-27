import Breadcrumbs from "./Breadcrumbs";
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
          <Breadcrumbs />
        </div>
      </div>
    </section>
  );
}
export default PageTitle;
