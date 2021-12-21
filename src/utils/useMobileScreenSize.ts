import { useEffect, useState } from 'react';
import { isBrowser } from './isBrowser';

const useMobileScreenSize = (): boolean | null => {
  if (!isBrowser) return null;

  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
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
