const WaveSVG = function () {
  return (
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="#3730a3" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="#4338ca" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="#4f46e5" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#6366f1" />
      </g>
    </svg>
  );
};

export default WaveSVG;
