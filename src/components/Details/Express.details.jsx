
import './details.sass'


export default function ExpressDetails({setShowExpress}) {

  const handleClose = () => {
    setShowExpress(false)
  }

  return(
    <div className="detailsContain" >
      <div className="detailsInner">
        <h4 className="title">Express</h4>
        <p>Ideal para presentaciones de productos, pequeños negocios, servicios profesionales como pediatras, nutriologos, dentistas</p>
        <ul>
          <li>✅ Dominio y hosting.</li>
          <li>✅ Paginia de inicio y 4 secciones.</li>
          <li>✅ Coneccion con redes sociales.</li>
          <li>✅ Diseño tipo landing page.</li>
          <li>✅ Diseño adaptable a dispositivos mobiles.</li>
          <li>✅ Diseño escalable largo plazo.</li>
          <li>✅ Optimizacion CEO y google analytics.</li>
          <li>✅ Garantia por errores y servicio al cliente por 6 meses.</li>
          <li>✅ Entrega maxima de 5 dias habiles.</li>
        </ul>
        <button className="cotizarBtn">Cotizar</button>
        <button href="#" onClick={handleClose} className="closeBtn">X</button>
      </div>
    </div>
  )
}