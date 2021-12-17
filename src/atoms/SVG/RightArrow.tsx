import React from 'react';

const RightArrow = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="38"
    height="24"
    viewBox="0 0 38 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37.0683 13.0607C37.6541 12.4749 37.6541 11.5251 37.0683 10.9393L27.5223 1.3934C26.9366 0.807611 25.9868 0.807611 25.401 1.3934C24.8152 1.97919 24.8152 2.92893 25.401 3.51472L33.8863 12L25.401 20.4853C24.8152 21.0711 24.8152 22.0208 25.401 22.6066C25.9868 23.1924 26.9366 23.1924 27.5223 22.6066L37.0683 13.0607ZM0.934814 13.5H36.0076V10.5H0.934814V13.5Z"
      fill="currentColor"
    />
  </svg>
);

export default RightArrow;
