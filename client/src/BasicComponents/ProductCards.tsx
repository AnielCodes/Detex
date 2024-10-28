// src/components/ProductCards.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import EasykitLogo from '../assets/EasyKit.png';
import RyobiLogo from '../assets/Ryobi.png';
import Auto from '../assets/AO19-1.png';
import Ryobi from '../assets/D4550.png';
import EasyImg from '../assets/EasyImg.png';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const ProductCards: React.FC = () => {
  const products = [
    {
      name: 'AO19',
      imageProduct: Auto,
      image: 'https://www.detex.com/wp-content/uploads/Logos/AO19-Series-%C2%AE-Logo.jpg',
      features: [
        'Economical operator provides safe and easy access in medium to high-traffic and security areas',
        'Provides ADA compliant access to handicap applications',
        'Hanger plate allows quick installation',
        'Adjustable delayed activation for sequenced vestibule doors',
        'Reverse on obstruction stalls a door during closing cycle and re-activates to open if an obstruction is sensed anytime before the latch position',
        'Power close applies a reverse power to aid in latch check position',
      ],
      position: { top: '-50px', left: '0px' }, // unique position
    },
    {
      name: 'EasyKit',
      imageProduct: EasyImg,
      image: EasykitLogo,
      features: ['All hardware items provided with one easy-to-order, easy-to-specify part number', 'Factory-programmed, pre-wired delayed egress controller / power supply', '10 ft. flex conduit loop', 'Code-compliant delayed egress signage', 'Fire Alarm override connected at controller / power supply', 'Heavy-duty angled end cap deflects damage away from panic device', 'System does not require magnetic lock, panic provides delayed exit'],
      position: { top: '-90px', right: '20px', left: '0px' , height: '300px'}, // unique position
    },
    {
      name: 'Ryobi',
      imageProduct: Ryobi,
      image: RyobiLogo,
      features: ['Full hydraulic checking controls the door through the full opening and closing cycles', 'Adjustable backcheck upon opening and adjustable general and latch speeds through closing cycle', 'Heavy duty forged arms are interchangeable', 'Adjustable Delayed-Action speed through closing cycle', 'Many heavy duty and extra heavy duty configurations available'],
      position: { top: '-100px', left: '120px', height: '300px'}, // unique position
    },
  ];

  return (
    <div className="flex justify-center items-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-3/4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 rounded-lg"
          >
            {/* Product Image with Unique Position */}
            <div className="h-44 relative">
              <img
                src={product.imageProduct}
                alt={product.name}
                style={{
                  position: 'absolute',
                  top: product.position.top,
                  left: product.position.left,
                  right: product.position.right,
                  height: product.position .height
                }}
                className="object-scale-down"
              />
            </div>

            {/* Logo Image */}
            <img
              src={product.image}
              alt={product.name}
              className="max-w-30 max-h-20 mb-4 mx-auto"
            />

            {/* Product Name */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{product.name}</h2>

            {/* Features List */}
            <ul className="space-y-2 mb-6 text-gray-600">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex justify-left space-x-2 text-wrap">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="px-4 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-black transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
