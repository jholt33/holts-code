import PageTitle from "../components/PageTitle";
import ProjectCards from "../components/ProjectCards";

function Projects() {
  return (
    <>
      <PageTitle title="Meet the Dogs" subtitle="Learn more below about your new best friend!" />
      <section className="container my-5">
        <ProjectCards />
      </section>
    </>
  );
}
export default Projects;
