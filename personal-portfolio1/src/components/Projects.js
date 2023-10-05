import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proImg1.jpeg";
import projImg2 from "../assets/img/proImg2.webp";
import projImg3 from "../assets/img/proImg3.jpeg";
import projImg4 from "../assets/img/proImg4.jpeg";
import projImg5 from "../assets/img/proImg5.png";
import projImg6 from "../assets/img/proImg6.png";
import projImg7 from "../assets/img/proImg7.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Food web Page",
      description: "11-10-2023",
      imgUrl: projImg3,
    },
    {
      title: "LOL Page",
      description: "29-9-2023",
      imgUrl: projImg1,
    },
    {
      title: "Car Shopping Page",
      description: "20-9-2023",
      imgUrl: projImg2,
    },
  ];

  const projects2 = [
    {
      title: "Wordle Game",
      description: "1-9-2023",
      imgUrl: projImg4,
    },
    {
      title: "HongKong Weather",
      description: "12-9-2023",
      imgUrl: projImg5,
    },
  ];

  const projects3 = [
    {
      title: "Fakestagram",
      description: "11-08-2023",
      imgUrl: projImg6,
    },
    {
      title: "Gird Blog",
      description: "09-08-2023",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    This is a project I conducted during the 3-month Bootcamp
                    and self-study. It used HTML, CSS, Javascript, and React to
                    conduct it. It was sorted by time and has been placed in git
                    hub.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Frist State</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Second State</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Third State</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
