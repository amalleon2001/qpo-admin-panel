import { useEffect } from 'react';

function FullScreenStyles() {
  useEffect(() => {
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';

    const root = document.getElementById('root');
    if (root) {
      root.style.height = '100%';
      root.style.margin = '0';
      
    }

    return () => {
      document.documentElement.style.height = '';
      document.body.style.height = '';
      document.body.style.margin = '';
      

      if (root) {
        root.style.height = '';
        root.style.margin = '';
      }
    };
  }, []);

  return null;
}

export default FullScreenStyles;
