'use client';

import { FC, ReactNode, useEffect, useState } from "react";

interface props {
  children: ReactNode;
};

const ClientOnly: FC<props> = ({ children }) => {
  
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted)
    return null;

  return (
    <>
      {children}
    </>
  );
};

export default ClientOnly;