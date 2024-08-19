

import Link from 'next/link'
import './details.sass'


export default function EmpresarialDetails({setShowEmpresarial}) {


  const handleClose = () => {
    setShowEmpresarial(false)
  }

  return(
    <div className="detailsContain">
      <div className="detailsInner">
        <h4 className="title">Empresarial</h4>

        <Link href="#" />
        <button href="#" onClick={handleClose} className="closeBtn">X</button>
      </div>
    </div>
  )
}