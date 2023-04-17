"use client";

import { useEffect, useState } from "react";

interface CLientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<CLientOnlyProps> = ({ children }) => {
  const [hashMounted, setHashMounted] = useState(false);

  useEffect(() => {
    setHashMounted(true);
  }, []);

  if (!hashMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
