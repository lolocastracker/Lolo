import React, { useState, useEffect } from 'react'; // 1. IMPORT useEffect
import { Image } from 'semantic-ui-react';

const DynamicImage = ({ report, ...props }) => {
  // We'll set the initial state based on the incoming report prop
  const [imageSrc, setImageSrc] = useState('');

  // 2. USEEFFECT TO SYNC STATE WITH PROPS
  // This hook runs whenever the 'report' prop changes.
  // It resets the image source to the new primary path.
  useEffect(() => {
    if (report && report.path) {
      // Start by trying the 'uploads' path for the new report
      setImageSrc(`/uploads/${report.path}`);
    } else {
      // If there's no report, set a default placeholder
      setImageSrc('/archive/default_locust_image.png');
    }
  }, [report]); // The dependency array ensures this runs only when 'report' changes

  // 3. HANDLE THE ERROR / FALLBACK
  // This function is called only if the image at `imageSrc` fails to load.
  const handleError = () => {
    const fallbackPath = report ? `/archive/${report.path}` : '/archive/default_locust_image.png';
    
    // Check if we are not already on the fallback path to prevent an infinite loop
    if (imageSrc !== fallbackPath) {
      setImageSrc(fallbackPath);
    }
  };

  // If there's no image source yet (e.g., initial load), you can show a loader or nothing
  if (!imageSrc) {
    return null; 
  }

  return (
    <Image 
      {...props} // Pass down other props like id, height, width
      src={imageSrc} 
      onError={handleError}
      alt="Sighting photo"
    />
  );
};

export default DynamicImage;