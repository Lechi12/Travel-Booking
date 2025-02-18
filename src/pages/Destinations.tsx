import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../Destinations.css"; // ✅ Import the CSS file from the src folder

// ✅ Define the Destination interface
interface Destination {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Destinations: React.FC<{ destinations: Destination[] }> = ({
  destinations,
}) => {
  return (
    <Container>
      <h2 className="mt-4 text-center">Explore Destinations</h2>
      <Row>
        {destinations.map((destination) => (
          <Col key={destination.id} xs={12} sm={6} md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={destination.imageUrl || "fallback-image.jpg"}
                alt={destination.name}
              />
              <Card.Body>
                <Card.Title>{destination.name}</Card.Title>
                <Card.Text>{destination.description}</Card.Text>

                <div className="button-container">
                  <Button variant="primary">
                    {/* Updated Link to pass destination name */}
                    <Link
                      to={`/destinations/${destination.name.toLowerCase()}`} // Pass the destination name in lowercase
                      className="text-white text-decoration-none"
                    >
                      View More
                    </Link>
                  </Button>

                  <Button variant="success">
                    <Link
                      to="/bookings"
                      className="text-white text-decoration-none"
                    >
                      Book Now
                    </Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Destinations;
