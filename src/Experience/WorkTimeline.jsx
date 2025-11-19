import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";
const WorkTimeline = () => {
  const experiences = [
    {
      icon: <FaBriefcase className="fa-3x text-primary" />,
      company: "Delta IT Network Pvt. Ltd.",
      duration: "Aug 2023 - Present",
      role: "Software Developer",
      description:
        "As a Software Developer at Delta IT Networks Pvt. Ltd., I lead and develop responsive, high-performance web applications in close collaboration with designers and front-end teams. I build and maintain RESTful APIs and server-side logic using Node.js, Express, PHP (Laravel), and MySQL, while designing efficient database schemas, optimizing queries, and ensuring smooth front-end integration. I develop cross-platform user interfaces with HTML, CSS, Bootstrap, Tailwind CSS, React.js, and Redux Toolkit, ensuring seamless performance across devices. Additionally, I manage VPS deployments, handle version control through Git/GitHub, and perform API testing using Postman. My work reflects a strong understanding of web architecture, responsive design, and secure authentication mechanisms to deliver robust and scalable web solutions.",
      align: "left",
    },
  ];
  return (
    <Container  className=" text-white" style={{marginTop:"10rem"}}>
      {/* Title Section */}
      <Row className="justify-content-center">
        <Col md={12} className="text-center">
          <div className="section-title ">
            <h2 className="fw-bold text-uppercase">Work Experience</h2>
            <p className=" mx-auto para-desc mb-0 mt-2" style={{color:"white"}}>
              A look back at my professional journey — designing and developing
              impactful digital solutions.
            </p>
          </div>
        </Col>
      </Row>
      <div className="timeline-page position-relative">
        {experiences.map((exp, index) => (
          <div
            className={`timeline-item mt-${index === 0 ? 1 : 5} pt-${index === 0 ? 0 : 4} `}
            key={index}
          >
            <Row>
              {exp.align === "left" ? (
                <>
                  <Col lg={6} md={6} sm={6}>
                    <div className="duration date-label-left position-relative text-md-end">
                      {exp.icon}
                      <h5 className="my-2">{exp.company}</h5>
                      <small className="text-light mb-0">{exp.duration}</small>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={6} className="mt-4 mt-sm-0">
                    <div className="event event-description-right float-left text-start">
                      <h6 className="title mb-1 text-capitalize text-white">
                        {exp.role}
                      </h6>
                      <p className="timeline-subtitle mt-3 mb-0 text-light">
                        {exp.description}
                      </p>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col
                    lg={6}
                    md={6}
                    sm={6}
                    className="order-sm-1 order-2 mt-4 mt-sm-0"
                  >
                    <div className="event event-description-left float-left text-end">
                      <h6 className="title mb-1 text-capitalize text-white">
                        {exp.role}
                      </h6>
                      <p className="timeline-subtitle mt-3 mb-0 text-light">
                        {exp.description}
                      </p>
                    </div>
                  </Col>
                  <Col
                    lg={6}
                    md={6}
                    sm={6}
                    className="order-sm-2 order-1"
                  >
                    <div className="duration duration-right position-relative">
                      {exp.icon}
                      <h5 className="my-2">{exp.company}</h5>
                      <small className="text-light mb-0">{exp.duration}</small>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkTimeline;
