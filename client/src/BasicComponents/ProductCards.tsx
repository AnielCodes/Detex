// src/components/ProductCards.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import EasykitLogo from "../assets/EasyKit.png";
import RyobiLogo from "../assets/Ryobi.png";
import A019 from "../assets/AO19-1.png";

const ProductCards: React.FC = () => {
  //Product object.
  const products = [
    {
      name: "AO19",
      productImg: A019,
      image:
        "https://www.detex.com/wp-content/uploads/Logos/AO19-Series-%C2%AE-Logo.jpg",
      features: [
        "Economical operator provides safe and easy access in medium to high-traffic and security areas",
        "Provides ADA compliant access to handicap applications",
        "Hanger plate allows quick installation",
        "Adjustable delayed activation for sequenced vestibule doors",
        "Reverse on obstruction stalls a door during closing cycle and re-activates to open if an obstruction is sensed anytime before the latch position",
        "Power close applies a reverse power to aid in latch check position",
      ],
      price: "$49.99",
    },
    {
      name: "EasyKit",
      productImg: A019,
      image: EasykitLogo,
      features: ["Feature A", "Feature B", "Feature C"],
      price: "$59.99",
    },
    {
      name: "Ryobi",
      productImg: A019,
      image: RyobiLogo,
      features: ["Feature X", "Feature Y", "Feature Z"],
      price: "$69.99",
    },
  ];

  return (
    <div className="flex justify-center items-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-3/4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
          >
            <img src={product.productImg}></img>
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="max-w-30 max-h-20 mb-4 justify-self-center"
            />

            {/* Features List */}
            <ul className="space-y-2 mb-6 text-gray-600">
              {product.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center space-x-2"
                >
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <p className="text-xl font-bold text-gray-700 mb-6">
              {product.price}
            </p>

            {/* Button */}
            <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
