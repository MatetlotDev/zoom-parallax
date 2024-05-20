"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import styles from "./styles.module.scss";
import Image1 from "../../public/images/available001.webp";
import Image2 from "../../public/images/available003.webp";
import Image3 from "../../public/images/available007.webp";
import Image4 from "../../public/images/available009.webp";
import Image5 from "../../public/images/available012.webp";
import Image6 from "../../public/images/available0129.webp";
import Image7 from "../../public/images/available014.webp";
import Image8 from "../../public/images/available2329.webp";
import Image9 from "../../public/images/available923.webp";

export default function Main() {
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const images = [
    {
      src: Image1,
      scale: scale4,
    },
    {
      src: Image2,
      scale: scale7,
    },
    {
      src: Image3,
      scale: scale6,
    },
    {
      src: Image4,
      scale: scale6,
    },
    {
      src: Image5,
      scale: scale9,
    },
    {
      src: Image6,
      scale: scale7,
    },
    {
      src: Image7,
      scale: scale8,
    },
    {
      src: Image8,
      scale: scale8,
    },
    {
      src: Image9,
      scale: scale9,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.sticky}>
          {images.map(({ src, scale }, idx) => (
            <motion.div
              key={idx}
              style={{ scale: scale }}
              className={styles.animated_div}
            >
              <div className={styles.image_container}>
                <Image alt={`image ${idx}`} src={src} fill placeholder="blur" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
