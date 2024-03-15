"use client";

import styles from "@components/FadeInSection.module.scss";
import { useEffect, useRef, useState } from "react";

export function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // This will now check for when at least 50% of the element is visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setVisible(true);
        }
      });
    }, 
    {
      // Set the root to null, implying the viewport
      root: null,
      // rootMargin can be adjusted if you want to trigger the event earlier or later
      rootMargin: "0px",
      // Setting threshold to 0.5 means that the callback will be executed when 50% of the target is visible
      threshold: 0.5 
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
