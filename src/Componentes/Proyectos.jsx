import imagenes from "./imagenes"
import '../Estilos.css/Proyectos.css'

const Proyect = ({UrlImg,alt, nameProyect, DireccionProyectRepo,DireccionProyectweb}) => {
return(
    <div className="col-12 col-md-6 col-lg-4">
    <div className="proyecto">
      <img src={UrlImg} alt={alt} />
      <div className="overlay">
        <p>{nameProyect}</p>
        <div className="iconos-contenedor">
          <a href={DireccionProyectRepo} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href={DireccionProyectweb} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-laptop"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
)
}

export default function Proyectos () {
    return(
      <section id="proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
        <h2 className="seccion-titulo texto-negro">Mis proyectos recientes</h2>
        <h3 className="seccion-descripcion">Estos son algunos proyectos que he creado recientemente...</h3> 
        <div className="container text-center proyectos-contenedor">  
        <div className="row">
         
         {/* primer proyecto */}
        <Proyect UrlImg={imagenes.Proyect1} alt='proyecto 1' nameProyect='Ranchera' DireccionProyectRepo='https://github.com/AldairZambrano/rancheras.github.io' DireccionProyectweb='https://aldairzambrano.github.io/rancheras.github.io/#how-it-works'></Proyect>
        <Proyect UrlImg={imagenes.Proyect2} alt='proyecto 2' nameProyect='Homenaje' DireccionProyectRepo='https://github.com/AldairZambrano/tribute_page.github.io' DireccionProyectweb=' https://aldairzambrano.github.io/tribute_page.github.io/'></Proyect>
        <Proyect UrlImg={imagenes.Proyect3} alt='proyecto 3' nameProyect='CV' DireccionProyectRepo='https://github.com/AldairZambrano/aldairzambrano.github.io' DireccionProyectweb='https://aldairzambrano.github.io/'></Proyect>
        <Proyect UrlImg={imagenes.Proyect4}alt='proyecto 4' nameProyect='Cuestionario' DireccionProyectRepo='https://github.com/AldairZambrano/cuestionario.github.io-' DireccionProyectweb='https://aldairzambrano.github.io/cuestionario.github.io-/'></Proyect>
        <Proyect  UrlImg={imagenes.Proyect5} alt='proyecto 5' nameProyect='Portafolio' DireccionProyectRepo='https://github.com/AldairZambrano/PortafolioReact.js' DireccionProyectweb='https://portafolio-ajzp.netlify.app/'></Proyect>
        <Proyect UrlImg={imagenes.Proyect6} alt='proyecto 6' nameProyect='Calculadora' DireccionProyectRepo='https://github.com/AldairZambrano/Calculadora' DireccionProyectweb='https://calculadorazam.netlify.app/'></Proyect>
        <Proyect UrlImg={imagenes.tienda} alt='proyecto 7' nameProyect='Tienda fast food' DireccionProyectRepo='https://github.com/AldairZambrano/Tienda' DireccionProyectweb='https://tienda-fast-foot.netlify.app/'></Proyect>
        </div>
      </div>
      <a href="https://github.com/AldairZambrano" target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn btn-info">
          Ver más proyectos
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </a>
    </section> 
    )
}