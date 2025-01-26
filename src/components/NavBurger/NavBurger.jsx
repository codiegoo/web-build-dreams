''
import { useState } from "react"


export default function NavBurger() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const [ activeLink, setActiveLink ] = useState("#InicioContain")
  
  // Detecta el tamaño de la pantalla y actualiza el estado
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 990);
    };

    // Ejecuta en el primer renderizado
    handleResize();

    // Escucha cambios en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);

    // Limpia el listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsBurgerOpen(false); // Cierra el menú hamburguesa al hacer clic
  };

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return(
    <div className="navBurgerContain">
      {/* <ul>
        <li><Link href="#InicioContain" className={activeLink === "#InicioContain" ? "button" : ""}
            onClick={() => handleLinkClick("#InicioContain")}>Inicio</Link></li>
        <li><Link href="#ServiciosContain" className={activeLink === "#ServiciosContain" ? "button" : ""}
            onClick={() => handleLinkClick("#ServiciosContain")}>Servicios</Link></li>
        <li><Link href="#NosotrosContain" className={activeLink === "#NosotrosContain" ? "button" : ""}
            onClick={() => handleLinkClick("#NosotrosContain")}>Nosotros</Link></li>
        <li><Link href="#ContactoContain" className={activeLink === "#ContactoContain" ? "button" : ""}
            onClick={() => handleLinkClick("#ContactoContain")}>Contacto</Link></li>
      </ul> */}

<div className="nav-header">
        <Image width={150} height={40} src="/images/logo.jpeg" alt="Logo" />
        {isSmallScreen && (
          <button className="burger-button" onClick={toggleBurgerMenu}>
            <span className="burger-icon">{isBurgerOpen ? "✖" : "☰"}</span>
          </button>
        )}
      </div>

      {/* Menú de navegación */}
      {isSmallScreen ? (
        isBurgerOpen && (
          <div className="nav-burger">
            <ul>
              <li>
                <Link
                  href="#InicioContain"
                  className={activeLink === "#InicioContain" ? "button" : ""}
                  onClick={() => handleLinkClick("#InicioContain")}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#ServiciosContain"
                  className={activeLink === "#ServiciosContain" ? "button" : ""}
                  onClick={() => handleLinkClick("#ServiciosContain")}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#NosotrosContain"
                  className={activeLink === "#NosotrosContain" ? "button" : ""}
                  onClick={() => handleLinkClick("#NosotrosContain")}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#ContactoContain"
                  className={activeLink === "#ContactoContain" ? "button" : ""}
                  onClick={() => handleLinkClick("#ContactoContain")}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )
      ) : (
        <ul className="nav-list">
          <li>
            <Link
              href="#InicioContain"
              className={activeLink === "#InicioContain" ? "button" : ""}
              onClick={() => handleLinkClick("#InicioContain")}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="#ServiciosContain"
              className={activeLink === "#ServiciosContain" ? "button" : ""}
              onClick={() => handleLinkClick("#ServiciosContain")}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="#NosotrosContain"
              className={activeLink === "#NosotrosContain" ? "button" : ""}
              onClick={() => handleLinkClick("#NosotrosContain")}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="#ContactoContain"
              className={activeLink === "#ContactoContain" ? "button" : ""}
              onClick={() => handleLinkClick("#ContactoContain")}
            >
              Contacto
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}