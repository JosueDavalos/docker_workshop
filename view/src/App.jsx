import React, { useEffect, useState } from 'react'
import { Container, Image, Row, Col, Form } from 'react-bootstrap';
import dockerImg from './assets/docker.png';
import axios from 'axios';

function App() {
  const [options_docker, setOptions_docker] = useState([]);
  const apiURL = 'http://localhost:8000/options'

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(apiURL);
      setOptions_docker(data.data['opciones']);
    }

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);


  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Row className="mt-5">
            <h3>Docker UP!</h3>
          </Row>
          <Row>
            <Image src={dockerImg} alt="docker image" />
          </Row>
        </Col>

        <Col className="mt-5">
          <Form >
            <Form.Group className="mt-5" >
              <Form.Label>Que tal el taller?</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecciones</option>
                {options_docker.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>


          </Form>

        </Col>
      </Row>

    </Container>

  );
}

export default App;
