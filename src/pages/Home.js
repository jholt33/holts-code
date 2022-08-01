import { Animated } from "react-animated-css";

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
        <img className="img-fluid" src="https://placedog.net/800/640?id=69" alt="home img" />
      </div>
      <section className="container my-5">
        <h1>Welcome!</h1>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          aut aliquam vero culpa at quis possimus ea quidem cum quae et quisquam
          rem corrupti itaque aliquid sint, in ad explicabo. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Molestias dolorem voluptatum
          similique assumenda, rem nisi, accusantium beatae blanditiis
          repudiandae quidem perspiciatis ducimus, dolor consectetur nihil velit
          natus expedita necessitatibus culpa?
        </p>
      </section>
    </Animated>
  );
}
export default Home;
