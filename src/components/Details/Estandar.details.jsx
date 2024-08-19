
import './details.sass'



export default function EstandarDetails({setShowEstandar}) {

  const handleClose = () => {
    setShowEstandar(false)
  }

  return(
    <div className="detailsContain">
      <div className="detailsInner">
        <h4 className="title">Estandar</h4>
          <p>Ideal para presentaciones de productos, pequeños negocios, servicios profesionales como pediatras, nutriologos, dentistas</p>
          <ul>
            <li>✅ Dominio y hosting.</li>
            <li>✅ Paginia de inicio y hasta 8 secciones.</li>
            <li>✅ Coneccion con redes sociales.</li>
            <li>✅ Diseño profesional, creativo y a medida.</li>
            <li>✅ Diseño adaptable a dispositivos mobiles.</li>
            <li>✅ Diseño escalable largo plazo.</li>
            <li>✅ Derecho a 3 modificaciones gratis.</li>
            <li>✅ Optimizacion CEO y google analytics.</li>
            <li>✅ Garantia por errores y servicio al cliente por 6 meses.</li>
            <li>✅ Entrega maxima de 15 dias habiles.</li>
          </ul>
        <button className="cotizarBtn">Cotizar</button>
        <button href="#" onClick={handleClose} className="closeBtn">X</button>
      </div>
    </div>
  )
}