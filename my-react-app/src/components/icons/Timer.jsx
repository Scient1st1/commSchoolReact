import React from "react";

const Timer = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g opacity="0.7">
        <rect width="40" height="40" fill="url(#pattern0_1_157)" />
      </g>
      <defs>
        <pattern
          id="pattern0_1_157"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_157" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_1_157"
          width="90"
          height="90"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Timer;
