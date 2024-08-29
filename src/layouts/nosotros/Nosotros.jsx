
'use client'
import Slider from '@/src/components/Slider/Slider'
import './nosotros.sass'
import { useState } from 'react'
import Projects from '@/src/components/Projects/Projects'


export default function Nosotros() {

  const [ showProjects, setShowProjects ] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    setShowProjects(true)
  }

  return(

    <section id="NosotrosContain">
      <div className="cubeContain cubeContainL">
        <div className="cube1">
          <h2>Misión, visión y valores de nuestra startup.</h2>
          <div className="textContain">
            <p>Nuestra misión es <span>transformar ideas innovadoras en soluciones web efectivas y atractivas </span>. Nos dedicamos a ofrecer un desarrollo de calidad que potencia la presencia digital de nuestros clientes, asegurando que cada proyecto supere las expectativas con un <span>enfoque en la funcionalidad, la estética y la experiencia del usuario</span>.</p>
            <p>Aspiramos a ser líderes en la creación de experiencias digitales excepcionales, reconocidos por nuestra capacidad para <span>convertir sueños en realidades</span>. En WebBuildDreams, estamos a la vanguardia de la tecnología y las tendencias de diseño web, ofreciendo <span>soluciones adaptables y que marcan tendencias</span>, ayudando a nuestros clientes a destacar y crecer en un entorno digital competitivo.</p>
            <p>Nuestro equipo se guía por una ética profesional que combina <span>innovación, calidad y adaptabilidad</span>, donde valoramos la <span>colaboración</span> y la <span>transparencia</span>, manteniendo una <span>comunicación abierta y honesta</span> con nuestros clientes. Además, nos comprometemos a <span>proteger sus datos</span>, garantizando que toda la información se maneje con la máxima <span>seguridad y respeto</span>. Estos principios fundamentan nuestro enfoque para construir relaciones sólidas y entregar resultados excepcionales a nuestros clientes.</p> 
          </div>
        </div>
        <div className="cube2">
          <p>Creando experiencias web <br /> que inspiran y conectan 🚀</p>
        </div>
      </div>
      <div className="cubeContain cubeContainR">
        <div className="cube1" onClick={handleClick}>
          <p>Click para ver proyectos de nuestros clientes 🔥</p>
        </div>
        {showProjects && <Projects setShowProjects={setShowProjects}/>}
        <div className="cube2">
          <Slider/>
        </div>
      </div>
    </section>
  )
}