import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import "animate.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <h2>Get In Touch</h2>
        <form>
          <Row>
            <Col size={12} sm={6} className="px-1">
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input
                type="text"
                value={formDetails.lasttName}
                placeholder="Last Name"
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email Address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input
                type="tel"
                value={formDetails.phone}
                placeholder="Phone No."
                onChange={(e) => onFormUpdate("phone", e.target.value)}
              />
            </Col>
            <Col size={12} className="px-1">
              <textarea
                rows="6"
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
              <button type="submit">
                <span>{buttonText}</span>
              </button>
            </Col>
          </Row>
        </form>
      </Container>
    </section>
  );
};
