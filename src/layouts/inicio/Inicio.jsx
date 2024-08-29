import Image from "next/image";
import "./inicio.sass";
import './inicio.scss'

export default function Inicio() {

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
        <button href="#serviciosContain">Conocenos 🚀</button>
      </div>
      <div className="imageContain">
        <Image src="/images/cohete.png" width={500} height={500} alt="Imagen animada" />
      </div>
    </section>
  )
}




