'use client'
import './contacto.sass'


export default function Contacto() {

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const nombre = formData.get('nombre')
    const ubicacion = formData.get('ubicacion')
    const contexto = formData.get('contexto')

    console.log({message: 'los datos son: ', nombre, ubicacion, contexto})

    enviarMensaje(nombre, ubicacion, contexto)
  }


  const enviarMensaje = (nombre, ubicacion, contexto) => {
    const mensaje = `Hola, de parte de ${nombre}, desde ${ubicacion}, queremos contratar buestro servicio para nuestro proyecto que consiste en: ${contexto}`
    const numeroDestino = '6871403223'

    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank')

  }


  return(

    <section id="ContactoContain">
      <h3>Escribenos un mensaje!</h3>
      <form onSubmit={handleSubmit}>
        <div className="dataInputContain">
          <input type="text" placeholder="Nombre completo: " name="nombre"/>
          <input type="text" placeholder="Ciudad, estado y pais: " name="ubicacion"/>
        </div>
        <textarea className="ideaClient" placeholder="Cuentanos sobre tu proyecto, idea o negocio: " name="contexto"/>
        <button type='submit'>Enviar mensaje</button>
      </form>
    </section>

  )
} 