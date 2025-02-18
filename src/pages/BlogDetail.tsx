import React, { useState } from "react";
import "./BlogDetail.css"; // Import the CSS file

const BlogDetail: React.FC = () => {
  // State to manage if the blog content is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the state when the "Read more" is clicked
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">5 Tips for Traveling on a Budget</h1>
      <p className="blog-content">
        Traveling on a budget doesn’t mean compromising on your experience. It
        means being smart about your choices. Here are 5 essential tips to help
        you make the most out of your travel budget:
      </p>
      <ul className="blog-list">
        <li>1. Book Flights in Advance</li>
        <li>2. Stay in Budget-Friendly Accommodations</li>
        <li>3. Use Public Transportation</li>
        <li>4. Find Free or Low-Cost Activities</li>
        <li>5. Pack Smart and Light</li>
      </ul>

      {/* Conditionally render more content when expanded */}
      {isExpanded && (
        <div className="additional-content">
          <p className="blog-content">
            Here are some extra tips for saving money while traveling:
          </p>
          <ul className="blog-list">
            <li>
              6. Avoid Expensive Tourist Traps - Research less-known attractions
              that offer the same experience.
            </li>
            <li>
              7. Use Travel Reward Programs - Sign up for loyalty programs with
              airlines or hotel chains.
            </li>
            <li>
              8. Bring Your Own Snacks - Buying food at tourist spots can be
              expensive; pack snacks for the day!
            </li>
            <li>
              9. Travel Off-Season - Booking trips in the off-season means lower
              prices for flights and accommodations.
            </li>
            <li>
              10. Stay Safe and Healthy - Avoid unexpected medical costs by
              staying healthy and purchasing travel insurance.
            </li>
          </ul>

          <h3>Travel Resources:</h3>
          <p className="blog-content">
            Here are some websites and apps that can help you save on travel
            costs:
          </p>
          <ul className="blog-list">
            <li>
              <a
                href="https://www.skyscanner.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skyscanner
              </a>{" "}
              - for finding the cheapest flights.
            </li>
            <li>
              <a
                href="https://www.hostelworld.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hostelworld
              </a>{" "}
              - for booking budget accommodations.
            </li>
          </ul>

          <h3>Personal Story:</h3>
          <p className="blog-content">
            During my trip to Southeast Asia, I was able to save a lot by using
            public buses instead of taxis, which is both affordable and a great
            way to experience local life!
          </p>
        </div>
      )}

      <p className="blog-content">
        For more detailed tips, check out our full blog post!
      </p>

      {/* Button to toggle content visibility */}
      <div className="blog-footer" onClick={toggleContent}>
        {isExpanded ? "Read less" : "Read more"}
      </div>
    </div>
  );
};

export default BlogDetail;
