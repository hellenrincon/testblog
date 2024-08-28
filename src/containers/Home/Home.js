import React, { useEffect, useState } from "react";
import "./Home.css";
import { Button, Container } from "react-bootstrap";
import axiosInstance from "../../contexts/Interceptors/axiosInstance";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axiosInstance.get('/post?limit=10')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container>
      <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
      <Button variant="primary">Click me</Button>
    </Container>
  );
};

export default Home;