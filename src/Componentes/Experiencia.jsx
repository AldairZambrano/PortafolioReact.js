import '../Estilos.css/Experiencia.css'

const Cardexperienced = ({titulo,parrafo,habilidad,habilidad1,habilidad2,habilidad3,icon}) =>{
  return (
    <div className="columna col-12 col-md-4">
    <i className={icon}></i>
    <p className="experiencia-titulo">{titulo}</p>
    <p>{parrafo}</p>
    <div class="badges-contenedor">
      <span className="badge text-bg-primary">{habilidad}</span>
      <span className="badge text-bg-primary">{habilidad1}</span>
      <span className="badge text-bg-primary">{habilidad2}</span>
      <span className="badge text-bg-primary">{habilidad3}</span>
    </div>
  </div>
  )
}

export default function Experiencia () {
    return (
        <section className="experiencia seccion-clara">
      <div className="container text-center">
        <div className="row">
           {/* Desarrollo Web  */}
           <Cardexperienced icon='bi bi-laptop' titulo='Desarrollo Web y aplicaciones web' parrafo='¡Hola! Permíteme presentarme, soy un desarrollador web y creador de aplicaciones web. Me apasiona el mundo de la tecnología y la programación, y he encontrado en el desarrollo web una forma de convertir esa pasión en una carrera.' habilidad='HTML' habilidad2='CSS' habilidad3='JAVASCRIPT' habilidad1='REACT.JS'></Cardexperienced>
          {/* Articulos */}
           <Cardexperienced icon='bi bi-hourglass-split' titulo='Pasatiempo' parrafo='Tengo una dedicación al deporte, un enfoque en la educación y una habilidad para la creación de aplicaciones web. Son intereses versátiles y muestran mi disposición para desarrollar habilidades tanto físicas como intelectuales.' habilidad='Estudiar' habilidad1='Crear' habilidad2='Jugar'></Cardexperienced>
         {/*  Estudiante */}
        <Cardexperienced icon="bi bi-person-bounding-box" titulo='Estudiante' parrafo='Estoy cursando un tecnico profesional en mantenimiento de sistemas informaticos en el infotep, Tengo un curos de desarollo web responsivo y estoy cursando un bootcamp de javaScript' habilidad='freecodecamp' habilidad2='Infotep' habilidad1='Bootcampt de midudev'></Cardexperienced>
        </div>
      </div>
    </section>
    )
}