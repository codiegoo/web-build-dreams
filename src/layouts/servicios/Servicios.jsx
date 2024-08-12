
import './servicios.sass'


export default function Servicios() {


  return(
    <section id="ServiciosContain">
      <div className="cardInner">
        <div className="cardContain">
          <h4>Express</h4>
          <div className="textCardContain">
            <p>Una pagina web <span>economica</span> y de <span>rapido desarrollo</span> </p>
            <p>Ideal para <span>lanzamiento de nuevos productos, pequeños negocios locales y promoción de servicios profesionales como abogados, dentistas, médicos, entre otros</span>.</p>
            <p>Nivel de inversion: <span>Bajo</span></p>
          </div>
          <button>Detalles</button>
        </div>
        <div className="cardContain">
          <h4>Estandar</h4>
          <div className="textCardContain">
            <p>Una pagina web especial para <span>pymes</span> y <span>venta retail</span> de <span>medio desarrollo</span>. </p>
            <p>Ideal para <span>catálogos de productos, información detallada de la empresa, comercios pequeños a medianos y retail minorista, entre otros</span>.</p>
            <p>Nivel de inversion: <span>Medio</span></p>
          </div>
          <button>Detalles</button>
        </div>
        <div className="cardContain">
          <h4>Empresarial</h4>
          <div className="textCardContain">
            <p>Una pagina web para <span>empresas de medio tamaño, comerciales y corporativas</span>.</p>
            <p>Ideal para <span>sorteos, sistemas de reservas, menu de platillos, blogging y portal corporativo, comercios electronicos, y venta al por mayor en retail</span>.</p>
            <p>Nivel de inversion: <span>Alto</span></p>
          </div>
          <button>Detalles</button>
        </div>
      </div>
      <div className="stepsContain">
        <div className="stepTextContain">
          <div className="stepInner">
            <div className="step">
              <div className="circle">
                <p>1</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="step">
              <div className="circle">
                <p>2</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="step">
              <div className="circle">
                <p>3</p>
              </div>
            </div>
          </div>
          <div className="textInner">
            <p>Ponte en contacto con nostros y cuentanos sobre tu <br /> proyecto, idea o negocio.</p>
            <p>Valida la propuesta de diseño y presupuesto presentada por nuestro <br /> equipo de desarrollo.</p>
            <p>Valida el funcionamiento y compatibildad con redes sociales de tu pagina web <br /> y listo, tu negocio esta online.</p>
          </div>
        </div>
        <h3>3 sencillos <br /> <span>pasos 👨🏻‍🚀</span></h3>
      </div>
    </section>
  )
}