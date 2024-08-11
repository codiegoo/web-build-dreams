'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import "./inicio.sass";
import "./inicio.scss"

export default function Inicio() {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      top: `${70 - (scrollY / window.innerHeight) * 400}%`,
      left: `${20 + (scrollY / window.innerHeight) * 700}%`,
      transition: { duration: 0.2 }
    });
  }, [scrollY, controls]);

  return (
    <section id="InicioContain">
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>
      <div className="textContain">
        <p className="texto1">Despierta tu</p>
        <p className="texto2">vision digital</p>
        <button>Conocenos🚀</button>
      </div>
      <div className="imageContain">
        <Image src="/images/cohete.png" width={600} height={600} alt="Imagen animada" />
      </div>
    </section>
  );
}
