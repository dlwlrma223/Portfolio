// import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ marginBottom: "100px" }}>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <h5>React</h5>
                </div>
                <div className="item">
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <h5>Material UI</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
