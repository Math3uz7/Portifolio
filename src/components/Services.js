import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Code2, Smartphone, Brush, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Code2 size={32} className="color1 mb-3" />,
    title: "Desenvolvimento Web/Software",
    description: "Criação de sites, softwares e outros elementos digitais, como bancos de dados e ferramentas relacionadas."
  },
  {
    icon: <Smartphone size={32} className="color1 mb-3" />,
    title: "Aplicativos Mobile",
    description: "Aplicativos nativos e híbridos com design intuitivo e alto desempenho."
  },
  {
    icon: <Briefcase size={32} className="color1 mb-3" />,
    title: "Trafego Pago",
    description: "Estratégias de marketing digital que visam atrair visitantes para um site ou perfil nas redes sociais"
  },
  {
    icon: <Brush size={32} className="color1 mb-3" />,
    title: "Otimizacao de busca",
    description: "Ajudamos a melhorar a classificação de um site nos resultados de mecanismos de busca"
  }
];

export const Services = () => {
  return (
    <section className="services-section py-5 bg-black text-white" id="services">
      <Container id="fundoblack">
        <div className="text-center mb-5" >
          <h2 className="fw-bold display-5">Nossos Serviços</h2>
          <p className="text-white">Soluções completas para acelerar o seu negócio com tecnologia</p>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className="h-100 text-center bg-secondary border-0 shadow service-card">
                <Card.Body className="bg-white">
                  <div className="d-flex justify-content-center">{service.icon}</div>
                  <h5 className="fw-semibold mt-2" id="purple">{service.title}</h5>
                  <p className="text-black small">{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
