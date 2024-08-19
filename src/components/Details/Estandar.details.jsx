
import './details.sass'



export default function EstandarDetails({setShowEstandar}) {

  const handleClose = () => {
    setShowEstandar(false)
  }

  return(
    <div className="detailsContain">
      <div className="detailsInner">
        <h4 className="title">Estandar</h4>

        
        <button href="#" onClick={handleClose} className="closeBtn">X</button>
      </div>
    </div>
  )
}