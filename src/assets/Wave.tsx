import React from "react";

function Wave(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
      {...props}
    >
      <g
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        transform="matrix(1,0,0,1,0,246.49695014953613)"
      >
        <path d="M10,10C21.805555555555557,10.416666666666666,40.97222222222223,18.458333333333336,66.66666666666667,12C92.36111111111111,5.541666666666666,105.55555555555557,-24.125,133.33333333333334,-21C161.11111111111111,-17.875,172.22222222222223,28.666666666666668,200,27C227.77777777777777,25.333333333333332,238.8888888888889,-28.791666666666668,266.6666666666667,-29C294.44444444444446,-29.208333333333332,305.5555555555556,25.166666666666668,333.33333333333337,26C361.11111111111114,26.833333333333332,372.22222222222223,-25.625,400,-25C427.77777777777777,-24.375,438.8888888888889,22.541666666666664,466.6666666666667,29C494.44444444444446,35.458333333333336,505.5555555555556,0.7916666666666661,533.3333333333334,6C561.1111111111111,11.208333333333334,572.2222222222222,54.625,600,54C627.7777777777778,53.375,638.8888888888889,4.25,666.6666666666667,3C694.4444444444446,1.75,707.6388888888889,46.541666666666664,733.3333333333334,48C759.0277777777778,49.458333333333336,778.1944444444445,17.916666666666664,790,10" />
      </g>
    </svg>
  );
}

export default React.memo(Wave);
