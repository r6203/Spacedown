import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Grid } from 'react-bootstrap';

const App = ({ children }) => (
  <Grid>
    <Row>
      <Col xs={6}>
        <h1>App!</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        {children}
      </Col>
    </Row>
  </Grid>
);

export default App;
