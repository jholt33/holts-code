import PageTitle from "../components/PageTitle";
import { Animated } from "react-animated-css";

function About() {
  return (
    <>
      <PageTitle title="About" />
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1000}
        isVisible={true}
      >
        <section className="container my-5">
          <h2>Page Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aut aliquam vero culpa at quis possimus ea quidem cum quae et
            quisquam rem corrupti itaque aliquid sint, in ad explicabo. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            dolorem voluptatum similique assumenda, rem nisi, accusantium beatae
            blanditiis repudiandae quidem perspiciatis ducimus, dolor
            consectetur nihil velit natus expedita necessitatibus culpa?
          </p>
        </section>
      </Animated>
    </>
  );
}
export default About;
