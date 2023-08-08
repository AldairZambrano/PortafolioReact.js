
const Titulos = ({UrlImg,alt, nameTitulo, DireccionTitulo}) => {
    return(
        <div className="col-12 col-md-6 col-lg-4">
        <div className="proyecto">
          <img src={UrlImg} alt={alt} />
          <div className="overlay">
            <p>{nameTitulo}</p>
            <div className="iconos-contenedor">
              <a href={DireccionTitulo} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
    }


export default function Titulo () {
    return (

    <section id="proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
        <h2 className="seccion-titulo texto-negro">Titulo</h2>
        <h3 className="seccion-descripcion">Estos son mis titulos obtenidos...</h3> 
        <div className="container text-center proyectos-contenedor">  
        <div className="row">
        <Titulos nameTitulo="Diploma de secundaria" ></Titulos>
        <Titulos nameTitulo="Certificado de Freecodecamp"></Titulos>
        </div>
    </div>
    {/* <a href="https://github.com/AldairZambrano" target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn btn-info">
        Ver más proyectos
        <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
    </a> */}
    </section> 
    )
}