import React from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
      <Row className="justify-content-center mb-2">
        <Link to="/workouts">
          <Button>View Workouts</Button>
        </Link>
      </Row>
      <Row className="justify-content-center mb-2">
        <Link to="/workouts/new">
          <Button>Enter Workout</Button>
        </Link>
      </Row>
    </>
  );
}

export default Home;
