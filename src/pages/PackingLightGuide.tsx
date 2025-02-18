import React from "react";
import { Container } from "react-bootstrap";

const PackingLightGuide: React.FC = () => {
  return (
    <Container className="mt-5 py-5">
      <h1 className="text-center fw-bold">
        The Ultimate Guide to Packing Light
      </h1>
      <p className="text-center text-muted">
        Packing doesn't have to be stressful. Follow these tips to travel light
        and smart!
      </p>

      <div className="mt-4">
        <h3>1. Choose the Right Bag</h3>
        <p>
          A carry-on suitcase or a backpack is ideal for short trips. Make sure
          it’s lightweight and has enough compartments.
        </p>

        <h3>2. Plan Your Outfits</h3>
        <p>
          Stick to a color scheme so you can mix and match easily. Choose
          lightweight, wrinkle-free fabrics.
        </p>

        <h3>3. Use Packing Cubes</h3>
        <p>
          Packing cubes help keep your items organized and save space in your
          luggage.
        </p>

        <h3>4. Minimize Toiletries</h3>
        <p>
          Bring travel-sized toiletries or rely on hotel-provided essentials.
        </p>

        <h3>5. Wear Your Bulkiest Items</h3>
        <p>
          If you're bringing a jacket or boots, wear them on the plane to save
          space in your bag.
        </p>

        <h3>6. Keep Essentials in Your Personal Bag</h3>
        <p>
          Important documents, medications, and electronics should always be in
          your carry-on.
        </p>
      </div>
    </Container>
  );
};

export default PackingLightGuide;
