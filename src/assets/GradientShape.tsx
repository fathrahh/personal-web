import React from "react";

function GradientShape(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stop-color="rgba(13.663, 60.406, 29.53, 1)"
            offset="0%"
          />
          <stop
            id="stop2"
            stop-color="rgba(89.826, 244.541, 184.271, 1)"
            offset="100%"
          />
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M17.9,-24.1C25.5,-19.2,35.5,-17,39.7,-11.2C43.9,-5.4,42.4,3.9,38.3,11.3C34.3,18.6,27.8,24,21,28.7C14.2,33.4,7.1,37.4,-0.3,37.8C-7.6,38.2,-15.3,34.8,-23,30.4C-30.8,26,-38.6,20.6,-40.9,13.3C-43.2,6.1,-39.9,-2.9,-36.3,-11.1C-32.7,-19.4,-28.8,-26.8,-22.7,-32.3C-16.6,-37.7,-8.3,-41.1,-1.6,-38.9C5.2,-36.8,10.4,-29.1,17.9,-24.1Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        style={{
          transition: "all 0.3s ease 0s",
        }}
        stroke="url(#sw-gradient)"
      />
      {props.children}
    </svg>
  );
}

export default React.memo(GradientShape);
