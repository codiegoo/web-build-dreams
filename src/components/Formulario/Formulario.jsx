
import './formulario.sass'

export default function Formulario() {


  return(
    <div className="fromContain">
      <div className="formInner">
        <form action="POST">
          <input type="text" placeholder="Nombre del negocio, proyecto, empresa o nombre completo:"/>
        </form>
      </div>
    </div>
  )
}