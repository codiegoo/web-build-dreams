import Nav from "@/src/components/Nav/Nav";
import Contacto from "@/src/layouts/contacto/Contacto";
import Footer from "@/src/layouts/footer/Footer";
import Inicio from "@/src/layouts/inicio/Inicio"
import Nosotros from "@/src/layouts/nosotros/Nosotros";
import Servicios from "@/src/layouts/servicios/Servicios";

export default function Home() {
  return (
    <main>
      <Nav/>
      <Inicio/>
      <Servicios/>
      <Nosotros/>
      <Contacto/>
      <Footer/>
    </main>
  );
}
