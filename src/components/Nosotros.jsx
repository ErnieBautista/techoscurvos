import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";


export const Nosotros = () => {
  return (
    <div className='Nosotros' id='Nosotros'>
      <h1 className='nosotrosh1' >Nosotros</h1>
        <br />
        <br />
        <br />
        <Container fluid>
          <Row>
            <Col className='nosotrosCol' >
              <h2 className='nosotrosTexto' >
                Mision
              </h2>
              <p className='nosotrosTexto'>Ayudar a nuestros clientes a materializar sus proyectos mediante la experiencia, calidad y eficiencia de nuestros socios y asociados, diseñando, fabricando e instalando techos sin estructura secundaria de soporte, con la mejor relacion costo-beneficio.</p>
            </Col>
            <Col className='nosotrosCol'>
              <h2 className='nosotrosTexto'>
                Vision
              </h2>
              <p className='nosotrosTexto'>Ser una empresa consolidada, profesional, con procesos estandarizados, financieramente solida y altamente competitiva capaz de adaptarse a las exigencias del mercado.</p>
            </Col>
          </Row>
        </Container>
    </div>
    
  )
  }