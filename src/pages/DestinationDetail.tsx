import React from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const destinations = {
  paris: {
    name: "Paris",
    country: "France",
    price: 1200,
    description: "The city of love and lights!",
    image:
      "https://th.bing.com/th/id/R.5d914e3c8ca29a71906dee1b87392b59?rik=QRlm9vIosYYWgw&pid=ImgRaw&r=0",
  },
  bali: {
    name: "Bali",
    country: "Indonesia",
    price: 900,
    description: "A tropical paradise with beautiful beaches.",
    image:
      "https://media.istockphoto.com/id/1309924178/photo/dramatic-twilight-over-the-kuningan-business-district-in-jakarta-indonesia-capital-city-and-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=TKAqsW4XOhEonS9xhx_8t6ANaVSWv95aYrOnYki1ujk=",
  },
  "new-york": {
    // 🔹 Change key from "newyork" to "new-york"
    name: "New York",
    country: "USA",
    price: 1500,
    description: "The city that never sleeps!",
    image: "https://wallpaperaccess.com/full/3432890.jpg",
  },
  tokyo: {
    name: "Tokyo",
    country: "Japan",
    price: 1300,
    description: "A blend of modern and traditional culture.",
    image:
      "https://franks-travelbox.com/wp-content/uploads/2017/11/japan-tokio-der-skytree-in-tokio-ist-mit-634-metern-der-hocc88chste-turm-der-welt-japan-skyearth-shutterstock.jpg",
  },
  london: {
    name: "London",
    country: "UK",
    price: 1400,
    description: "A historic city full of culture and life.",
    image: "IMAGE_URL",
  },
  dubai: {
    name: "Dubai",
    country: "UAE",
    price: 1600,
    description: "A luxurious city with stunning skyscrapers.",
    image: "IMAGE_URL",
  },
  rome: {
    name: "Rome",
    country: "Italy",
    price: 1100,
    description: "The Eternal City with rich history.",
    image: "IMAGE_URL",
  },
};

const DestinationDetail: React.FC = () => {
  const { destinationId } = useParams<{ destinationId: string }>();

  // Log to verify destinationId
  console.log("destinationId:", destinationId);

  // Ensure the key is in lowercase when referencing the destinations object and replace spaces with hyphens
  const destination =
    destinations[
      destinationId
        ?.toLowerCase()
        .replace(/\s+/g, "-") as keyof typeof destinations
    ];

  // Log to check destination data
  console.log("destination data:", destination);

  if (!destination)
    return <h2 className="text-center mt-5">Destination Not Found</h2>;

  return (
    <Container className="mt-5 text-center">
      <h2>
        {destination.name}, {destination.country}
      </h2>
      <img
        src={destination.image}
        alt={destination.name}
        className="img-fluid my-3 rounded"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p>{destination.description}</p>
      <p className="fw-bold">Price: ${destination.price}</p>
      <Button variant="primary" href="/destinations">
        Back to Destinations
      </Button>
    </Container>
  );
};

export default DestinationDetail;
