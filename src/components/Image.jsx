import { useState } from 'react';

const Image = ({ src, alt, className, fallbackSrc = 'https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Available' }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${error ? 'opacity-50' : ''}`}
        onLoad={handleLoad}
        onError={() => setError(true)}
      />
      
      {/* Loading spinner */}
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
};

export default Image;
