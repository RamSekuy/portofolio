"use client";
import { ReactNode, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AosInit({ children }: { children: ReactNode }) {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return <>{children}</>;
}
