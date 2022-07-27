import Breadcrumb from "react-bootstrap/Breadcrumb";
import { LinkContainer } from "react-router-bootstrap";
import useBreadcrumbs from "use-react-router-breadcrumbs";

function Breadcrumbs(props) {
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Breadcrumb>
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <LinkContainer key={match.pathname} to={match.pathname}>
            <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
          </LinkContainer>
        ))}
      </Breadcrumb>
    </>
  );
}
export default Breadcrumbs;
