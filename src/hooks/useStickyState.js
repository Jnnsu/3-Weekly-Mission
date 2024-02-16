import { useState } from 'react';

const useStickyState = defaultValue => {
  const [isSticky, setIsSticky] = useState(defaultValue);
  return [isSticky, setIsSticky];
};

export default useStickyState;
