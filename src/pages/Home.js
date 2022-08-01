import { Animated } from "react-animated-css";
import ProjectCards from "../components/ProjectCards";

import "./Home.scss";

function Home() {
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInDuration={1000}
      isVisible={true}
    >
      <div className="homepg-hdr">
        <div className="container d-flex flex-column text-center">
          <h1 className="display-1">Welcome!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aut aliquam vero culpa at quis possimus ea quidem cum quae et
            quisquam rem corrupti itaque aliquid sint, in ad explicabo.
          </p>
        </div>
      </div>
      <section className="container my-5">
        <h2>Meet The Dogs!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          aut aliquam vero culpa at quis possimus ea quidem cum quae et quisquam
          rem corrupti itaque aliquid sint, in ad explicabo. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Molestias dolorem voluptatum
          similique assumenda, rem nisi, accusantium beatae blanditiis
          repudiandae quidem perspiciatis ducimus, dolor consectetur nihil velit
          natus expedita necessitatibus culpa?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          aut aliquam vero culpa at quis possimus ea quidem cum quae et quisquam
          rem corrupti itaque aliquid sint, in ad explicabo. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Molestias dolorem voluptatum
          similique assumenda, rem nisi, accusantium beatae blanditiis
          repudiandae quidem perspiciatis ducimus, dolor consectetur nihil velit
          natus expedita necessitatibus culpa?
        </p>
        <ProjectCards />
      </section>
    </Animated>
  );
}
export default Home;
