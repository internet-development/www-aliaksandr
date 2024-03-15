"use client";

import styles from "@components/FadeInSection.module.scss";
import { useEffect, useRef, useState } from "react";

export function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // This will now check for when at least 75% of the element is visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
          setVisible(true);
        }
      });
    }, 
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.75
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
