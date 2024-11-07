export const InstallIcon = () => {
  return (
    <span className="relative cursor-pointer">
      <svg
        height="40px"
        width="40px"
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <defs>
          <linearGradient id="installGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA63D">
              <animate
                attributeName="stop-color"
                values="#FFA63D;#FF3D77;#338AFF;#3CF0C5;#FFA63D"
                dur="5s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#FF3D77">
              <animate
                attributeName="stop-color"
                values="#FF3D77;#338AFF;#3CF0C5;#FFA63D;#FF3D77"
                dur="5s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <g fill="url(#installGradient)">
          <path
            d="M426.537,0H179.641c-22.243,0-40.376,18.175-40.376,40.401v129.603h25.221V69.106h277.206V424.46H164.485
            v-83.887h-25.221v131.034c0,22.192,18.133,40.392,40.376,40.392h246.896c22.192,0,40.375-18.2,40.375-40.392v-129.03V40.401
            C466.912,18.175,448.728,0,426.537,0z M303.08,478.495c-9.174,0-16.636-7.47-16.636-16.661c0-9.183,7.462-16.653,16.636-16.653
            c9.158,0,16.686,7.47,16.686,16.653C319.766,471.025,312.247,478.495,303.08,478.495z"
          />
          <polygon
            points="225.739,335.774 358.778,255.289 225.739,174.804 225.739,221.11 45.088,221.11 45.088,289.468 
            225.739,289.468"
          />
        </g>
      </svg>
    </span>
  );
};
