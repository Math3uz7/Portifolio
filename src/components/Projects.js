import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Captura de tela 2025-03-07 162940.png";
import projImg2 from "../assets/img/ecozin.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/Quizimg.png"
import projImg5 from "../assets/img/retro.jpg"
import projImg6 from "../assets/img/syron.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PsicoMind",
      description: "Design & Desenvolvimento",
      imgUrl: projImg1,
    },
    {
      title: "Ecoguardian",
      description: "Design & Desenvolvimento",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Desenvolvimento",
      imgUrl: projImg3,
    },
    {
      title: "Programmer Quiz",
      description: "Design & Desenvolvimento",
      imgUrl: projImg4,
    },
    {
      title: "Retro Games",
      description: "Design & Desenvolvimento",
      imgUrl: projImg5,
    },
    {
      title: "Syron",
      description: "Design & Desenvolvimento",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Estes são alguns dos projetos que ja desenvolvi e trabalhei ! </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Em Breve</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Todos os projetos apresentados neste portfólio foram desenvolvidos por mim,  Alguns desses projetos foram vendidos ou entregues a terceiros, mas permanecem aqui com a finalidade exclusiva de demonstrar minhas habilidades, estilo de trabalho e a qualidade dos serviços que ofereço. O uso das imagens e descrições é unicamente para fins de portfólio e não representa qualquer uso comercial indevido ou não autorizado.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
