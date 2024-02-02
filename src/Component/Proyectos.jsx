import imagenes from "./imagenes"
import '../style/Proyectos.css'

// eslint-disable-next-line react/prop-types
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
          <i className="bi bi-globe2"></i>
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
        <h2 className="seccion-titulo texto-negro">Mis proyectos</h2>
        <h3 className="seccion-descripcion">Estos son algunos proyectos que he creado recientemente...</h3> 
        <div className="container text-center proyectos-contenedor">  
        <div className="row">
        
         {/* primer proyecto */}
        <Proyect  UrlImg={imagenes.Proyect5} alt='proyecto 5' nameProyect='Portafolio' DireccionProyectRepo='https://github.com/AldairZambrano/PortafolioReact.js' DireccionProyectweb='https://portafolio-ajzp.netlify.app/'></Proyect>
        <Proyect  UrlImg={imagenes.TIC} alt='proyecto 11' nameProyect='Tic tac toe' DireccionProyectRepo='https://github.com/AldairZambrano/tic-tac-toe' DireccionProyectweb='https://tic-tac-toei.netlify.app/'></Proyect>
        <Proyect  UrlImg={imagenes.Camara} alt='proyecto 10' nameProyect='Camara' DireccionProyectRepo='https://github.com/AldairZambrano/Camara' DireccionProyectweb='https://zippy-twilight-99a722.netlify.app/'></Proyect>
        <Proyect UrlImg={imagenes.Proyect6} alt='proyecto 6' nameProyect='Calculadora' DireccionProyectRepo='https://github.com/AldairZambrano/Calculadorapro' DireccionProyectweb='https://calculadora-plor.netlify.app/'></Proyect>
        <Proyect UrlImg={imagenes.tienda} alt='proyecto 7' nameProyect='Tienda fast food' DireccionProyectRepo='https://github.com/AldairZambrano/Tienda' DireccionProyectweb='https://tienda-fast-foot.netlify.app/'></Proyect>
        <Proyect  UrlImg={imagenes.tiendaderopa} alt='proyecto 8' nameProyect='Tienda de Ropa' DireccionProyectRepo='https://github.com/AldairZambrano/tiendaderopa' DireccionProyectweb='https://aldairzambrano.github.io/tiendaderopa/'></Proyect>
        <Proyect UrlImg={imagenes.Proyect3} alt='proyecto 3' nameProyect='CV' DireccionProyectRepo='https://github.com/AldairZambrano/aldairzambrano' DireccionProyectweb='https://aldairzambrano.github.io/aldairzambrano/'></Proyect>
        <Proyect UrlImg={imagenes.admiImv} alt='proyecto 9' nameProyect='admi-imv' DireccionProyectRepo='https://github.com/AldairZambrano/admi-imv' DireccionProyectweb='https://admi-imv.netlify.app/'></Proyect>
        <Proyect UrlImg={imagenes.Proyect1} alt='proyecto 1' nameProyect='Ranchera' DireccionProyectRepo='https://github.com/AldairZambrano/rancheras.github.io' DireccionProyectweb='https://aldairzambrano.github.io/rancheras.github.io/#how-it-works'></Proyect>
        <Proyect UrlImg={imagenes.Proyect2} alt='proyecto 2' nameProyect='Homenaje' DireccionProyectRepo='https://github.com/AldairZambrano/tribute_page.github.io' DireccionProyectweb=' https://aldairzambrano.github.io/tribute_page.github.io/'></Proyect>
        <Proyect UrlImg={imagenes.Proyect4}alt='proyecto 4' nameProyect='Cuestionario' DireccionProyectRepo='https://github.com/AldairZambrano/cuestionario.github.io-' DireccionProyectweb='https://aldairzambrano.github.io/cuestionario.github.io-/'></Proyect>
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