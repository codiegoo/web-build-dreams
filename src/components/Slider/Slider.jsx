'use client';
import { useState, useEffect } from 'react';

const images = [
  '/images/devteam.jpg',
  '/images/devteam1.jpg',
  '/images/devteam2.jpg',
  '/images/devteam3.jpg',
];

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(images[images.length - 1]);
  const [animationClass, setAnimationClass] = useState('fade-in');
  const [slideChange, setSlideChange] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('fade-out'); // Inicia la animación de salida

      // Cambio de imagen después de la animación de salida
      setTimeout(() => {
        setPrevImage(images[currentImage]); // Actualiza la imagen previa
        setCurrentImage((prev) => (prev + 1) % images.length); // Actualiza la imagen actual
        setAnimationClass('fade-in'); // Inicia la animación de entrada
      }, 200); // Duración de la animación de salida (1 segundo)

      setSlideChange(true);
    }, 5000); // Intervalo de 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [currentImage]);

  return (
    <div className="slider-wrapper">
      <div className="slider">
        <img
          src={prevImage}
          alt="Previous Slide"
          className={`slide ${animationClass}`}
        />
        <img
          src={images[currentImage]}
          alt="Current Slide"
          className={`slide ${animationClass}`}
        />
      </div>
    </div>
  );
}
