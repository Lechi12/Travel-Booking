import React from "react";
import { Container } from "react-bootstrap";
import "./Top10Destinations.css"; // Import the CSS file

const Top10Destinations: React.FC = () => {
  return (
    <Container className="mt-5 py-5">
      <h1 className="text-center fw-bold">Top 10 Destinations in 2025</h1>
      <p className="text-center text-muted">
        Explore the best places to visit in 2025!
      </p>

      <div className="mt-4">
        <h3>1. Paris, France</h3>
        <p>
          Enjoy the beauty of the Eiffel Tower, fine dining, and the romantic
          atmosphere.
        </p>

        <h3>2. Tokyo, Japan</h3>
        <p>
          A perfect mix of tradition and futuristic technology, Tokyo is a
          must-visit.
        </p>

        <h3>3. Bali, Indonesia</h3>
        <p>
          Beautiful beaches, rich culture, and breathtaking landscapes make Bali
          a top choice.
        </p>

        <h3>4. Santorini, Greece</h3>
        <p>
          Famous for its white-washed buildings and stunning sunsets over the
          Aegean Sea.
        </p>

        <h3>5. New York City, USA</h3>
        <p>
          The city that never sleeps, full of attractions, theaters, and amazing
          food.
        </p>

        <h3>6. Cape Town, South Africa</h3>
        <p>
          A destination with stunning landscapes, vineyards, and amazing
          wildlife.
        </p>

        <h3>7. Dubai, UAE</h3>
        <p>
          Luxury shopping, modern architecture, and exciting adventures in the
          desert.
        </p>

        <h3>8. Rome, Italy</h3>
        <p>
          Home to ancient ruins, stunning art, and some of the best cuisine in
          the world.
        </p>

        <h3>9. Sydney, Australia</h3>
        <p>
          Famous for its Opera House, beautiful beaches, and a vibrant culture.
        </p>

        <h3>10. Machu Picchu, Peru</h3>
        <p>A breathtaking historical site surrounded by lush mountains.</p>
      </div>
    </Container>
  );
};

export default Top10Destinations;
