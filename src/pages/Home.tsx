import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CitySearch from "../components/CitySearch";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";

// Predefined list of destinations
const predefinedDestinations = [
  {
    name: "Paris",
    description: "City of love, iconic landmarks, and world-class art.",
    img: "https://th.bing.com/th/id/OIP.z60UtOveMEm9QA1sAxutjQHaEK?rs=1&pid=ImgDetMain",
  },
  {
    name: "New York",
    description:
      "The city that never sleeps, a global hub of culture and entertainment.",
    img: "https://www.goodfreephotos.com/albums/united-states/new-york/new-york-city/new-york-cityscape-with-lighted-up-skyscrapers.jpg",
  },
  {
    name: "Tokyo",
    description:
      "A blend of modernity and tradition, with vibrant city life and ancient temples.",
    img: "https://img.freepik.com/premium-photo/tokyo-cityscape_959815-382.jpg",
  },
];

// Navbar component
const NavbarComponent: React.FC<{
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ isDarkMode, toggleDarkMode }) => (
  <Navbar
    expand="lg"
    className={`shadow-sm ${
      isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
    }`}
  >
    <Container>
      <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
        TravelGo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="fw-semibold">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/destinations" className="fw-semibold">
            Destinations
          </Nav.Link>
          <Nav.Link as={Link} to="/bookings" className="fw-semibold">
            Bookings
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="fw-semibold">
            Contact
          </Nav.Link>
          <Button variant="outline-secondary" onClick={toggleDarkMode}>
            Toggle Dark Mode
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(predefinedDestinations);
  const [isCityFound, setIsCityFound] = useState(true);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filteredDestinations = predefinedDestinations.filter((destination) =>
      destination.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setIsCityFound(filteredDestinations.length > 0);
    setSearchResults(filteredDestinations);
  };

  return (
    <>
      {/* Navbar */}
      <NavbarComponent
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Hero Section */}
      <Container
        fluid
        className="bg-primary text-white text-center py-5 hero-section"
      >
        <h1 className="display-4 fw-bold">Find Your Perfect Destination</h1>
        <p className="lead">
          Book flights, hotels, and tours at the best prices
        </p>

        {/* CitySearch Component */}
        <CitySearch />

        {/* Search Form */}
        <Form
          className="d-flex justify-content-center mt-3"
          onSubmit={handleSearchSubmit}
        >
          <FormControl
            type="search"
            placeholder="Where to?"
            className="me-2 w-50 shadow-sm"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="btn btn-light fw-semibold" type="submit">
            Search
          </button>
        </Form>
      </Container>

      {/* Search Results Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Search Results</h2>
        {isCityFound ? (
          <Row>
            {searchResults.map((destination, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="card">
                  <img
                    src={destination.img}
                    className="card-img-top"
                    alt={destination.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{destination.name}</h5>
                    <p className="card-text">{destination.description}</p>
                    <Link
                      to={`/destinations/${destination.name}`}
                      className="btn btn-primary"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <p className="text-center">
            Sorry, we couldn't find any city matching "{searchQuery}" in our
            list.
          </p>
        )}
      </Container>

      {/* Popular Destinations Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Popular Destinations</h2>
        <Row>
          {predefinedDestinations.map((destination, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="card">
                <img
                  src={destination.img}
                  className="card-img-top"
                  alt={destination.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{destination.name}</h5>
                  <p className="card-text">{destination.description}</p>
                  <Link
                    to={`/destinations/${destination.name}`}
                    className="btn btn-primary"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action Section */}
      <Container fluid className="bg-dark text-white py-5">
        <h2 className="text-center">Ready to Book Your Trip?</h2>
        <p className="text-center">
          Don’t wait, start planning your next adventure today!
        </p>
        <div className="text-center">
          <Link to="/bookings" className="btn btn-warning btn-lg">
            Book Now
          </Link>
        </div>
      </Container>

      {/* Footer */}
      <footer className="text-center py-3 bg-light">
        <p className="mb-0">© 2025 TravelGo, All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Home;
