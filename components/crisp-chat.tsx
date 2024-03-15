"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e9d3a825-a383-43d3-b1ab-e6a5b6a69b63");
  }, []);

  return null;
};
