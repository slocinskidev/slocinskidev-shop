import React from 'react';

const ArrowDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Mask"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </clipPath>
    </defs>
    <g id="_20x20_arrow-back--grey" transform="translate(0 24) rotate(-90)">
      <rect id="Mask-2" width="24" height="24" fill="none" />
      <g id="_20x20_arrow-back--grey-2" clipPath="url(#clip-path)">
        <g id="Group_2" transform="translate(8 7)">
          <path
            id="Rectangle"
            d="M0,6.586V0H6.586"
            transform="translate(0.686 5.157) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default ArrowDown;
