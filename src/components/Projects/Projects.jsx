
import Image from 'next/image'
import './projects.sass'

export default function Projects({setShowProjects}) {

  const handleClose = () => {
    setShowProjects(false)
  }

  return(
    <div className="projectsContain">
      <div className="projectsInner">
        <h4 className="titleProjectCard">Algunos proyectos de nuestros clientes.</h4>
        <div className="cardsProjectContain">
          <div className="cardInner">
            <h5 className="cardTitle">Sorteos JP</h5>
            <div className="imageContain">
              <Image src="" width={100} heigth={100} />
              <p>App web para la <span>gestion de boletos en una rifa</span> con sistema de apartado por Whatsapp.</p>
            </div>
            <button className="linkToProject">Ver proyecto</button>
          </div>
          <div className="cardInner">
            <h5 className="cardTitle">Proyeto 2</h5>
            <button className="linkToProject">Ver proyecto</button>
          </div>
          <div className="cardInner">
            <h5 className="cardTitle">Proyeto 2</h5>
            <button className="linkToProject">Ver proyecto</button>
          </div>
        </div>
        <button className="closeBtn" onClick={handleClose}>X</button>
      </div>
    </div>
  )
}