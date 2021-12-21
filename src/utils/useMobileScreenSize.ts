import { useEffect, useState } from 'react';

const useMobileScreenSize = (): boolean | null => {
  const [width, setWidth] = useState<number>(window && window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window && window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= 768;
};

export default useMobileScreenSize;
