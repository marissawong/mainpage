import React, {useState, useEffect} from 'react';

const getHeight = () => window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

function useCurrentHeight() {
  let [height, setHeight] = useState(getHeight());

  useEffect(() => {
    const resizeListener = () => {
      setHeight(getHeight())
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])
  return height;
}

export default useCurrentHeight;