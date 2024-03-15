"use client";

import styles from "@components/FadeInSection.module.scss";
import { useEffect, useRef, useState } from "react";

export function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            });
        });

        const { current } = domRef;
        observer.observe(current as any);

        return () => observer.unobserve(current as any);
    }, []);

    const animationDelay = `${props.order * 100}ms`;

    return (
      <div className={`${styles.fadeIn} ${isVisible ? styles.isVisible : ''}`} ref={domRef} style={{ transitionDelay: isVisible ? animationDelay : '0ms' }}>
        {props.children}
      </div>
    );
}
