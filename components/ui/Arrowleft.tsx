import React from "react";

type Props = {};

const Arrowleft = ({ className }: { className: string }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
    </div>
  );
};

export default Arrowleft;
