"use client";

import styles from "@components/FadeInSection.module.scss";
import { useEffect, useRef, useState } from "react";

export function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });

    const { current } = domRef;
    observer.observe(current as any);

    return () => observer.unobserve(current as any);
  }, []);
  return (
    <div
      className={`${styles.fadeIn} ${isVisible ? styles.isVisible : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
