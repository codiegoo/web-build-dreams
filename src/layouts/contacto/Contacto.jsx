
import './contacto.sass'


export default function Contacto() {


  return(

    <secton id="ContactoContain">
      <h3>Escribenos un mensaje!</h3>
      <form action="POST">
        <div className="dataInputContain">
          <input type="text" placeholder="Nombre completo: "/>
          <input type="text" placeholder="Ciudad, estado y pais: "/>
        </div>
        <textarea className="ideaClient" type="text" placeholder="Cuentanos tu proyecto, idea o negocio: "/>
      </form>
      <button>Enviar mensaje</button>
    </secton>

  )
}