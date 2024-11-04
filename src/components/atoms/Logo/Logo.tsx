const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className='w-[80px] sm:w-[100px]'>
      <defs>
        <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
      <g fill="url(#animatedGradient)">
        <rect x="90" y="60" width="8" height="40" />
        <rect x="110" y="50" width="8" height="60" />
        <rect x="130" y="60" width="8" height="40" />
        <rect x="70" y="70" width="8" height="20" />
        <rect x="150" y="70" width="8" height="20" />
      </g>
      <text x="58%" y="150" fontFamily="Arial" fontSize="24" textAnchor="middle" fill="url(#animatedGradient)">AIMUSIC</text>
    </svg>
  );
}

export default Logo;
