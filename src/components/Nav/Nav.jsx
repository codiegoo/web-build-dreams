'use client'
import Image from "next/image";
import Link from "next/link";
import './nav.sass'
import { useState } from "react"


export default function Nav() {

  const [ activeLink, setActiveLink ] = useState("#InicioContain")

  const handleLinkClick = (href) => {
    setActiveLink(href)
  }

  return(
    <nav>
      <Image width={200} height={50} src="/images/logo.jpeg"/>
      <ul>
        <li><Link href="#InicioContain" className={activeLink === "#InicioContain" ? "button" : ""}
            onClick={() => handleLinkClick("#InicioContain")}>Inicio</Link></li>
        <li><Link href="#ServiciosContain" className={activeLink === "#ServiciosContain" ? "button" : ""}
            onClick={() => handleLinkClick("#ServiciosContain")}>Servicios</Link></li>
        <li><Link href="#NosotrosContain" className={activeLink === "#NosotrosContain" ? "button" : ""}
            onClick={() => handleLinkClick("#NosotrosContain")}>Nosotros</Link></li>
        <li><Link href="#ContactoContain" className={activeLink === "#ContactoContain" ? "button" : ""}
            onClick={() => handleLinkClick("#ContactoContain")}>Contacto</Link></li>
      </ul>
    </nav>
  )
}