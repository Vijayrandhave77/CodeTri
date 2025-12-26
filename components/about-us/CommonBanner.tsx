import React from 'react';

const CommonBanner = ({ 
  title, 
  imageUrl, 
  lineColor , 
  subtitle = "",
  height, 
}:any) => {
  return (
    <div className={`relative w-full ${height} overflow-hidden flex items-center `} >

      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
          
        }}
      >
        {/* Optional overlay to make text more readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
          
          {/* The Reusable Line Prop */}
          <div className={`w-24 border-t-4 ${lineColor}`}></div>
          
          <p className="mt-4 text-gray-600 text-lg">
           {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;